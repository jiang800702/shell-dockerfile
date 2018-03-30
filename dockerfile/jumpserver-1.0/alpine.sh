#!/bin/bash
set -e
if [ ! -f /data/ssh/passwd ];then
	mkdir -p /data/ssh
	cp /etc/passwd /data/ssh/passwd
	rm -f /etc/passwd
	ln -sf /data/ssh/passwd /etc/passwd
else
	rm -f /etc/passwd
        ln -sf /data/ssh/passwd /etc/passwd
fi
if [ ! -f /data/ssh/shadow ];then
	cp /etc/shadow /data/ssh/shadow 
	rm -f /etc/shadow
	ln -sf /data/ssh/shadow /etc/shadow
else
	rm -f /etc/shadow
        ln -sf /data/ssh/shadow /etc/shadow
fi
if [  ! -f /data/ssh/sshkey ];then
	mkdir -p /data/ssh/sshkey
	cp -r /etc/ssh/* /data/ssh/sshkey/
	rm -rf /etc/ssh
	ln -sf /data/ssh/sshkey /etc/ssh
else
	rm -rf /etc/ssh
        ln -sf /data/ssh/sshkey /etc/ssh
fi
cat >/etc/redis.sh<<EOF
#!/bin/bash
#redis start
sed -i 's?daemonize yes?daemonize no?g' /etc/redis.conf
if [ ! -d /data/redis ];then
	mkdir -p /data/redis
	rm -rf /var/lib/redis
	ln -sf /data/redis /var/lib/redis
	/usr/bin/redis-server /etc/redis.conf 
else
	rm -rf /var/lib/redis
	ln -sf /data/redis /var/lib/redis
	/usr/bin/redis-server /etc/redis.conf
fi
EOF
chmod +x /etc/redis.sh
cat >/etc/mysql/my.cnf<<EOF
[client]
port		= 3306
socket		= /var/run/mysqld/mysqld.sock
default-character-set=utf8 

[mysqld]
port		= 3306
socket		= /var/run/mysqld/mysqld.sock
datadir = /var/lib/mysql
log_error = /var/lib/mysql/mysql.err
skip-name-resolve
skip-host-cache
skip-external-locking
symbolic-links = 0
key_buffer_size = 16M
max_allowed_packet = 1M
table_open_cache = 64
sort_buffer_size = 512K
net_buffer_length = 8K
read_buffer_size = 256K
read_rnd_buffer_size = 512K
myisam_sort_buffer_size = 8M
innodb_flush_log_at_trx_commit=2
sync_binlog=1000
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
log-bin=mysql-bin
binlog_format=mixed
server-id       = 1

[mysqldump]
quick
max_allowed_packet = 16M

[mysql]
no-auto-rehash

[myisamchk]
key_buffer_size = 20M
sort_buffer_size = 20M
read_buffer = 2M
write_buffer = 2M

[mysqlhotcopy]
interactive-timeout
EOF

mkdir -p /var/run/mysqld
chown mysql:mysql -R /var/run/mysqld
cat >/etc/mysql.sh<<EOF
#!/bin/bash
#mysql start
if [ ! -d /data/mysqldata/mysql ];then
        mkdir -p /data/mysqldata
        rm -rf /var/lib/mysql && ln -sf /data/mysqldata /var/lib/mysql
        /usr/bin/mysql_install_db --user=mysql
        chown mysql:mysql -R /data/mysqldata
        /usr/bin/mysqld_safe 

else	
        rm -rf /var/lib/mysql && ln -sf /data/mysqldata /var/lib/mysql
        /usr/bin/mysqld_safe
fi
EOF
chmod +x /etc/mysql.sh


cat >/etc/jump.sh<<EOF
#!/bin/bash
mkdir -p /data/jumpserver/logs
mkdir -p /data/jumpserver/data
cd /opt/jumpserver && rm -rf data logs
ln -sf /data/jumpserver/data /opt/jumpserver/data
ln -sf /data/jumpserver/logs /opt/jumpserver/logs
while true;do 
  if [ \`netstat -anlpt|grep :3306|wc -l\` -ge 1 ];then
        break
  fi
done
if [ "\$MYSQL_PASSWORD" == "" ];then
        MYSQL_PASSWORD="j#456mYs"
fi
if [  ! -d /var/lib/mysql/jumpserver ];then
        /usr/bin/mysql -e "CREATE DATABASE jumpserver CHARACTER SET UTF8;"
        /usr/bin/mysqladmin -uroot -h'127.0.0.1' password "\$MYSQL_PASSWORD"
        /usr/bin/mysqladmin -uroot -h'localhost' password "\$MYSQL_PASSWORD"
	cd /opt/jumpserver/utils && bash make_migrations.sh
fi

rm -rf /opt/jumpserver/logs
ln -sf /data/jumpserver/logs /opt/jumpserver/logs
if [ ! -f /data/jumpserver/config.py ];then
	cp -f /opt/jumpserver/config_example.py /opt/jumpserver/config.py
	sed -i 34,35's/^/#/g' /opt/jumpserver/config.py
	sed -i 38,43's?# ??g' /opt/jumpserver/config.py
	sed -i 38,43"s?^\\t/?    ?g" /opt/jumpserver/config.py
	sed -i 42"s?''?'\$MYSQL_PASSWORD'?g" /opt/jumpserver/config.py
	sed -i 39"s?127.0.0.1?localhost?g" /opt/jumpserver/config.py
	mv /opt/jumpserver/config.py /data/jumpserver/
	ln -sf /data/jumpserver/config.py /opt/jumpserver/config.py
	cd /opt/jumpserver/utils && bash make_migrations.sh
	python3 /opt/jumpserver/jms start all
else
	ln -sf /data/jumpserver/config.py /opt/jumpserver/config.py
	python3 /opt/jumpserver/jms start all
fi

EOF
chmod +x /etc/jump.sh

cat > /etc/coco.sh <<EOF
#!/bin/bash
mkdir -p /data/coco/logs
mkdir -p /data/coco/keys
ln -sf /data/coco/keys /opt/coco/keys
while true;do 
  if [ \`ps -ef|grep jms|grep -v grep|wc -l\` -ge 1 ];then
	break
  fi
done
sleep 5
if [ ! -f /data/coco/conf.py ];then
	cd /opt/coco && cp -f conf_example.py /data/coco/conf.py
	ln -sf /data/coco/conf.py /opt/coco/conf.py
else
	ln -sf /data/coco/conf.py /opt/coco/conf.py
fi

python3 /opt/coco/cocod start
EOF
chmod +x /etc/coco.sh

rm -rf /opt/jumpserver/logs
ln -sf /data/coco/logs /opt/coco/logs

mkdir -p /run/nginx
cat >/etc/nginx/conf.d/default.conf <<EOF
server {
    listen 80;
    server_name _;

    ## 新增如下内容，以上内容是原文内容，请从这一行开始复制
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header Host \$host;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;

    location /luna/ {
        try_files \$uri / /index.html;
        alias /opt/luna/;
    }

    location /media/ {
        add_header Content-Encoding gzip;
        root /opt/jumpserver/data/;
    }

    location /static/ {
        root /opt/jumpserver/data/;
    }

    location /socket.io/ {
        proxy_pass       http://localhost:5000/socket.io/;
        proxy_buffering off;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    #location /guacamole/ {
    #    proxy_pass       http://localhost:8081/;
    #    ## 请手动修改 localhost:8081 为自己 guacamole 的地址, 不能使用 localhost 和 127.0.0.1
    #    proxy_buffering off;
    #    proxy_http_version 1.1;
    #    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    #    proxy_set_header Upgrade \$http_upgrade;
    #    proxy_set_header Connection \$http_connection;
    #    access_log off;
    #}

    location / {
        proxy_pass http://localhost:8080;
    }
    ## 到此结束，请不要继续复制了

}
EOF

cat > /etc/supervisord.conf <<EOF
[supervisord]  
nodaemon=true  

[program:mysql]  
command=/etc/mysql.sh
  
[program:redis]  
command=/etc/redis.sh

[program:jumpserver]  
command=/etc/jump.sh

[program:coco]  
command=/etc/coco.sh

[program:nginx]  
command=/usr/sbin/nginx -g 'daemon off; master_process on;'
EOF

/usr/bin/supervisord
