#!/bin/bash
node_version="8.9.3"
# 下载node包
wget https://nodejs.org/dist/v${node_version}/node-v${node_version}-linux-x64.tar.xz
#wget http://192.168.31.202:8000/node-v${node_version}-linux-x64.tar.xz
  
# 解压二进制源码
xz -d node-v${node_version}-linux-x64.tar.xz
tar xvf node-v${node_version}-linux-x64.tar

#在export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL下面添加路径，:wq保存退出。
#set for nodejs

echo 'export NODE_HOME=/root/node-v'${node_version}'-linux-x64'>>/etc/profile 
echo 'export PATH=$NODE_HOME/bin:$PATH'>>/etc/profile
source /etc/profile

exit 0

#sh -c "$(curl -fsSL http://gitlab.tools.vipshop.com/bruce01.wang/node-install-linux/blob/master/node.sh)"
#sh -c "$(curl -fsSL http://192.168.31.202:8000/node.sh)"
#sh -c "$(curl -fsSL https://raw.githubusercontent.com/nodeps/nodeps/master/node.sh)"
