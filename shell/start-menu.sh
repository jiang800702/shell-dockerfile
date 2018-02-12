#/bin/bash  
#menu.sh  
  
#source ~/.shrc  
echo "----------------------------------"  
echo "please enter your choise:"  
 
echo "(0) install Docker registry" 
echo "(1) install DEB source"
echo "(2) install ceph service"
echo "(3) install etcd service"
echo "(3) install k8s server" 
echo "(2) install k8s client"   
echo "(3) create pods"  
echo "(4) delete pods"  
echo "(5) restart services"
echo "(6) uninstall k8s & docker" 
echo "(7) exit"  
echo "----------------------------------"  
read input  
  
case $input in
    0)  
    /bin/bash  registry2.sh  
    sleep 1
    /bin/bash  start-menu.sh;;
    1)  
    /bin/bash  deb.sh  
    sleep 1
    /bin/bash start-menu.sh;;  
    2)  
    /bin/bash  ceph.sh  
    sleep 1
    /bin/bash  start-menu.sh;; 
    3)  
    /bin/bash  qd-rc-svc.sh  
    sleep 1
    /bin/bash  start-menu.sh;;  
    4)  
    /bin/bash  del-rc-svc.sh  
    sleep 1
    /bin/bash  start-menu.sh;;
    5) 
    /bin/bash  restart.sh
    sleep 1
    /bin/bash  start-menu.sh;;
    6) 
    /bin/bash  uninstall.sh
    sleep 1
    /bin/bash  start-menu.sh;;
    7)  
    exit;;	
esac
