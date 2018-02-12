echo yes|redis-trib.rb create --replicas 1 192.168.0.37:6379 192.168.0.57:6379 192.168.0.87:6379 192.168.0.37:7000 192.168.0.57:7000 192.168.0.87:7000

nohup redis-server /etc/redis.conf &
rm -f nodes.conf
nohup redis-server /etc/redis-s.conf &
rm -f nodes.conf