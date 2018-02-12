#!/bin/sh
#mike
module="apollo-configservice apollo-adminservice apollo-portal"
for BASE_DIR in $module
do
        cd $BASE_DIR
        sh scripts/startup.sh

        sleep 3
        #test startup state
        STATE=`ps aux|grep $BASE_DIR|grep -v grep|wc -l`
        if [ $STATE -gt 0 ]
        then
                echo "$BASE_DIR startup success!"
        else
                echo "$BASE_DIR startup failed,please check you config!"
        fi
        cd ..
done