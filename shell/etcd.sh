#/bin/bash
set -e
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
	ssh $USER_NAME@$i sudo apt-get install -y etcd --allow-unauthenticated

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
	scp etcd $USER_NAME@$i:/tmp/etcd
	ssh $USER_NAME@$i sudo mv /tmp/etcd /etc/default/etcd
	ssh $USER_NAME@$i sudo systemctl daemon-reload
	ssh $USER_NAME@$i sudo systemctl restart etcd.service
done

