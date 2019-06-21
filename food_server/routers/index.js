const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//添加路由
//首页一日三餐
router.get("/meal",(req,res)=>{
    var sql="select mid,mname,img,video,subtitle,degree,taste,time,tid from menu limit 0,50";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})
//首页瘦身日记
router.get('/indexDiary',(req,res)=>{
	pool.query('select user_name,title,subtitle,age,sport,yundong,img from lose_weight limit 0,3',function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('查询失败');
		}
	});
})
//首页和明星一起瘦身
router.get("/indexStar",(req,res)=>{
    pool.query('select slwId,title,subtitle,img from star limit 0,4',function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('查询失败');
		}
	});
})
//首页瘦身小课堂
router.get("/indexClass",(req,res)=>{
    pool.query('select lcId,title,date,subtitle from lose_class limit 0,5',function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('查询失败');
		}
	});
})
//首页燃烧吧卡路里
router.get("/fire",(req,res)=>{
    var sql="select title,img,content from fire_class limit 0,4";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})
//首页享瘦之旅
router.get("/travel",(req,res)=>{
    var sql="select mvid,mname,img,video,subtitle,degree,taste,time from menu_video";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})
//4.瘦身日记二级页面
router.get("/dairy",(req,res)=>{
    var sql="select user_name,text,content,img from lose_weight";
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
		}else{
			res.send({code:1,msg:"查询成功"});
		}
    });
})
// 瘦身日记二级页面
router.get("/dairy",(req,res)=>{
    var sql="select user_name,text,content,img from lose_weight";
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
		}else{
			res.send({code:1,msg:"查询成功"});
		}
    });
})
//5.star
router.get("/stars",(req,res)=>{
    var sql="select slwId,title,img,height,weight,text from star";
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
		}else{
			res.send({code:1,msg:"查询失败"});
		}
    });
})

//6.starsMore
router.get("/starsMore",(req,res)=>{
    var slwId=req.query.slwId;
    var sql="select title,small_img,large_img,content,text,neirong, height,weight from star where slwId=?";
    pool.query(sql,[slwId],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }else{
            res.send({code:1,msg:"查询失败"});
        }
    });
})
//导出路由器
module.exports=router;

