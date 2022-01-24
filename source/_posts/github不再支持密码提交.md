---
title: github不再支持密码提交
date: 2022-01-24 15:24:11
tag: 
  - git
  - commit
categories: git
description: 从2021年8月13日开始, github进行身份验证时不再接受帐户密码, 要求使用基于token的身份验证
---
如果要使用token的方式提交代码, 更换远程仓库的url即可
``` git
git remote set-url origin https://{{token}}@github.com/{{用户名}}/{{仓库名}}/
```