#!/bin/bash
set -e
#get first ip
while true
do
	if [ "$FIRSTip" == "" ];then
		echo 'Please input first ip'
		echo -e "start ip=\c"
		read FIRSTip
	else
		break
	fi
done
#get last ip
while true
do
	if [ "$ENDip" == "" ];then
		echo 'Please  input end ip'
		echo -e "last ip=\c"
		read ENDip
	else
		break
	fi
done

while true
do
	if [ "$USER_NAME" == "" ];then
		echo 'Please input user name'
		echo -e "USER=\c"
		read USER_NAME
	else
		break
	fi
done
while true
do
	if [ "$sudoPASSWORD" == "" ];then
		echo 'Please input password'
		echo -e "PASSWORD=\c"
		read sudoPASSWORD
	else
		break
	fi
done
echo -e 'please input area,like Shanghai please input SH'
echo -e "area=\c"
read hostAREA
if [ x"$hostAREA" == x"" ];then
	hostAREA="s`echo $FIRSTip|awk -F "." '{print $3}'`"
fi
##create hosts
FIP=`echo $FIRSTip|awk -F "." '{print $NF}'`
EIP=`echo $ENDip|awk -F "." '{print $NF}'`
LAN=`echo $FIRSTip|awk -F "." '{print $1,$2,$3}'|sed 's? ?.?g'`
sudo rm -f /tmp/hosts
for((i=$FIP;i<=$EIP;i++));do 
	echo $LAN.$i $hostAREA-node$i >> /tmp/hosts
done
#create cert for ssh
if [ ! -f ~/.ssh/id_rsa ];then
	ssh-keygen -t rsa -P "" -f ~/.ssh/id_rsa
fi
#ssh without input "yes"
echo $sudoPASSWORD|sudo -S sed -i 's?#   StrictHostKeyChecking ask?StrictHostKeyChecking no?g' /etc/ssh/ssh_config
#ssh auth without password
echo $sudoPASSWORD|sudo -S apt-get update
echo $sudoPASSWORD|sudo -S apt-get install -y python3-paramiko lrzsz --allow-unauthenticated
cat >/tmp/ssh-tmp.py <<EOF
#!/usr/bin/python   
import paramiko  
import threading  
def ssh2(ip,username,passwd,cmd):  
    try:  
        ssh = paramiko.SSHClient()  
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())  
        ssh.connect(ip,22,username,passwd,timeout=5)  
        for m in cmd:  
            stdin, stdout, stderr = ssh.exec_command(m)  
            out = stdout.readlines()  
            for o in out:  
                print(o)  
        print("%s\tOK\n"%(ip))  
        ssh.close()  
    except :  
        print ("%s\tError\n"%(ip))  
if __name__=='__main__':  
    cmd = ['mkdir -p ~/.ssh','echo "id_rsa.pub" >> ~/.ssh/authorized_keys','chmod 700 ~/.ssh','chmod 600  ~/.ssh/authorized_key']
    username = "$USER_NAME"
    passwd = "$sudoPASSWORD"
    threads = []
    print("Begin......") 
    for i in range($FIP,$EIP+1):  
        ip = '$LAN.'+str(i)  
        a=threading.Thread(target=ssh2,args=(ip,username,passwd,cmd))   
        a.start() 
EOF
sed -i "s?id_rsa.pub?`cat ~/.ssh/id_rsa.pub`?g" /tmp/ssh-tmp.py
python3 /tmp/ssh-tmp.py
#sysctl.conf
echo 'vm.swappiness = 0
net.core.somaxconn = 511
net.ipv4.ip_forward=1
net.ipv4.ip_nonlocal_bind = 1
fs.file-max=10000000
fs.nr_open = 10000000
net.ipv4.tcp_mem = 786432 2097152 3145728
net.ipv4.tcp_rmem = 4096 4096 16777216
net.ipv4.tcp_wmem = 4096 4096 16777216
net.ipv4.tcp_tw_reuse=1
net.ipv4.tcp_syncookies=1
net.ipv4.tcp_tw_recycle = 1
net.ipv4.ip_local_port_range = 1024 65535
net.ipv4.tcp_fin_timeout = 60
net.ipv4.tcp_max_tw_buckets = 10000
net.ipv4.tcp_syncookies = 1  
net.ipv4.conf.all.rp_filter = 1  
net.ipv4.tcp_max_syn_backlog = 1024
vm.max_map_count = 262144
net.nf_conntrack_max = 52428800' > /tmp/sysctl.conf
#add nf mod
echo 'nf_conntrack_ipv4
nf_defrag_ipv4
nf_conntrack' > /tmp/modules
#add limit.conf
echo '* soft nofile 2000000
* hard nofile 2000000
root soft nofile 2000000
root hard nofile 2000000
* soft nproc 80480
* hard nproc 80960
root soft nproc 80480
root hard nproc 80960'>/tmp/limit
#add history
echo 'export HISTTIMEFORMAT="%F %T `whoami` "' > /tmp/profile


