var jade = require('jade');
var fs = require('fs');
var path = require('path');

//此函数的接受和处理方法自己写,是res.render的原型//自带静态缓存
//this._res =>res

var lang  = function(filepath,config){
  config = config || {};
  //混合渲染路劲
  var filepath = path.join(this._res.config.basedir,this._res.config.viewdir,filepath);
  //处理文件路径
  if(fs.existsSync(filepath)){
    this._res.writeHead(200, {'Content-Type': 'text/html'});
    var stat = fs.statSync(filepath);
    var mtime = stat['mtime'];
    var size = stat['size'];
    var tag = JSON.stringify([mtime,size]);
    //缓存判断
    if(!lang.viewkey[filepath] || !lang.viewcache[filepath] || lang.viewkey[filepath]!=tag){
      lang.viewkey[filepath] = tag;
      lang.viewcache[filepath] = jade.renderFile(filepath,config);
    };
    this._res.end(lang.viewcache[filepath]);
  }else{
    this._res.writeHead(404, {'Content-Type': 'text/html'});
    this._res.end('MODUEL FILE CAN NOT BE FIND.HEHE.')
  };
};
//缓存
lang.viewcache = {};
lang.viewkey = {};

exports = module.exports = lang;