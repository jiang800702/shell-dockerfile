#!/bin/bash
#kubectl create -f /repo/kube-conf/redis-rc.yaml
i=`kubectl get po -o wide|grep redis-cluster|awk '{print $1}'`
for a in $i;do
i2="kubectl exec -it $a redis-cli<<EOF cluster nodes; exit; exit;EOF"
echo $i2|bash|tee init-redis-cluster
if [ `cat init-redis-cluster|wc -l` -ge 6 ];then
exit
fi
done
echo 'Please wait, init cluster for redis........'
#sleep 60
kubectl get po -o wide|grep redis-cluster|awk '{print $6,$1}'|sort -k2 > /opt/redishosts
kubectl get po -o wide|grep redis-cluster|awk '{print $1,$6}'|sort -k2 > /opt/redis.ck
kubectl cp /opt/redishosts $a:/mnt/redishosts
kubectl exec $a bash /usr/bin/cluster.sh
