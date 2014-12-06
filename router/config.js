var list = function(router){
  
  
  router.get('/',function(req,res){
    res.render.jade('/index/index.jade',{title:'creat framework'});
  });
  
  
  return router;
};

exports = module.exports = list;