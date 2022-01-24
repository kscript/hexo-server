---
title: electron中使用webview
date: 2022-01-24 15:34:16
tag:
  - electron
categories: electron
description: 根据electron官方的说法, 并不建议使用webview标签, 但在实际项目中用到了, 因此记录一下
---
Electron >= 5禁用 webview 标签, 如果要使用, 需要给webPreferences选项的webviewTag属性设置为true
### webview 空白
可以给 webview 注册 'console-message' 事件, 将报错信息打印出来.  
一般出现空白, 多是因为js代码出错造成的, 说的更具体一点, webview里调用了node功能, 但没有配置好.  

``` html
<!-- 开启node, 关闭上下文隔离  -->
<webview nodeintegration webpreferences="contextIsolation=false"/>
<!-- 有预加载脚本的话, 需要指定一下 -->
<webview nodeintegration webpreferences="contextIsolation=false" preload="../preload.js"/>
```