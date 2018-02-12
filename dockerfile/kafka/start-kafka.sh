#!/bin/bash
set -e
#start kafka
nohup /usr/local/kafka/bin/kafka-server-start.sh /usr/local/kafka/config/server.properties
##create topics
/usr/local/kafka/bin/kafka-topics.sh --if-not-exists --create --zookeeper zoo1:2181 --replication-factor 1 --partitions 20 --topic cms-odl
/usr/local/kafka/bin/kafka-topics.sh --if-not-exists --create --zookeeper zoo1:2181 --replication-factor 1 --partitions 20 --topic cms-nginx
/usr/local/kafka/bin/kafka-topics.sh --if-not-exists --create --zookeeper zoo1:2181 --replication-factor 1 --partitions 20 --topic cms-haproxy
/usr/local/kafka/bin/kafka-topics.sh --if-not-exists --create --zookeeper zoo1:2181 --replication-factor 1 --partitions 20 --topic cms-business
/usr/local/kafka/bin/kafka-topics.sh --if-not-exists --create --zookeeper zoo1:2181 --replication-factor 1 --partitions 20 --topic cms-selfservice
