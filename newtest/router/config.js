var list = function(router){
  router.get('/',function(req,res){
    res.render.jade('/index/index.jade');
  });
  

  return router;
};

exports = module.exports = list;