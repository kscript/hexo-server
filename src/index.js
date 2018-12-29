// 调用示例

const fs = require("fs");
const fileLoader = require('ks-file-loader').default;

fileLoader({
  // 要进行转换的目录
  path: './public',
  // 文件扩展名, 支持正则
  ext: 'html',
  // 包含目录
  // include: /2018/,
  // 排除目录
  exclude: /lib/,
  // 加载函数
  deep: true,
  readFile: true,
  loader: function(stats, data){
    var content = data.replace(/(\u0009|\n(\s+)\n+)/g, '');
    fs.writeFile(stats.path, content, function(error){
      if(error){
        console.log(error)
      }
    });
  },
  // 转换完毕
  done: function(){
    console.log('complete');
  }
})
