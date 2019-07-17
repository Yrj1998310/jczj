const express=require('express');
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入用户路由器
const userRouter=require('./routes/user.js');
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
//使用路由器，挂载到/user下
app.use('/user',userRouter);