var creativision = require('creativision');
var creat = creativision();
var router = require('../router/index.js');
//配置区

//是否缓存静态文件
creat.set('cache',true);//默认开启
//缓存文件大小上限
creat.set('limitsize',10485760);//默认10M
//定义域filepath
creat.set('dirbase',__dirname);//必须
//配置单核 ->s;多核->m;默认多核
creat.set('core','m');
//设置监听端口;默认80
creat.set('port','8080');
//是否出现灾难后自动重启
creat.set('autorestart',true);//默认开启
//最大单个文件上传大小
creat.set('filemax',1024*1024)//默认1M
//设置静态文件目录->仅可设置一个，重复设置会导致被后者覆盖。
creat.set('static','../public');//必要
//设置渲染文件目录
creat.set('viewdir','../view');//必要
//设置session处理文件
creat.set('session','../session/base.js');//这是个demo,不适合多核//必要
//creat.set('session','../session/radius-base.js');//适合多核
//设置路由表
creat.set('router',router);
//设置语言引擎//可以设置很多种
creat.renderset('jade','../lang/jade.js');//这是个demo

//高级配置区
//cookies过期-关联session过期
creat.set('cookie-emp',60*60*1000);//默认不过期//此配置为1小时
//cookies httponly
creat.set('cookie-httponly',true);//cookie-httponly 默认开启
//session检查回收周期
creat.set('session-back',30*60*1000);//默认30分钟//flase为不回收//当session池很大的时候，建议优化回收机制，DEMO中的session.drop中的DELETE方法可能会造成CPU 的堵塞。

exports = module.exports = creat;