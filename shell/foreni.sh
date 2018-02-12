#!/bin/bash
ips="1.1.1.1 2.2.2.2 3.3.3.3"
#eni gateway ip address
enigw="gateway ip address"
#eni vip address
evipaddr="vip ip address"

#local vip ip address
nvipaddr="local vip ip address"

#get network
nets=`for i in $ips;do echo $i|sed "s? ?\n?g"|awk -F "." '{print $1,$2,$3}'|sed "s? ?.?g";done|uniq`

if [ "$1"x = "master"x ]; then
	for i in $nets;do
		#add route for eni
		/sbin/route add -net "$i"".0/24" gw $enigw
		
		#del route to local vip address
		/sbin/route del -net "$i"".0/24" gw $nvipaddr
		
		#add iptables for '$i'
		/sbin/iptables -t nat -I POSTROUTING -d "$i"".0/24" -j SNAT --to-source $evipaddr
	done

else # slave

	for i in $nets;do
		#add route for eni
		/sbin/route del -net "$i"".0/24" gw $enigw

		#del route to local vip address
		/sbin/route add -net "$i"".0/24" gw $nvipaddr

		#add iptables for '$i'
		/sbin/iptables -t nat -D POSTROUTING -d "$i"".0/24" -j SNAT --to-source $evipaddr
	done
fi
