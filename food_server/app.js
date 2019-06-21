const express=require('express');
const bodyParse=require('body-parser');
const indexRouter=require('./routers/index.js');
const menuDetail=require('./routers/menuDetail.js');
const login=require('./routers/login.js');
const menu=require('./routers/menu.js');
const article=require('./routers/article.js');
const collection=require('./routers/collection.js');
//引入cors模块
const cors=require("cors");
//引入session模块
const session=require("express-session");
//创建web服务器
var server=express();
//配置跨域访问
server.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}));
server.use(session({
    //加密
    secret:"128位字符串",
    //刷新的时候是否重新保存
    resave:true,
    saveUninitialized:true
}))
//分配端口
server.listen(3000);
//托管静态资源
server.use(express.static('public'));
//使用中间件
server.use(bodyParse.urlencoded({
	extended:false
}));
//挂载路由器
server.use('/index',indexRouter);
server.use('/menuDetail',menuDetail);
server.use('/login',login);
server.use('/menu',menu);
server.use('/article',article);
server.use('/collection',collection);