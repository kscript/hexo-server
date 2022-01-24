---
title: electron镜像配置
date: 2022-01-24 16:01:25
tag:
  - electron
categories: electron
description: 解决electron安装/打包慢的问题
---
- 使用淘宝镜像
  ```
  npm config set registry https://registry.npmmirror.com/
  npm config set electron_mirror https://npmmirror.com/mirrors/electron//
  npm config set chromedriver_cdnurl = "https://npmmirror.com/mirrors/chromedriver/"
  npm config set electron_builder_binaries_mirror = "https://npmmirror.com/mirrors/electron-builder-binaries/"
  ```
  > 淘宝 NPM 镜像站切换新域名, npm.taobao.org 和 registry.npm.taobao.org 域名将于 2022 年 05 月 31 日零时起停止服务


- 使用华为镜像
  ```
  npm config set registry https://repo.huaweicloud.com/repository/npm
  npm config set electron_mirror https://mirrors.huaweicloud.com/electron/
  npm config set chromedriver_cdnurl = "https://mirrors.huaweicloud.com/chromedriver/"
  npm config set electron_builder_binaries_mirror = "https://mirrors.huaweicloud.com/electron-builder-binaries/"
  ```
