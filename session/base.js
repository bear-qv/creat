var localsession = {};

localsession.get = function(sid,func){
  var result = this['sid'];
  func(result);
};

localsession.set = function(sid,key){
  key['_timeemp'] = new Date().getTime(); 
  this[sid] = key;
};

//过期回收
localsession.check = function(emptime){
  var time = new Date().getTime();
  for(var key in localsession){
    if(localsession[key]['_timeemp'] && (time - localsession[key]['_timeemp'])>emptime){
      localsession.drop(key);
    }
  }
};

localsession.drop = function(sid){
  if(this[sid]){delete this[sid];}
};

exports = module.exports = localsession;