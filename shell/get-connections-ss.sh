#!/bin/bash

###########################################################
#
#             Copyright TAG
#
#     Author:  Xunleer <xunleer@outlook.com>
#     Version: v0.1
#
#     ChangeLog:
#       v0.1: Initial version
#
###########################################################
while true
do
ss -at > show.log

ovsdbCount=`cat show.log | awk '{ print $4 }' | grep ":6640" | wc -l`
ovsdbECount=`cat show.log | grep "ESTAB"| awk '{ print $4 }' | grep ":6640" | wc -l`
ovsdbCCount=`cat show.log | grep "CLOSE-WAIT" | awk '{ print $4 }' | grep ":6640" | wc -l`
echo -e "OVSDB Southbound connections   : ${ovsdbCount},\t${ovsdbECount} ESTABLISHED,\t${ovsdbCCount} CLOSE_WAIT"
# echo -e "OVSDB Southbound connections   : ${ovsdbCount},\t${ovsdbECount} ESTABLISHED,\t${ovsdbCCount} CLOSE_WAIT"
# echo -e "OVSDB Southbound connections   : ${ovsdbCount},\t${ovsdbECount} ESTABLISHED,\t${ovsdbCCount} CLOSE_WAIT"

openflowCount=`cat show.log | awk '{ print $4 }' | grep -E ":6633" | wc -l`
openflowECount=`cat show.log | grep "ESTAB" | awk '{ print $4 }' | grep -E ":6633" | wc -l`
openflowCCount=`cat show.log | grep "CLOSE-WAIT" | awk '{ print $4 }' | grep -E ":6633" | wc -l`
echo -e "OPENFLOW Southbound connections: ${openflowCount},\t${openflowECount} ESTABLISHED,\t${openflowCCount} CLOSE_WAIT"

ovsdbCount=`cat show.log | awk '{ print $5 }'| grep ":6640" | wc -l`
ovsdbECount=`cat show.log |grep "ESTAB"| awk '{ print $5 }' | grep ":6640" | wc -l`
ovsdbCCount=`cat show.log |grep "CLOSE-WAIT"| awk '{ print $5 }' | grep ":6640" | wc -l`
echo -e "OVSDB Northbound connections   : ${ovsdbCount},\t${ovsdbECount} ESTABLISHED,\t${ovsdbCCount} CLOSE_WAIT"

openflowCount=`cat show.log | awk '{ print $5 }' | grep -E ":6633" | wc -l`
openflowECount=`cat show.log |grep "ESTAB"| awk '{ print $5 }' | grep -E ":6633" | wc -l`
openflowCCount=`cat show.log | grep "CLOSE-WAIT"| awk '{ print $5 }' | grep -E ":6633" | wc -l`
echo -e "OPENFLOW Northbound connections: ${openflowCount},\t${openflowECount} ESTABLISHED,\t${openflowCCount} CLOSE_WAIT"
cat show.log |grep "ESTAB"| awk '{ print $5 }' | grep -E ":6633|:6640" |sort -n|uniq -c | tee
echo '-----------------------------------------------------------------------'
date 
sleep 5 
done
