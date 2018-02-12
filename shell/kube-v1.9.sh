#/bin/bash
#alias kubectl='kubectl --kubeconfig=/etc/kubernetes/admin.conf' v1.9.2
set -e
##########################################################################
#                         INPUT
##########################################################################
#echo 'Please input user name for linux server'
#echo 'Important: the user permit use "sudo"'
#echo -e "USER=\c"
#read USER_NAME
#if [ "$USER_NAME" == "" ];then
#	$USER_NAME=`/usr/bin/who|awk '{print $1}'`
#fi
#setting the repo for install
while true
do 
	if [ "$repo" == "" ]; then
		echo 'Please input Repo IP OR Domain for install deb'
		echo -e "REPO=\c"
		read repo
	else 
		break
	fi
done
#setting kubernets master
while true
do 
	if [ "$masterIP" == "" ]; then
		echo 'Please input kubernets master ip'
		echo -e "K8S_MASTER_IP=\c"
		read masterIP
	else
		break
	fi
done
#setting docker registry
echo 'Please docker registry ip,default port is 5000'
echo 'If port not 5000,like input 192.168.0.50:8888'
echo -e "dockerREG=\c"
read dockerREG

#setting minions
while true
do 
	if [ "$k8minions" == "" ]; then
		echo 'Please input ip for kubernet minions'
		echo 'example:"192.168.0.100 192.168.0.101 192.168.0.102"'
		echo -e "minions=\c"
		read k8minions
	else
		break
	fi
done
######################################################################################
#                                 Settings
######################################################################################
if [ ! -f "/etc/default/etcd" ];then
        EXTERNAL_ETCD_ENDPOINTS=""
else
        EXTERNAL_ETCD_ENDPOINTS=`cat /etc/default/etcd |grep "ETCD_INITIAL_CLUSTER="|awk -F '"' '{print $2}'|sed 's?=?,?g'|awk -F "," '{print $2,$4,$6}'|sed 's? ?,?g'|sed 's?:2380?:2379?g'`
fi
if [ "$dockerREG" == "" ];then
        dockerREG="$K8S_MASTER_IP:5000"
else
	if [ `echo $dockerREG|grep ":"|wc -l` -eq 0 ];then
	  dockerREG=$dockerREG:5000
	fi
fi
MASTERIP="$masterIP"
REPO="$repo"
K8S_MASTER_IP="$MASTERIP"
minions="$k8minions"
echo "REPO=$repo"
echo "K8S_MASTER_IP=$MASTERIP"
echo "DOCKERREG=$dockerREG"
echo "minions=$k8minions"
echo "etcds=$EXTERNAL_ETCD_ENDPOINTS"
######################################################################################
scp -r $REPO:/repo/k8s192 ./
sudo rm -f sources.list
echo deb http://$REPO / > sources.list
sudo cp sources.list /etc/apt/sources.list
#安装相应的组件
sudo apt-get update
sudo apt-get install -y docker.io --allow-unauthenticated
sudo apt-get install -y ebtables socat --allow-unauthenticated
Dline=`sudo grep -n LimitNOFILE /lib/systemd/system/docker.service|cut -f 1 -d ":" `
sudo sed -i "$Dline c\LimitNOFILE=1048576" /lib/systemd/system/docker.service 

cat > daemon.json <<EOF
{ "insecure-registries":["$dockerREG"] }
EOF

