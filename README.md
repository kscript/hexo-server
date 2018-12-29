# hexo

### 介绍
一个生成 hexo 博客的脚手架. 不包含主题, 需自行下载

### 使用
1. 全局安装hexo-cli
``` cmd
npm i -g hexo-cli
```
2. 安装项目依赖
``` cmd
npm i
```
3. 添加主题
新建themes文件夹, 在 [hexo主题](https://hexo.io/themes/) 挑选一个自己喜欢的主题, 将其clone到themes文件夹

```
// 将示例主题clone到themes文件夹下
git clone https://github.com/kscript/even.git themes/even
```
4. 生成
```
hexo g
```
5. 运行服务
```
hexo s
```