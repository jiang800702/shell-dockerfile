#!/bin/bash
set -e
if [ -f /tmp/jclock ];then
	kill 0
else
	#获取vip地址
	if [ ! -f /tmp/ipsvip ];then
		cat /etc/keepalived/keepalived.conf|grep -2 "virtual_ipaddress"|grep "dev"|awk -F "/" '{print $1}'|awk '{print $1}'|sed 's?$?|?g' > /tmp/ipsvip
	else
		exit 1
	fi
	
	tmp=`cat /tmp/ipsvip`
	#减去最后一个字符
	vip=`echo ${tmp%?}|sed 's? ??g'`
	
	i=`ip addr | grep $vip | wc -l`
	i=`ip addr | grep $vip | wc -l`
	#检测haproxy是否有分叉
	sudo ss|grep "ESTAB"|grep -E ":6640|:6633"|grep -vE "$vip"|sort -k5|awk '{print $5,$6}' > tmp.txt
	sed -i 's?:? ?g' tmp.txt
	cat tmp.txt|sort -k1 > jiance.txt
	rm -f tmp.txt
	#remove finish.txt
	if [ -f finish.txt ];then
	 rm -f finish.txt
	fi
	echo 'Please Wait .........'
	n=`cat jiance.txt|awk '{print $1}'|sort|uniq`
	for i in $n; do
	a=`cat jiance.txt |grep -w "^$i"|awk NR==1'{print$3}'`
	b=`cat jiance.txt |grep -w "^$i"|awk NR==2'{print$3}'`
	if [ "$a" != "$b" ];then
	 echo $i 
	 echo $i >> finish.txt
	fi
	done
	if [ -f finish.txt ];then
	   echo "finished,please see the finish.txt file"
	else
	   echo "finished,all ok"
	   touch finish.txt
	fi
	num=`cat finish.txt | wc -l`
	echo "ODL_BRANCH $num" | curl --data-binary @- http://172.16.74.131:9091/metrics/job/haproxy
	rm -f /tmp/jclock
fi
