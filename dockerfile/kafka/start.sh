#! /usr/bin/env bash

# Fail hard and fast
set -eo pipefail

ZOOKEEPER_ID=${ZOOKEEPER_ID:-1}
echo "ZOOKEEPER_ID=$ZOOKEEPER_ID"

echo $ZOOKEEPER_ID > /var/lib/zookeeper/myid

ZOOKEEPER_TICK_TIME=${ZOOKEEPER_TICK_TIME:-2000}
echo "tickTime=${ZOOKEEPER_TICK_TIME}" > /usr/local/zookeeper/conf/zoo.cfg
echo "tickTime=${ZOOKEEPER_TICK_TIME}"

ZOOKEEPER_INIT_LIMIT=${ZOOKEEPER_INIT_LIMIT:-10}
echo "initLimit=${ZOOKEEPER_INIT_LIMIT}" >> /usr/local/zookeeper/conf/zoo.cfg
echo "initLimit=${ZOOKEEPER_INIT_LIMIT}"

ZOOKEEPER_SYNC_LIMIT=${ZOOKEEPER_SYNC_LIMIT:-5}
echo "syncLimit=${ZOOKEEPER_SYNC_LIMIT}" >> /usr/local/zookeeper/conf/zoo.cfg
echo "syncLimit=${ZOOKEEPER_SYNC_LIMIT}"

echo "dataDir=/var/lib/zookeeper" >> /usr/local/zookeeper/conf/zoo.cfg
echo "clientPort=2181" >> /usr/local/zookeeper/conf/zoo.cfg

ZOOKEEPER_CLIENT_CNXNS=${ZOOKEEPER_CLIENT_CNXNS:-60}
echo "maxClientCnxns=${ZOOKEEPER_CLIENT_CNXNS}" >> /usr/local/zookeeper/conf/zoo.cfg
echo "maxClientCnxns=${ZOOKEEPER_CLIENT_CNXNS}"

ZOOKEEPER_AUTOPURGE_SNAP_RETAIN_COUNT=${ZOOKEEPER_AUTOPURGE_SNAP_RETAIN_COUNT:-3}
echo "autopurge.snapRetainCount=${ZOOKEEPER_AUTOPURGE_SNAP_RETAIN_COUNT}" >> /usr/local/zookeeper/conf/zoo.cfg
echo "autopurge.snapRetainCount=${ZOOKEEPER_AUTOPURGE_SNAP_RETAIN_COUNT}"

ZOOKEEPER_AUTOPURGE_PURGE_INTERVAL=${ZOOKEEPER_AUTOPURGE_PURGE_INTERVAL:-0}
echo "autopurge.purgeInterval=${ZOOKEEPER_AUTOPURGE_PURGE_INTERVAL}" >> /usr/local/zookeeper/conf/zoo.cfg
echo "autopurge.purgeInterval=${ZOOKEEPER_AUTOPURGE_PURGE_INTERVAL}"

for VAR in `env`
do
  if [[ $VAR =~ ^ZOOKEEPER_SERVER_[0-9]+= ]]; then
    SERVER_ID=`echo "$VAR" | sed -r "s/ZOOKEEPER_SERVER_(.*)=.*/\1/"`
    SERVER_IP=`echo "$VAR" | sed 's/.*=//'`
    if [ "${SERVER_ID}" = "${ZOOKEEPER_ID}" ]; then
      echo "server.${SERVER_ID}=0.0.0.0:2888:3888" >> /usr/local/zookeeper/conf/zoo.cfg
      echo "server.${SERVER_ID}=0.0.0.0:2888:3888"
    else
      echo "server.${SERVER_ID}=${SERVER_IP}:2888:3888" >> /usr/local/zookeeper/conf/zoo.cfg
      echo "server.${SERVER_ID}=${SERVER_IP}:2888:3888"
    fi
  fi
done

cd /usr/local/zookeeper/bin && ./zkServer.sh start-foreground
