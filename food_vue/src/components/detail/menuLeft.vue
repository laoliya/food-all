<template>
    <div class="menuLeft" v-if="list[0]">
        <div class="title_box">
            <b>食谱</b>
            <span>{{list[0].mname}}</span>
        </div>
        <div class="metu_img" v-if="list[0].video==null">
            <img :src="'http://127.0.0.1:3000/img/'+list[0].img" alt="">
        </div>
        <div class="metu_img" v-if="list[0].video">
            <video :src="'http://127.0.0.1:3000/'+list[0].video" controls></video>
        </div>
        <div class="metu_name">
            <h1>{{list[0].mname}}</h1>
            <div class="detail_option">
                <div class="option_left">
                    <i class="iconfont icon-ai254"></i><span>{{list[0].degree}}</span>
                    <i class="iconfont icon-meishi"></i><span>{{list[0].time}}分钟</span>
                    <i class="iconfont icon-cup"></i><span>{{list[0].taste}}</span>
                </div>
                <div class="option_right share" @click="collect">
                    <i class="iconfont icon-shoucang"></i>
                    <span>收藏</span>
                </div>
            </div>
        </div>
        <div class="metu_sub">
            <p>{{list[0].subtitle}}</p>
        </div>
        <metuFoods :mid="mid"></metuFoods>
        <metuSteps :mid="mid"></metuSteps>
        <div class="metuTips">
            <h1>小贴士</h1>
            <p>{{list[0].tips}}</p>
        </div>
    </div>
</template>
<script>
import metuFoods from '@/components/detail/metuFoods.vue';
import metuSteps from '@/components/detail/metuSteps.vue';
import $ from 'jquery'
import { constants } from 'fs';
export default {
    components:{metuFoods,metuSteps},
    props:{mid:""},
    data(){
        return{
            list:[],
            msg:"",
            isCol:false
        }
    },
    props:{
        mid:""
    },
    created(){
        this.loadTitle();
    },
    updated(){
        if(this.isCol==true){
            $(".share>span").html("已收藏");
            $(".share").css("color","#d8316c");
        }
    },
    methods:{
        loadTitle(){
            this.axios.get("menuDetail/getTitle",{params:{mid:this.mid}}).then((result)=>{
                this.list=result.data.data;
                this.isCol=result.data.isCol;
            })
            
            
        },
        collect(){
            // 先发送请求判断用户是否登录
            this.axios.post("/login/islogin").then(result=>{
                // 接收返回信息
                var msg=result.data.msg;
                var cols=result.data.cols;
                console.log(cols)
                // 如果已经登录，那么允许收藏，并根据收藏情况，改变元素样式
                if(msg=="login suc"){
                    // 查找要改变的元素
                    var  col=$(".share>span").html();
                    if(col=="收藏"){
                        var  col=$(".share>span").html("已收藏");
                        this.$message({
                        showClose: false,
                        message: '收藏成功',
                        type: 'success',
                        center:true,
                        customClass: 'messageBox-prompt-test', //在这里在这里
                        });
                        $(".share").css("color","#d8316c");
                        this.msg="add";
                    }else{
                        $(".share").css("color","#272b2c")
                        var  col=$(".share>span").html("收藏");
                        this.$message({
                        message: '已取消收藏',
                        center:true,
                        customClass: 'messageBox-prompt-test', //在这里在这里
                        });
                        this.msg="reduce";
                    }
                    // 发送请求，更新数据表中文章的收藏数量，并在用户收藏表中添加一条数据，需要的参数：菜谱mid，执行加一还是减一的依据
                    this.axios.get("menuDetail/setCollect",{params:{mid:this.mid,msg:this.msg}}).then((result)=>{
                        console.log(result)
                    })
                }else{
                    // 如果没有登录，提示用户登录
                    this.$message({
                        message: '请登录'
                    })
                }
            })





            





            // var colIcon=$(".col_icon");
            // var colText=$(".col_txt");
            // if(colIcon.hasClass("icon-shoucang1")){
            //     colIcon.removeClass("icon-shoucang1");
            //     colText.text("点击收藏");
            //     this.msg="reduce";
            // }else{
            //     colIcon.addClass("icon-shoucang1");
            //     colText.text("取消收藏");
            //     this.msg="add";
            // }
            // this.axios.get("menuDetail/setCollect",{params:{mid:this.mid,msg:this.msg}}).then((result)=>{
            //     console.log(result)
            // })
        }
    },
    
}
</script>
<style scoped>
    .menuLeft{width:70%}
    .title_box{margin:40px 0;}
    .title_box b{color:#ff2e64;margin-right: 10px;font-size:1rem;font-weight: bold;}
    .metu_img{width:100%;}
    .metu_img img{width:100%}
    .metu_img video{width:100%}
    .metu_name h1{font-size: 1.5rem;font-weight:600;margin:30px 0 15px;}
    .detail_option{display: flex;justify-content: space-between;margin-bottom: 30px;}
    .metu_sub{padding:30px 0;border-top:1px solid #eee;border-bottom:1px solid #eee;}
    .metu_sub p{line-height: 25px;}
    .option_left i{font-size: 30px !important;}
    .option_left{display: flex;}
    .option_left span,.option_right span{height:30px;line-height: 30px;margin-right: 15px;}
    .option_right span{margin-right: 0;cursor: pointer;}
    .option_right i{font-size:20px;margin-right:5px;}
    .metuTips h1{font-size: 1.25rem;padding:25px 0 20px;font-weight: 600;}
    .metuTips p{line-height: 30px;}
    .col_icon{color:#ff2e64;}
    .share{display: flex;align-items: center;margin-bottom: 30px;margin-top: 10px;cursor: pointer;}
    .share span{margin-left:10px;}
    @media (max-width:960px){
        .menuLeft{width:100%}
        .metu_name h1{font-size: 1.25rem;margin-top:20px;}
        .detail_option{margin-bottom: 0;}
        .metuTips h1{font-size: 1.125rem;}
        .title_box{margin:20px 0;}
    }
    @media (max-width:576px){
        .metu_name h1{font-size: 1.125rem;}
        .option_left i{font-size:24px !important;}
        .arc_logo,.share{margin-top:0;}
        .metu_sub{padding:20px 0;}
        .metu_sub p{font-size: 0.875rem;}
        .share{margin-bottom: 15px;}
        .metuTips h1{font-size: 1rem;padding:0 0 15px;}
    }
</style>
