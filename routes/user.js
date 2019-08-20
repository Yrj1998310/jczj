const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//1.注册路由
 router.post('/reg',function(req,res){
	//1.1获取post请求的数据
	var obj=req.body;
	//console.log(obj);
	//1.2验证每一项是否为空
	//如果用户名为空
	if(!obj.uname){
	  res.send({code:401,msg:'uname required'});
	  //结束函数执行
	  return;
	}
	  if(!obj.upwd){
	   res.send({code:402,msg:'upwd required'});
	   return;
	  }
	  if(obj.phone===''){
	   res.send({code:403,msg:'phone required'});
	   return;
	  }
	  if(obj.email===''){
	   res.send({code:404,msg:'email required'});
	   return;
	  } 
      //1.3执行SQL语句
	  pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
	     if(err)  throw err;
		 //console.log(result);
         if(result.affectedRows>0){
		     res.send({code:200,msg:'reg suc'});
		 }
	  });
});
//2.登录路由
router.post('/login',function(req,res){
    //2.1获取post请求的数据
	var obj2=req.body;
	console.log(obj2);
	//2.2验证每一项是否为空
	//如果用户名为空
    if(!obj2.uname){
	 res.send({code:200,msg:'uname required'});
	 return;
	}
	if(obj2.upwd===''){
	 res.send({code:201,msg:'upwd required'});
	 return;
	}
	//2.3执行SQL语句
	//查询是否有用户名和密码同时的数据
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj2.uname,obj2.upwd],function(err,result){
	  if(err)  throw err;
      console.log(result);
	  //判断登录成功还是失败 
	 if(result.length>0){//有元素，成功
	 res.send({code:200,msg:'login suc'});
	 }else{//没有元素，失败
	   res.send({code:201,msg:'uname or upwd error'});
	 }
	});
    //res.send('登录成功');
	
});
//导出路由器对象
module.exports=router;