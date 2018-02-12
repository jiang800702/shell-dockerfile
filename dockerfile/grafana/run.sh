#!/bin/bash
set -e
if [ -z "$MAILSERVER" ];then
   sed -i 's/smtp.yourmail.com/local/g' /etc/grafana/grafana.ini
else
   sed -i "s/smtp.yourmail.com/$MAILSERVER/g" /etc/grafana/grafana.ini  
fi
if [ -n "$MAILADD" ];then
   sed -i "s/admin@yourmail.com/$MAILADD/g" /etc/grafana/grafana.ini  
fi
if [ -n "$MAILPWD" ];then
   sed -i "s?passwordyourmail?$MAILPWD?g" /etc/grafana/grafana.ini
fi
if [ -n "$MAILSP" ];then
   sed -i "s?:25?:$MAILSP?g" /etc/grafana/grafana.ini
fi
echo -e 'your mail server：' `cat /etc/grafana/grafana.ini|awk 'NR==289{print $3}'`
echo 'your mail address：' `cat /etc/grafana/grafana.ini|awk 'NR==290{print $3}'`
echo 'If not Correct,Please use -e MAILSERVER=smtp.yourmail.com -e MAILADD=admin@yourmail.com -e MAILPWD=password of yourmail,default port is 25,and run again'
/usr/sbin/grafana-server --homepath=/usr/share/grafana --config=/etc/grafana/grafana.ini cfg:default.paths.data=/var/lib/grafana cfg:default.paths.logs=/var/log/grafana cfg:default.paths.plugins=/var/lib/grafana/plugins
