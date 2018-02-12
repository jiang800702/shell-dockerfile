FROM 192.168.0.45:5000/base
MAINTAINER lstar
#ENV VERSION 0.8.0
COPY   *.zip /
RUN mkdir /apollo-portal && unzip apollo-portal-0.8.0-github.zip -d /apollo-portal \
    && mkdir /apollo-configservice&& unzip apollo-configservice-0.8.0-github.zip -d /apollo-configservice \
    && mkdir /apollo-adminservice && unzip apollo-adminservice-0.8.0-github.zip -d /apollo-adminservice \
    && rm -rf /*.zip && sed -i '$d' /apollo-adminservice/scripts/startup.sh\
    && sed -i '$d' /apollo-portal/scripts/startup.sh \
    && sed -i '$d' /apollo-configservice/scripts/startup.sh \
    && echo "tail -f /dev/null" >> /apollo-portal/scripts/startup.sh\
    && echo "tail -f /dev/null" >> /apollo-configservice/scripts/startup.sh\
    && echo "tail -f /dev/null" >> /apollo-adminservice/scripts/startup.sh
EXPOSE 8070 8080 8090
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY *.sh /
ADD supervisord.conf /etc/supervisord.conf
#CMD ["/run.sh"]
ENTRYPOINT ["/usr/bin/supervisord"]