sudo cp -f daemon.json /etc/docker/
sudo service docker restart
#安装kubernetes 服务器
sudo dpkg -i k8s192/*.deb

for i in k8s192/*.gz; do sudo docker load < $i; done

sudo systemctl enable kubelet.service
sudo systemctl stop kubelet.service

#close swap
sudo swapoff -a
fswap=`cat /etc/fstab |grep swap|awk '{print $1}'`
sudo sed -i "s?$fswap?#$fswap?" /etc/fstab

#systemctl stop etcd.service

######################################################################################

sudo rm -rf /etc/kubernetes/*
sudo rm -rf /var/lib/kubelet/*
#sudo docker ps -a -q | sudo xargs docker rm
sudo kubeadm reset

sudo rm -f /tmp/kubeadm-conf.yaml
cat > /tmp/kubeadm-conf.yaml <<EOF
apiVersion: kubeadm.k8s.io/v1alpha1
kind: MasterConfiguration
# networking:
#   podSubnet: 10.244.0.0/16
#apiServerCertSANs:
#- master01
#- master02
#- master03
#- 172.16.2.1
#- 172.16.2.2
#- 172.16.2.3
#- 172.16.2.100
etcd:
  endpoints:
#token: 67e411.zc3617bb21ad7ee3
kubernetesVersion: v1.9.2
EOF


if [ -z "$EXTERNAL_ETCD_ENDPOINTS" ]; then
	sudo sed -i 's?etcd:?#etcd?g' /tmp/kubeadm-conf.yaml
	sudo sed -i 's?endpoints:?#endpoints:?g' /tmp/kubeadm-conf.yaml
	sudo kubeadm init --config=/tmp/kubeadm-conf.yaml | sudo tee /etc/kube-server-key
else
	# re-initialize etcd
#	ssh $ETCD_ENDPOINTS etcdctl rm --recursive /registry
#	ssh $ETCD_ENDPOINTS etcdctl rm --recursive /calico
	for i in `echo $EXTERNAL_ETCD_ENDPOINTS|sed 's?,? ?g'`;do
		sudo sed -i "15i\  - $i" /tmp/kubeadm-conf.yaml	
	done
	sudo kubeadm init --config=/tmp/kubeadm-conf.yaml| sudo tee /etc/kube-server-key
fi


#添加Nodrport端口范围"--service-node-port-range=1000-62000"到/etc/kubernetes/manifests/kube-apiserver.yaml
if [ `sudo cat /etc/kubernetes/manifests/kube-apiserver.yaml|grep service-node-port-range|wc -l` -eq 0 ];then
	line_conf=`sudo cat /etc/kubernetes/manifests/kube-apiserver.yaml|grep -n "allow-privileged=true"|cut -f 1 -d ":"`
	sudo sed -i -e "$line_conf"i'\    - --service-node-port-range=1000-62000' /etc/kubernetes/manifests/kube-apiserver.yaml
fi

#设置kubectl权限
mkdir -p $HOME/.kube
sudo cp -f /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

######################################################################################
#                                 Deploy etcd as a master pod
######################################################################################
# We need: (1) modify it to listen on K8S_MASTER_IP so that minion nodes can access.
# (2) modify kube-apiserver configuration.
# (3) restart the service kubelet.
if [ -z "$EXTERNAL_ETCD_ENDPOINTS" ]; then
	sudo sed -i -e s/127.0.0.1/$K8S_MASTER_IP/g /etc/kubernetes/manifests/etcd.yaml
	sudo sed -i "s?127.0.0.1?$K8S_MASTER_IP?g" /etc/kubernetes/manifests/kube-apiserver.yaml

	sudo service docker restart
	sudo service kubelet restart
fi
######################################################################################



######################################################################################
#                                 Deploy calico network plugin
######################################################################################


line=`grep "etcd_endpoints:" -n k8s192/calico.yaml | cut -f 1 -d ":"`
if [ -z "$EXTERNAL_ETCD_ENDPOINTS" ]; then
	sudo sed -i "$line c \ \ etcd_endpoints: \"http://$K8S_MASTER_IP:2379\"" k8s192/calico.yaml
else
	# TODO: multiple instances
	sudo sed -i "$line c \ \ etcd_endpoints: \"$EXTERNAL_ETCD_ENDPOINTS\"" k8s192/calico.yaml
fi

# Change CIDR
sudo sed -i -e s/192.168.0.0/192.169.0.0/g k8s192/calico.yaml

# Wait for everything is up except kube-dns, which needs a network plugin
sudo sleep 1m

sudo kubectl --kubeconfig=/etc/kubernetes/admin.conf apply -f k8s192/calico.yaml


######################################################################################
#                                 Deploy minions
######################################################################################


cat >client.sh <<EOF
sudo apt-get update
sudo apt-get install -y docker.io --allow-unauthenticated
sudo apt-get install -y ebtables socat --allow-unauthenticated
sudo swapoff -a
fswap=\`cat /etc/fstab |grep swap|awk '{print \$1}'\`
sudo sed -i "s?\$fswap?#\$fswap?" /etc/fstab
Dline=\`sudo grep -n LimitNOFILE /lib/systemd/system/docker.service|cut -f 1 -d ":" \`
sudo sed -i "\$Dline c\LimitNOFILE=1048576" /lib/systemd/system/docker.service 
sudo systemctl restart docker
sudo dpkg -i k8s192/kubernetes-cni*.deb
sudo dpkg -i k8s192/kubelet*.deb
sudo dpkg -i k8s192/kubectl*.deb
sudo dpkg -i k8s192/kubeadm*.deb
for i in k8s192/calico*.tar.gz; do sudo docker load < \$i; done
sudo docker load < k8s192/kube-proxy.tar.gz
sudo docker load < k8s192/pause-amd64-3.0.tar.gz
sudo systemctl enable kubelet.service
sudo systemctl stop kubelet.service
sudo kubeadm reset
EOF

sudo cat /etc/kube-server-key|grep "kubeadm join" >> client.sh

for i in $minions; do
	scp -r k8s192/ $i:/$HOME/
	ssh $i sudo mkdir -p /etc/docker
	scp daemon.json $i:/$HOME/daemon.json
	ssh $i sudo cp /$HOME/daemon.json /etc/docker/daemon.json
	ssh $i sudo rm -f /$HOME/daemon.json
	scp client.sh $i:/$HOME/
	ssh $i sudo bash /$HOME/client.sh
done
echo 'please check kubenetes DNS server is runing or not ......'
echo 'command: kubectl get po -n kube-system|grep dns'
