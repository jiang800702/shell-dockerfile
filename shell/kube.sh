#/bin/bash
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
if [ -z $dockerREG ];then
        dockerREG="$K8S_MASTER_IP:5000"
else
	if [ `echo $dockerREG|grep ":"` == "" ];then
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
scp -r $REPO:/repo/k8s ./
echo "deb http://$REPO /" > sources.list
sudo cp sources.list /etc/apt/sources.list
#安装相应的组件
sudo apt-get update
sudo apt-get install -y docker.io --allow-unauthenticated
sudo apt-get install -y ebtables socat --allow-unauthenticated
Dline=`sudo grep -n LimitNOFILE /lib/systemd/system/docker.service|cut -f 1 -d ":" `
sudo sed -i "$Dline c\LimitNOFILE=1048576" /lib/systemd/system/docker.service 
sudo service docker restart
#安装kubernetes 服务器
sudo dpkg -i k8s/*.deb

for i in k8s/*.gz; do sudo docker load < $i; done
for i in k8s/*.tgz; do sudo docker load < $i; done
for i in k8s/*.tar; do sudo docker load < $i; done

sudo systemctl enable kubelet.service
sudo systemctl stop kubelet.service

#systemctl stop etcd.service

######################################################################################

sudo rm -rf /etc/kubernetes/*
sudo rm -rf /var/lib/kubelet/*
#sudo docker ps -a -q | sudo xargs docker rm
sudo kubeadm reset

if [ -z "$EXTERNAL_ETCD_ENDPOINTS" ]; then
	sudo kubeadm init --use-kubernetes-version v1.5.3 | sudo tee /etc/kube-server-key
else
	# re-initialize etcd
#	ssh $ETCD_ENDPOINTS etcdctl rm --recursive /registry
#	ssh $ETCD_ENDPOINTS etcdctl rm --recursive /calico
	sudo kubeadm init --use-kubernetes-version v1.5.3 --api-advertise-addresses  $K8S_MASTER_IP --external-etcd-endpoints="$EXTERNAL_ETCD_ENDPOINTS" | sudo tee /etc/kube-server-key
fi


#添加Nodrport端口范围"--service-node-port-range=1000-62000"到/etc/kubernetes/manifests/kube-apiserver.json
sudo sed -i -e 's/"--allow-privileged",/&"--service-node-port-range=1000-62000",/g' /etc/kubernetes/manifests/kube-apiserver.json

sudo sleep 10

######################################################################################
#                                 Deploy etcd as a master pod
######################################################################################
# We need: (1) modify it to listen on K8S_MASTER_IP so that minion nodes can access.
# (2) modify kube-apiserver configuration.
# (3) restart the service kubelet.
if [ -z "$EXTERNAL_ETCD_ENDPOINTS" ]; then
	sudo sed -i -e s/127.0.0.1/$K8S_MASTER_IP/g /etc/kubernetes/manifests/etcd.json
	line=`grep "etcd" -n /etc/kubernetes/manifests/kube-apiserver.json  | cut -f 1 -d ":"`
	sudo sed -i "$line c \ \ \ \ \ \ \ \ \ \ \"--etcd-servers=http://$K8S_MASTER_IP:2379\"" /etc/kubernetes/manifests/kube-apiserver.json

	sudo service docker restart
	sudo service kubelet restart
fi
######################################################################################



######################################################################################
#                                 Deploy calico network plugin
######################################################################################


line=`grep "etcd_endpoints:" -n k8s/calico.yaml | cut -f 1 -d ":"`
if [ -z "$EXTERNAL_ETCD_ENDPOINTS" ]; then
	sudo sed -i "$line c \ \ etcd_endpoints: \"http://$K8S_MASTER_IP:2379\"" k8s/calico.yaml
else
	# TODO: multiple instances
	sudo sed -i "$line c \ \ etcd_endpoints: \"$EXTERNAL_ETCD_ENDPOINTS\"" k8s/calico.yaml
fi

# Change CIDR
sudo sed -i -e s/192.168.0.0/192.169.0.0/g k8s/calico.yaml

# Wait for everything is up except kube-dns, which needs a network plugin
sudo sleep 1m

sudo kubectl apply -f k8s/calico.yaml


######################################################################################
#                                 Deploy minions
######################################################################################


cat > daemon.json <<EOF
{ "insecure-registries":["$dockerREG"] }
EOF
echo 'sudo apt-get update
sudo apt-get install -y docker.io --allow-unauthenticated
sudo apt-get install -y ebtables socat --allow-unauthenticated
Dline=`sudo grep -n LimitNOFILE /lib/systemd/system/docker.service|cut -f 1 -d ":" `
sudo sed -i "$Dline c\LimitNOFILE=1048576" /lib/systemd/system/docker.service 
sudo systemctl restart docker
sudo dpkg -i k8s/kubernetes-cni_0.3.0.1-07a8a2-00_amd64.deb
sudo dpkg -i k8s/kubelet_1.5.2-00_amd64.deb
sudo dpkg -i k8s/kubectl_1.5.2-00_amd64.deb
sudo dpkg -i k8s/kubeadm_1.6.0-alpha.0-2074-a092d8e0f95f52-00_amd64.deb
sudo for i in k8s/*.tar.gz; do docker load < $i; done
sudo for i in k8s/*.tar; do docker load < $i; done
sudo for i in k8s/*.tgz; do docker load < $i; done
sudo systemctl enable kubelet.service
sudo systemctl stop kubelet.service
sudo systemctl stop etcd.service
sudo kubeadm reset' > client.sh

tail -1 /etc/kube-server-key >> client.sh

for i in $minions; do
	scp -r k8s/ $i:/$HOME/
	ssh $i sudo mkdir -p /etc/docker
	scp daemon.json $i:/$HOME/daemon.json
	ssh $i sudo sed -i "$Dline c\LimitNOFILE=1048576" /lib/systemd/system/docker.service 
	ssh $i sudo cp /$HOME/daemon.json /etc/docker/daemon.json
	ssh $i sudo rm -f /$HOME/daemon.json
	scp client.sh $i:/$HOME/
	ssh $i sudo bash /$HOME/client.sh
done
