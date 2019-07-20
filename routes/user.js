const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//登录路由
router.get("/v1/login/:uname&:upwd",(req,res)=>{
     var $uname=req.params.uname;
	 var $upwd=req.params.upwd;
	 //查询数据库
	 var sql="selecct*from xz_user where uname=? and upwd=?";
	 pool.query(sql,[$uname,$upwd],(err,result)=>{
	      if(err)   throw err;
		  console.log(result);
		  if(result.length>0){
		       res.send("1");
		  }else{
		       res.send("0");
		  }
	 });
});
//导出路由器对象
module.exports=router;