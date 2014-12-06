var router = {};
var list = require('./config');

//定义方法//head方法已被默认处理
router.get = function(k,func){
  this[k+'_get'] = func;
};
router.post = function(k,func){
  this[k+'_post'] = func;
};
router.put = function(k,func){
  this[k+'_put'] = func;
};
router.delete = function(k,func){
  this[k+'_delete'] = func;
};

var router = list(router);

exports = module.exports = router;