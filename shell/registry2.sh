#!/bin/bash
# Description: create a private registry v2.2
# Version: 0.2
#
# Author: admin
# Date: 2017/2/10

set -e
apt-get update && apt-get install -y docker.io
docker load < images/registry-2.2.2.tar.gz

if [ ! -d /opt/registry ];then
  mkdir /opt/registry
fi
# Start registry container
docker run -d -p 5000:5000 --restart=always -v /opt/registry:/var/lib/registry --name registry registry:2.2.2
