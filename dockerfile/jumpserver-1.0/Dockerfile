FROM ubuntu
MAINTAINER lstar <442132099@qq.com>
ADD sources.list /etc/apt/sources.list
RUN apt-get update && apt-get -y install wget libkrb5-dev libsqlite3-dev gcc make automake libssl-dev zlib1g-dev libmysqlclient-dev libffi-dev  \
    libtiff5-dev libjpeg8-dev zlib1g-dev libfreetype6-dev liblcms2-dev libwebp-dev tcl8.5-dev tk8.5-dev python-tk python-dev openssl libssl-dev  \
    libldap2-dev libsasl2-dev sqlite gcc automake  redis-server openssh-server&& \
    apt-get clean all 

#mysql server
RUN apt-get install -y debconf && apt-get clean all
RUN apt-get install -d -y mysql-server && \
    echo 'mysql-server mysql-server/root_password password 123456' | debconf-set-selections && \
    echo 'mysql-server mysql-server/root_password_again password 123456' | debconf-set-selections && \
    apt-get install -y mysql-server && apt-get clean all && rm -rf /var/lib/mysql
RUN wget http://192.168.0.45/jumpserver-1.0/Python-3.6.4.tgz && tar xf Python-3.6.4.tgz && \
cd Python-3.6.4 && ./configure && make && make install && rm -f Python-3.6.4.tgz && rm -rf Python-3.6.4 && \
cd /opt && python3.6 -m venv py3 && . /opt/py3/bin/activate
COPY jumpserver-1.0.0/. /opt
WORKDIR /opt
RUN ln -sf /opt/py3/bin/pip /usr/bin/pip && \
    pip install -r /opt/jumpserver/requirements/requirements.txt && \
    pip install -r /opt/coco/requirements/requirements.txt && \
    rm -rf /root/.cache 
RUN apt-get install -y nginx supervisor sshpass iputils-ping && apt-get clean all
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ADD run.sh /run.sh
VOLUME /data
EXPOSE 80 22 3306 8080
ENTRYPOINT [ "/run.sh" ]
