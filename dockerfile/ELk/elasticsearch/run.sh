#!/bin/bash
set -e
if [ ! -d /var/lib/elasticsearch/data ];then
  mkdir -p /var/lib/elasticsearch/data
  chown -R elasticsearch:elasticsearch /var/lib/elasticsearch/data
fi
if [ ! -d /var/log/elasticsearch/logs ];then
  mkdir -p /var/log/elasticsearch/logs
  chown -R elasticsearch:elasticsearch /var/log/elasticsearch/logs
fi
/etc/init.d/elasticsearch start
