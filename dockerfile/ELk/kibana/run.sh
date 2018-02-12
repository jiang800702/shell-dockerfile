#!/bin/bash
set -e
ELASTICSEARCH_SERVICE_HOST=`env|grep ELASTICSEARCH_SERVICE_HOST|awk -F "=" '{print $2}'`
if [ x"$ELASTICSEARCH__SERVICE_HOST" != x"" ];then
   echo "Defautl elasticseach ip is 192.168.0.30
if different please Use: docker run -it -e ELASTICSEARCH__SERVICE_HOST=192.168.1.1 'image name'" 
    sed -i "s?localhost:9200?192.168.0.30:9200?g" /etc/kibana/kibana.yml
   
else
   elasticservers=`echo $ELASTICSEARCH_SERVICE_HOST|sed "s?$ELASTICSEARCH_SERVICE_HOST?&:9200?g"|sed "s?,?:9200\",\"?g"`  
   sed -i "s?localhost:9200?$elasticservers?g" /etc/kibana/kibana.yml
fi
/usr/share/kibana/bin/kibana "-c /etc/kibana/kibana.yml"
