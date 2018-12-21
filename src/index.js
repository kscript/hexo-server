const empty = require('empty-line')
empty({
  path: './public',
  ext: 'html',
  exclude: /lib/,
  convert: function(data){
    return data.replace(/(\n(\s+|))+/g, '\n');
  },
  done: function(err, data){
    // return data;
  }
})
