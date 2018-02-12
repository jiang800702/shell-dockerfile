#!/bin/bash
rdisc=`kubectl get po -o wide| grep redis-cluster|awk '{print $1}'`
for i in $rdisc;do
     f2="kubectl exec -it $i -- redis-cli -c<<EOF FLUSHALL; exit; exit;EOF"
     echo $f2|bash 2>/dev/null
     f3="kubectl exec -it $i -- redis-cli -c<<EOF KEYS \*; exit; exit;EOF"
     echo $f3|bash 2>/dev/null 
done
rdisc=`kubectl get po -o wide| grep redis-apps|awk '{print $1}'`
for i in $rdisc;do
     f2="kubectl exec -it $i -- redis-cli -c<<EOF FLUSHALL; exit; exit;EOF"
     echo $f2|bash 2>/dev/null
     f3="kubectl exec -it $i -- redis-cli -c<<EOF KEYS \*; exit; exit;EOF"
     echo $f3|bash 2>/dev/null 
done
rdis=`kubectl get po -o wide| grep redis|grep -vE "redis-cluster|redis-apps"|awk '{print $1}'`
f2="kubectl exec -it $rdis -- redis-cli<<EOF FLUSHALL; exit; exit;EOF"
echo $f2|bash 2>/dev/null
f3="kubectl exec -it $rdis -- redis-cli<<EOF KEYS \*; exit; exit;EOF"
echo $f3|bash 2>/dev/null
