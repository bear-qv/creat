var jade = require('jade');
var fs = require('fs');
var path = require('path');

//此函数的接受和处理方法自己写,是res.render的原型//自带静态缓存


var lang  = function(filepath,config){
  config = config || {};
  var filepath = path.join(this._res.config.basedir,this._res.config.viewdir,filepath);
  //处理文件路径
  if(fs.existsSync(filepath)){
    this._res.writeHead(200, {'Content-Type': 'text/html'});
    var stat = fs.statSync(filepath);
    var mtime = stat['mtime'];
    var size = stat['size'];
    var tag = JSON.stringify([mtime,size]);
    if(!lang.viewkey[filepath] || !lang.viewcache[filepath] || lang.viewkey[filepath]!=tag){
      lang.viewkey[filepath] = tag;
      lang.viewcache[filepath] = jade.renderFile(filepath,config);
    };
    this._res.end(lang.viewcache[filepath]);
  }else{
    this._res.writeHead(404, {'Content-Type': 'text/html'});
    this._res.end('WRONG file ROUTER 404.mail 460097093@qq.com')
  };
};
//缓存
lang.viewcache = {};
lang.viewkey = {};

exports = module.exports = lang;