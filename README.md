## 技术栈
react +　webpack + css + webpack-dev-server + local proxy


## github 
本地项目 git init 出现一个.git的文件

本地仓库与github相连接  参考 http://blog.csdn.net/zamamiro/article/details/70172900

git add .    

出现错误信息 If no other git process is currently running, this probably means a
git process crashed in this repository earlier. Make sure no other git
process is running and remove the file manually to continue.

解决方法：rm -f ./.git/index.lock

git commit -m "备注信息"
查看本地 C:\Users\server\.ssh 是否有id_rsa和id_rsa.pub这两个文件 拷贝id_rsa.pub  

在github上设置ssh key

关联本地和githhub   git remote add origin https://github.com/liyanyan1994/webpack_react_project.git

本地推送到远程 git push -u origin master  -u 第一次需要 后不需要