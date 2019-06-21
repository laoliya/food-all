const mysql=require('mysql');
//创建数据库连接池
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'food',
	connectionLimit:15,
	multipleStatements: true
});
//导出连接池
module.exports=pool;