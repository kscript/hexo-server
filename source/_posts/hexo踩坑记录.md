---
title: hexo踩坑记录
date: 2018-12-21 14:50:43
tags:
---
#### 开发文档
[Hexo中文文档](https://hexo.io/zh-cn/docs/)

<!-- more -->
#### 环境搭建
1. 全局安装Hexo-cli
```cmd
  npm install -g hexo-cli
```

2. 使用 Hexo-cli 创建Hexo项目
```cmd
  hexo init <folder>
  cd <folder>
  npm install
```

3. 配置站点
项目根目录下找到 _config.yml 文件, 按照文档给的说明修改

#### 写作

1. 新增文章
```cmd
  hexo new [layout] <title>
```
如果没有设置 layout 的话，默认使用 _config.yml 中的 default_layout 参数代替。
如果标题包含空格的话，请使用引号括起来。
新增的文章, 可以在 source\_posts\ 文件夹里找到。打开文章md, 文件最上边的两个 `---` 放置的是文章的一些信息, 写正文的话另起一行即可

2. 生成
```cmd
  hexo generate
```

#### 预览
开启本地服务
```cmd
  hexo server
```

#### 发布
1. 使用 git 部署的话, 首先要安装 hexo-deployer-git
```cmd
  npm install hexo-deployer-git --save
```
2. 安装完毕, 修改配置
```_config.yml
  deploy:
    type: git
    repo: <repository url>
    branch: [branch]
    message: [message]
```
如果习惯于git的话, message可以不用写, 每次提交部署的时候写上

3. 提交部署
```cmd
  // 这里的写法与 git commit 一致, 也可以到_config.yml中去配
  hexo deploy -m message
```

#### 个性配置
Hexo默认的主题, 会在首页显示文章的全文, 这个问题可以使用 [站点首页不显示文章全文](https://blog.csdn.net/lewky_liu/article/details/81277337) 这篇博文提到的办法解决
