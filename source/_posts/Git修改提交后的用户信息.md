---
title: git修改提交后的用户信息
date: 2020-07-30 13:43:51
tag: 
  - git
  - commit
categories: git
description: 使用了搭建在本地的git服务器之后, 有时不注意会将本地git用户信息提交到gitHub上, 虽然不影响项目, 但提交记录看起来有些别扭. 这样的情况想来以后还是会遇到的, 虽然不难解决, 但是真懒得自己记, 所以还是在博客里记录一下, 如何使用git命令修改提交后的用户信息
---
话不多讲, 直接上步骤~
``` bash
# 查看提交记录, 复制要修改的commit HEAD
git log

# 进入编辑模式, 将 pick 改为 edit后, 保存退出
git rebase -i [~HEAD]

# 修改commit
git commit --amend --author="作者 <邮箱>" --no-edit

git rebase --continue

# 提交
git push -f origin [~master]
```