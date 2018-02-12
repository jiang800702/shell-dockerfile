#!/bin/bash
set -e
ELASTICSEARCH_SERVICE_HOST=`env|grep ELASTICSEARCH_SERVICE_HOST|awk -F "=" '{print $2}'`
if [ x"$ELASTICSEARCH_SERVICE_HOST" == x"" ];then
   echo "Defautl elasticseach ip is 192.168.0.30
if different please Use: docker run -it -e ELASTICSEARCH_SERVICE_HOST=192.168.1.1 'image name'" 
    sed -i "s?ELASTICSEARCH?192.168.0.30:9200?g" /etc/logstash/conf.d/logstash.conf
   
else
   elasticservers=`echo $ELASTICSEARCH_SERVICE_HOST|sed "s?$ELASTICSEARCH_SERVICE_HOST?&:9200?g"|sed "s?,?:9200\",\"?g"`  
   sed -i "s?ELASTICSEARCH?$elasticservers?g" /etc/logstash/conf.d/logstash.conf
fi
/usr/share/logstash/bin/logstash -f /etc/logstash/conf.d/logstash.conf
