---
title: Windows下使用docker部署gitlab CI服务
date: 2022-06-15 11:43:00
copyright: false
author: 废猫终末旅行
home: https://www.jianshu.com/u/84bc3ed30b2d
origin: jianshu
url: https://www.jianshu.com/p/0abe441d5d3c
tag: 
categories: 
description: 安装docker for windows 下载 docker官方下载 注意，docker for w...
---

# 安装docker for windows

##### 下载

[docker官方下载](https://link.jianshu.com?t=https%3A%2F%2Fstore.docker.com%2Feditions%2Fcommunity%2Fdocker-ce-desktop-windows)  
注意，docker for windows需要使用Hyper-V技术

![](./Windows下使用docker部署gitlab CI服务/39583e5554955bec33949043a676412d)

该功能只有在除了家庭版以外的所有win10版本提供

![](./Windows下使用docker部署gitlab CI服务/8428cbf0f8f301585bed64c21f763061)
  

没有该功能的windows版本请使用[Docker Toolbox](https://link.jianshu.com?t=https%3A%2F%2Fdocs.docker.com%2Ftoolbox%2Foverview%2F)
  

（话说开发用的机器还是至少用专业版windows吧。。。淘宝20块一个密钥，来路不明，亲测可用）

##### 安装

安装完成后在cmd或者powershell输入docker version，查看输出的信息，检查是否安装好。

![](./Windows下使用docker部署gitlab CI服务/ef6f55375800bf2d1677383cb0eb6393)

然后在设置中打开某个分区的共享，一会用于挂载docker镜像的数据卷(volume)，我这里只有C盘分区，直接使用C盘。

![](./Windows下使用docker部署gitlab CI服务/909f6836c32bcb0abd489f8f910604aa)

---

# 在docker中安装gitlab-ce

在命令行中输入：

```
docker pull gitlab/gitlab-ce
```

拉取gitlab-ce镜像，等待完成。

然后输入以下命令创建并运行gitlab-ce容器：

```
docker run -d --hostname localhost -p 10080:80 -p 10443:443 --name gitlab -v /var/run/docker.sock:/var/run/docker.sock -v c:/docker/gitlab/config:/etc/gitlab -v c:/docker/gitlab/logs:/var/log/gitlab gitlab/gitlab-ce:latest
```

![](./Windows下使用docker部署gitlab CI服务/0ba9b701fdd065a085a2db41f6219aa0)

gitlab正在初始化，现在状态为healthy:starting。

![](./Windows下使用docker部署gitlab CI服务/9fda436154f7fc8de359ba0bdcb87f6f)
  

等状态变为healthy时，就可以通过[http://localhost:10080](https://link.jianshu.com?t=http%3A%2F%2Flocalhost%3A10080)访问gitlab服务了

![](./Windows下使用docker部署gitlab CI服务/fa2128514f44bc5609d48dcfb078a552)
  

默认管理员密码为：

```
Username: root
Password: 5iveL!fe
```

第一次登陆会要求为root设置一个新的密码

![](./Windows下使用docker部署gitlab CI服务/a942c6e240475cf6c31e6716c25e60ae)

然后为自己注册一个账号

![](./Windows下使用docker部署gitlab CI服务/396b06809300c721128faf0e6b5e448b)

成功进入首屏

![](./Windows下使用docker部署gitlab CI服务/895c9f2815304678fe22cf4acc8c47a4)

当你做完这一步，如果暂时不需要gitlab-runner，可以直接点击右上角的红叉然后开始开发使用了。  
API文档：[Gitlab API](https://link.jianshu.com?t=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fapi%2FREADME.html)  
PS：目前不通过gitlabUI，想要获取授权，[应该是向`http://[gitlab项目]/oauth/token`，带上参数发送POST请求](https://link.jianshu.com?t=https%3A%2F%2Fdocs.gitlab.com%2Fce%2Fapi%2FREADME.html)，前面不需要加`/api/version`，  
而其他api则需要加上api版本信息例如`/api/v4`

---

###### 当你马上需要gitlab-runner时

先随便创建一个Express模板项目，稍后用来测试gitlab-runner，

![](./Windows下使用docker部署gitlab CI服务/17bf432651460dc42395121787af5fb6)

创建完成后在Setting => CI / CD => Runner settings 中找到registration token，记下来等下需要用，当然，你也可以使用已有项目的registration token。

![](./Windows下使用docker部署gitlab CI服务/df03ec4b8b3b1afc63c497160a4b6695)

---

# 安装gitlab-runner

---

###### 用docker in docker 的方式安装运行gitlab-runner

在命令行中输入

```
docker pull gitlab/gitlab-runner
```

拉取gitlab-runner镜像，等待完成。

然后输入以下命令创建并运行gitlab-runner容器：  
（这里注意如果你不需要在同一台物理机上同时部署这两个服务，把`--link gitlab`去掉）

```
docker run -d --name gitlab-runner --link gitlab --restart always -v /var/run/docker.sock:/var/run/docker.sock -v c:/docker/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner:latest
```

![](./Windows下使用docker部署gitlab CI服务/c819584f1c884daeb10e3a71a16a3248)

安装完成

##### 配置

在命令行中输入以下命令注册一个新的Runner实例

```
docker exec -it gitlab-runner gitlab-runner register
```

1.输入gitlab项目的地址，在本文档中通过--link gitlab 的方式链接到了 gitlab容器，直接填写容器名字，如果你没使用--link 参数，填写你自己gitlab项目的公网地址

```cpp
Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com )
http://gitlab
```

2.填写刚才保存的registration token

```
Please enter the gitlab-ci token for this runner
xxxxxxxxxxxxxxxx
```

3.runner的名字，随便填

```
Please enter the gitlab-ci description for this runner
runner1
```

4.tag随便填

```
Please enter the gitlab-ci tags for this runner (comma separated):
aoeu
```

5.这里填true，否则除了被跟踪的事件，无法触发runner，不方便测试。

```
Whether to run untagged jobs [true/false]:
[false]: true
```

6.默认值即可

```
Whether to lock Runner to current project [true/false]:
[true]: true
```

7.填写该runner实例的执行器，这里使用`docker`

```
Please enter the executor: ssh, docker+machine, docker-ssh+machine, kubernetes, docker, parallels, virtualbox, docker-ssh, shell:
docker
```

8.填写需要使用的镜像，这里我们使用`alpine:latest`

```css
Please enter the Docker image (eg. ruby:2.1):
alpine:latest
```

![](./Windows下使用docker部署gitlab CI服务/038af70bdc05248e8fd4c72ff7b12b99)

本文档是在同一台物理机上部署gitlab-ce以及gitlab-runner，由于gitlab-runner需要在自己的容器中再开启一个docker，如果不经配置，实际上执行测试的时候网络环境是在gitlab-runner的容器的docker环境中，访问不到gitlab-ce容器，但如果你是在公网上部署，可以忽略接下来的设置。并且愉快地开始使用了。  
如果你真的需要在同一台物理机上同时部署这两个服务，以下是我现在找到的解决办法。

* 1.经过试验的解决办法  
  修改gitlab-runner容器里的docker的网络为与宿主机共享网络命名空间，并且手动绑定gitlab-ce项目的ip地址。（是的有点拗口）  
  运行以下命令，查看gitlab-ce在虚拟子网中的ip  
`docker exec -it gitlab-runner ping gitlab`  

![](./Windows下使用docker部署gitlab CI服务/e9db688d2fd95f3f58f755cf808ae1e1)

或者`docker exec -it gitlab-runner cat /etc/hosts`

![](./Windows下使用docker部署gitlab CI服务/26fa86d08a5de67e2bc47b0f659641c4)

总之这里我们知道了gitlab-ce的ip地址为`172.17.0.2`

现在去编辑`c:/docker/gitlab-runner/config`下的`config.toml`

在\[\[runners\]\]下加入  
`clone_url = "http://172.17.0.2"`

在\[runners.docker\]下加入  
`userns_mode = "host"`

最后config.toml应该类似这样

```
concurrent = 1
check_interval = 0

[[runners]]
  name = "runner1"
  url = "http://gitlab"
  token = "db7660ae22a9b982f7bfc47d8d94ca"
  executor = "docker"
  clone_url = "http://172.17.0.2"
  [runners.docker]
    userns_mode = "host"
    tls_verify = false
    image = "alpine:latest"
    privileged = false
    disable_cache = false
    volumes = ["/cache"]
    shm_size = 0
  [runners.cache]
```

修改完配置，重启gitlab-runner

```
docker restart gitlab-runner
```

runner实例已经被添加上了

![](./Windows下使用docker部署gitlab CI服务/fb4565e79f413b29e4f4b64d0c20892c)

随便来一次Pipeline试试吧

![](./Windows下使用docker部署gitlab CI服务/348139ddaca4e44281f127aa6dc7f15d)

![](./Windows下使用docker部署gitlab CI服务/e1d80292cc59f0113c705db33b112046)

# *能从代码仓库clone了*

![](./Windows下使用docker部署gitlab CI服务/05ed6b0948b3247ad10d8bd91373ffc1)

---

###### 在windows下直接安装gitlab-runner

[下载gitlab-runner的可执行文件](https://link.jianshu.com?t=https%3A%2F%2Fdocs.gitlab.com%2Frunner%2Finstall%2Fwindows.html)

[gitlab-runner 64bit版本官方下载](https://link.jianshu.com?t=https%3A%2F%2Fgitlab-runner-downloads.s3.amazonaws.com%2Flatest%2Fbinaries%2Fgitlab-runner-windows-amd64.exe)

下载后放到一个你喜欢的目录，并重命名为`gitlab-runner.exe`，我这里使用的是`C:\docker\gitlab-runner`

![](./Windows下使用docker部署gitlab CI服务/1bd68c182f5cdba8fcf9017dc34be9e5)

并且在系统变量中添加该目录到PATH

![](./Windows下使用docker部署gitlab CI服务/8031f5880dc2fe22a2413e0af6eb4cf8)

添加完成后，打开一个管理员权限的命令行，输入`gitlab-runner --version`确认版本信息

![](./Windows下使用docker部署gitlab CI服务/b877445e9d2742698211a9b4dba6c16c)

然后输入`gitlab-runner register`注册一个runner实例，解释参照上面的配置段落

![](./Windows下使用docker部署gitlab CI服务/30e86d6ec11217ef2f0796ac3aecfe55)

![](./Windows下使用docker部署gitlab CI服务/e962322856e7d39d452ffcc805475f6c)

---

# 改进

接下来要改进就是使用`docker-compose -f file -d`，只需一条命令，批量创建容器，并且架设一个能让这俩自由访问的网络环境。

是的就算同样的参数写进`docker-compost.yml`，再使用能使docker run命令创建的容器成功跑通的配置，仍然会出错（**错误信息和下面图里的错误信息一样**）。用`docker-compose`这个工具创建的和原生CLI `docker run` 虽然容器一样，子网类型也是`birdge`，但就是不能访问，有可能工具比起CLI还缺了一些本来会默认生成的配置，所以暂时需要分开手动输入。

---

# 各种错误信息提示完全没有人性，排错全靠猜。

# 报错信息又少，报的错还是一样的。

###### 这个错误应该是在git clone的时候报出来的，于是我进行了一次试验

![](./Windows下使用docker部署gitlab CI服务/930b92c1f5d7e73d913dfcfb230be8e1)

###### 这次试验是在windows下安装了gitlab-runner，再把docker.runner里设置网络为与宿主机共享网络命名空间，并且把clone\_url设置为`http:/localhost:10080`此时访问http:/localhost:10080应该能正常访问，但是仍然出现同样的错误。

也尝试过把gitlab容器和runner容器直接放在同一个ip下，runner下通过localhost可以访问gitlab了，然而runner下与宿主机共享网络环境的docker容器访问的localhost依然与runner的localhost所指的ip不是同一个。

###### 而在gitlab-runner容器中，通过gitlab容器名和ip地址都可以正常clone，两组对照出现不一样的地方是，这时候是要求登陆的。

![](./Windows下使用docker部署gitlab CI服务/da030a270d232ee63f40955ff62426ce)

但是成功跑通，clone成功的时候，并没有出现登陆信息。

![](./Windows下使用docker部署gitlab CI服务/05ed6b0948b3247ad10d8bd91373ffc1)

### 可能出现问题的地方：

1.git clone可能需要登陆  
2.gitlab的默认配置无法处理这种情况（在）  
3.gitlab容器和runner容器之间的网络配置有误

# 如果有哪位大侠曾经干过同样的事情，希望能在评论告知解决办法。

> 当前文档由 [markdown文档下载插件](https://github.com/kscript/markdown-download) 下载, 原文链接: [Windows下使用docker部署gitlab CI服务](https://www.jianshu.com/p/0abe441d5d3c)  