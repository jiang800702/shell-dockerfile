#/bin/bash
#set -e
while true
do
        if [ "$repo" == "" ];then
                echo 'Please input repo for linux install'
                echo 'Example: 192.168.0.1,default port 80'
                echo 'If port is 8080,please input 192.168.0.1:8080'
                echo -e "repo=\c"
                read repo
        else
                break
        fi
done
#get etcds
while true
do
        if [ "$ETCD_Server" == "" ];then
                echo 'Please input etcd server IP'
                echo 'Example: 192.168.0.1 192.168.0.2 192.168.0.3'
                echo -e "etcd server ip=\c"
                read ETCD_Server
        else
                echo 'No input etcd server IP'
                break
        fi
done
while true
do
        if [ "$USER_NAME" == "" ];then
                echo 'Please input user name for linux server'
                echo 'Important: the user permit use "sudo"'
                echo -e "USER=\c"
                read USER_NAME
        else
                break
        fi
done

#####################################################
etcds="$ETCD_Server"
#####################################################

rm -rf etcd/
mkdir -p etcd
cd etcd/
cat > etcd.service <<EOF
[Unit]
Description=etcd - highly-available key value store
Documentation=https://github.com/coreos/etcd
Documentation=man:etcd
After=network.target
Wants=network-online.target

[Service]
Environment=DAEMON_ARGS=
Environment=ETCD_NAME=%H
Environment=ETCD_DATA_DIR=/var/lib/etcd/default
EnvironmentFile=-/etc/default/%p
Type=notify
User=etcd
PermissionsStartOnly=true
#ExecStart=/bin/sh -c "GOMAXPROCS=\$(nproc) /usr/bin/etcd \$DAEMON_ARGS"
ExecStart=/usr/bin/etcd \$DAEMON_ARGS
Restart=on-abnormal
#RestartSec=10s
#LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
Alias=etcd3.service
EOF


initial_cluster=""
for i in $etcds; do
	name=`ssh $USER_NAME@$i hostname`
	initial_cluster="$initial_cluster$name=http://$i:2380,"
done

#echo $initial_cluster
initial_cluster=${initial_cluster::-1}
#echo $initial_cluster


for i in $etcds; do
	ssh $USER_NAME@$i sudo rm -rf /var/lib/etcd/*
	ssh $USER_NAME@$i sudo rm -rf /etc/default/etcd
	ssh $USER_NAME@$i sudo ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
	ssh $USER_NAME@$i sudo apt-get update
	ssh $USER_NAME@$i sudo apt-get install -y wget --allow-unauthenticated
	ssh $USER_NAME@$i sudo wget -O /tmp/etcd-v3.3.0-linux-amd64.tar.gz http://$repo/etcd-v3.3.0-linux-amd64.tar.gz
	ssh $USER_NAME@$i sudo tar xf /tmp/etcd-v3.3.0-linux-amd64.tar.gz -C /tmp/
	ssh $USER_NAME@$i sudo cp -f /tmp/etcd-v3.3.0-linux-amd64/etcd /usr/bin/
	ssh $USER_NAME@$i sudo cp -f /tmp/etcd-v3.3.0-linux-amd64/etcdctl /usr/bin/
	
	name=`ssh $USER_NAME@$i hostname`
	cat > etcd <<EOF
ETCD_NAME=$name
ETCD_DATA_DIR="/var/lib/etcd/"
ETCD_LISTEN_PEER_URLS="http://$i:2380"
ETCD_LISTEN_CLIENT_URLS="http://$i:2379,http://127.0.0.1:4001"
ETCD_INITIAL_ADVERTISE_PEER_URLS="http://$i:2380"
ETCD_INITIAL_CLUSTER="$initial_cluster"
ETCD_INITIAL_CLUSTER_STATE="new"
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster-sdn"
ETCD_ADVERTISE_CLIENT_URLS="http://$i:2379"
EOF
	echo '#!/bin/bash' > foruser
	echo 'if [ `sudo cat /etc/group|grep etcd|wc -l` -eq 0 ];then sudo groupadd -g 217 etcd;fi' >> foruser
	echo 'if [ `sudo cat /etc/passwd|grep etcd|wc -l` -eq 0 ];then sudo mkdir -p /var/lib/etcd && sudo useradd -g 217 -u 111 etcd -d /var/lib/etcd/ -s /bin/false;fi' >> foruser
	scp foruser $USER_NAME@$i:/tmp/
	scp etcd $USER_NAME@$i:/tmp/etcd
	scp etcd.service $USER_NAME@$i:/tmp/
	ssh $USER_NAME@$i sudo cp -f /tmp/etcd /etc/default/etcd
	ssh $USER_NAME@$i sudo cp -f /tmp/etcd.service /lib/systemd/system/
	ssh $USER_NAME@$i sudo bash /tmp/foruser
	ssh $USER_NAME@$i sudo systemctl daemon-reload
	ssh $USER_NAME@$i sudo systemctl enable etcd.service
	ssh $USER_NAME@$i sudo chown -R etcd:etcd /var/lib/etcd
	ssh $USER_NAME@$i sudo systemctl status etcd.service
	#ssh $USER_NAME@$i sudo systemctl start etcd.service
	ssh $USER_NAME@$i sudo rm -rf /tmp/*
done
echo "etcd service start ..........."
sleep 5
for i in $etcds; do
	ssh $USER_NAME@$i sudo service etcd start
done
