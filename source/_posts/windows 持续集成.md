## windows 持续集成
### 环境准备
- docker
- gitlab
- gitlab-runner
- maven

### 配置runner
在gitlab-runner.exe的安装目录下执行
``` cmd
gitlab-runner register
# 输入以下信息
# url (和token一起,在gitlab仓库的ci/cd runner设置里)
# token
# 描述
# 标签 (./gitlab.yml中会用到)
# 类型 (此处输入docker)
```

