---
title: git修改分支名
date: 2020-07-03 19:37:08
tag: 
 - git
 - 命令
categories: git
description: 转载
copyright: false
author: 大的像个坑
home: https://www.jianshu.com/u/e65998db00bd
url: https://www.jianshu.com/p/2b1d2e899fb0
---

注：修改远程分支先拉下来再进行以下步骤
1、旧分支：oldBranch
2、新分支：newBranch

## 将本地分支重命名
``` git
git branch -m oldBranch newBranch
```

## 删除远程分支（远端无此分支则跳过该步骤）
``` git
git push --delete origin oldBranch
```

## 将重命名后的分支推到远端
``` git
git push origin newBranch
```

## 切换到修改后的分支
```git
git checkout newBranch
```

## 把当前的本地分支与远程分支关联
``` git
git branch --set-upstream-to=origin/newBranch
```