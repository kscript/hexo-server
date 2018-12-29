---
title: git命令之stash
date: 2020-06-30 18:49:15
tag: 
 - git
 - stash
categories: git
description: stash是git里一个比较好用的命令, 当我们需要切换分支又不想提交当前的修改时, 可以使用stash保存当前的工作状态, 并将工作区和暂存区恢复到修改之前, 待到需要的时候再取出来
---
git stash可用的命令有:
## git stash
储存当前的修改

## git stash save "message"
储存当前的修改(附带注释)

## git stash list
列出储存列表

## git stash pop
恢复git栈中最新的一个stash@{num}, 并删除记录

## git stash pop stash@{num}
恢复git栈中指定的stash, 并删除记录

## git stash apply
用法同 git stash pop, 但不删除记录

## git stash drop
删除一个进度，默认删除最新的进度

## git stash show
显示stash的内容

## git stash clear
清除所有储存记录

## git stash --help
