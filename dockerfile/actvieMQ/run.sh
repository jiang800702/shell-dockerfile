#!/bin/bash
set -e
if [ -e /apache-activemq-5.13.3/firstrun ];then
   /bin/rm -f /apache-activemq-5.13.3/firstrun
   /bin/cp -r /apache-activemq-5.13.3/* /usr/local/activemq/
   /bin/rm -rf /apache-activemq-5.13.3
fi
/usr/local/activemq/bin/activemq console
