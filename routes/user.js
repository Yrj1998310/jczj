const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//功能一，用户登录接口
router.post("/login",(req,res)=>{
      var u = req.body.uname;
		var p = req.body.upwd;
		console.log(u);
	  var sql="select uid from pet_master where uname = ? and upwd = ?"
	  pool.query(sql,[u,p],(err,result)=>{
			if(err) throw err;
			if(result.length==0){
			res.send({code:-1,msg:"用户名或密码错误"})
			}else{
				 res.send({code:1,msg:"登录成功"})
			}
	  })
})
	//功能三，用户注册
	router.post("/reg",(req,res)=>{
		var obj=req.body;
		var sql="insert into pet_master set ?"
		pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
				res.send({code:1,msg:"注册成功"})
		}else{
				res.send({code:-1,msg:"注册失败"})
				}	
		})
	})
//导出路由器对象
module.exports=router;