const express=require('express');
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入用户路由器
const userRouter=require('./routes/user.js');
const cors=require("cors");
//创建web服务器
var app=express();
//监听端口
app.listen(8080);
//托管到静态资源目录
app.use(express.static('public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
        extended:false
}));
		//5:处理跨域 cors
//5.1配置允许访问的程序的地址(脚手架)
     //http://127.0.0.1:5050
     //http://localhost:5050
//5.2每次请求是否验证true
app.use(cors({
  origin:["http://127.0.0.1:5050","http://localhost:5050","http://127.0.0.1:5501","http://127.0.0.1:5500"],
  credentials:true
}))
//使用路由器，挂载到/user下
app.use('/user',userRouter);