#copy hosts to every nodes
for i in `cat /tmp/hosts|awk '{print $1}'`;do
	ssh $USER_NAME@$i "sudo bash -c 'cat ~/.ssh/authorized_keys > /tmp/authorized_keys '" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /tmp/authorized_keys|sort|uniq  > ~/.ssh/authorized_keys'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'chmod -R 600 ~/.ssh/authorized_keys'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'chmod 700 ~/.ssh'" 2>/dev/null

	scp /tmp/hosts $USER_NAME@$i:/tmp/hosts 2>/dev/null
	echo "echo $sudoPASSWORD|sudo -S cat /etc/sudoers|grep -n '%sudo'" > /tmp/sudo 2>/dev/null
	scp /tmp/sudo $USER_NAME@$i:/tmp/sudo 2>/dev/null
	N=`ssh $USER_NAME@$i bash /tmp/sudo` 
	N=`echo $N|awk -F ":" '{print $1}'`
	echo "echo $sudoPASSWORD|sudo -S sed -i $N's# ALL# NOPASSWD:ALL#g' /etc/sudoers" > /tmp/sudo2
	echo "if [ \`grep $i /etc/hosts|wc -l\` -eq 0  ];then" >> /tmp/sudo2
	echo "echo $sudoPASSWORD|sudo -S bash -c 'cat /tmp/hosts >> /etc/hosts'" >> /tmp/sudo2
	echo "fi" >> /tmp/sudo2 2>/dev/null
	echo "echo $sudoPASSWORD|sudo -S sed -i 's?#   StrictHostKeyChecking ask?StrictHostKeyChecking no?g' /etc/ssh/ssh_config" >>/tmp/sudo2
	scp /tmp/sudo2 $USER_NAME@$i:/tmp/sudo2 2>/dev/null
	
	ssh $USER_NAME@$i /bin/bash /tmp/sudo2 2>/dev/null
	host_name=`ssh $USER_NAME@$i cat /tmp/hosts|grep $i|cut -d " " -f2`
	ssh $USER_NAME@$i "sudo bash -c 'echo $host_name> /etc/hostname'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'sed -i 2d /etc/hosts'" 2>/dev/null 
	ssh $USER_NAME@$i "sudo bash -c 'sed -i 2i\"127.0.1.1\       $host_name\" /etc/hosts'" 2>/dev/null
	scp /tmp/sysctl.conf $USER_NAME@$i:/tmp/sysctl.conf 2>/dev/null
	#for redis 
	ssh $USER_NAME@$i "sudo bash -c \"sed -i 's?exit 0??g' /etc/rc.local\"" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c \"echo 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' >> /etc/rc.local\"" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /etc/rc.local|grep \"#\" > /tmp/rc.local'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /etc/rc.local|grep -v \"#\"|sort|uniq >> /tmp/rc.local'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /tmp/rc.local > /etc/rc.local'" 2>/dev/null
	#for kernel
	scp /tmp/modules $USER_NAME@$i:/tmp/
	scp /tmp/limit $USER_NAME@$i:/tmp/
	scp /tmp/profile $USER_NAME@$i:/tmp/
	ssh $USER_NAME@$i "sudo bash -c 'cat /tmp/modules >> /etc/modules'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /etc/modules|grep \"#\"> /tmp/modules'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /etc/modules|grep -v \"#\"|sort|uniq >> /tmp/modules'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /tmp/modules > /etc/modules'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'modprobe nf_conntrack'" 2>/dev/null

	ssh $USER_NAME@$i "sudo bash -c 'cat /tmp/limit >> /etc/security/limits.conf'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /etc/security/limits.conf|grep \"#\" > /tmp/limit'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /etc/security/limits.conf|grep -v \"#\"|sort|uniq >> /tmp/limit'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /tmp/limit > /etc/security/limits.conf'" 2>/dev/null

	ssh $USER_NAME@$i "sudo bash -c 'cat /tmp/profile >> /etc/profile'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /etc/profile|grep -v HISTTIMEFORMAT > /tmp/profile'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /etc/profile|grep HISTTIMEFORMAT|sort|uniq >> /tmp/profile'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /tmp/profile > /etc/profile'" 2>/dev/null

	ssh $USER_NAME@$i "sudo bash -c 'cat /tmp/sysctl.conf >> /etc/sysctl.conf'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /etc/sysctl.conf|grep \"#\" > /tmp/sysctl.conf'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /etc/sysctl.conf|grep -v \"#\"|sort|uniq >> /tmp/sysctl.conf'" 2>/dev/null
	ssh $USER_NAME@$i "sudo bash -c 'cat /tmp/sysctl.conf > /etc/sysctl.conf'" 2>/dev/null
	ssh $USER_NAME@$i "sudo sysctl -p" 2>/dev/null
	ssh $USER_NAME@$i "source /etc/profile" 2>/dev/null
	ssh $USER_NAME@$i "sudo rm -rf /tmp/*" 2>/dev/null
done

