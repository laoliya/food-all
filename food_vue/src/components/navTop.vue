<template>
    <!-- header start-->
    <div class="header">
        <div class="header_second">
            <div>
                <img src="../assets/logo.png" class="img w-100">
            </div>
            <div class="word">
                <ul class="header_ul">
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/menuList" target="_blank">一日三餐</router-link></li>
                    <li><router-link to="/">瘦身食谱</router-link></li>
                    <li><router-link to="/dairy" target="_blank">瘦身日记</router-link></li>
                    <li><router-link to="/stars">明星食谱</router-link></li>
                    <li><router-link to="/articleList">瘦身课堂</router-link></li>
                    <li v-if="uname==''">
                        <el-button type="text" size="medium" @click="centerDialogVisible = true" @close="myclose" :myclose="myclose">登录/注册</el-button>
                    </li>
                    <li v-if='uname'>
                        <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{uname}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu>
                            <el-dropdown-item command="my_cols">我的收藏</el-dropdown-item>
                            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                        <!-- <el-button type="text" size="medium" class="">{{uname}}</el-button> -->
                    </li>
                </ul>
            </div>
        </div>
        <login :centerDialogVisible="centerDialogVisible" @reName="reName"></login>
        <!-- 手机端导航开始 -->
        <div class="phone_nav_box">
            <div class="phone_nav_top">
                <div class="logo">
                    <a href="#"><img src="../assets/logo.png" alt=""/></a>
                </div>
                <div class="phone_nav_btn" @click="openNav">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="phone_nav">
                <ul>
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/menuList" target="_blank">一日三餐</router-link></li>
                    <li><a href="">瘦身食谱</a></li>
                    <li><router-link to="/dairy" target="_blank">瘦身日记</router-link></li>
                    <li><router-link to="/stars">明星食谱</router-link></li>
                    <li><router-link to="/articleList">瘦身课堂</router-link></li>
                </ul>
            </div>
        </div>
        <!-- 手机端导航结束 -->
        
    </div>
    <!-- header end --> 
</template>
<script>
import $ from 'jquery'
import qs from 'qs';
import login from '@/views/login.vue'
export default {
    data(){
        return{
            centerDialogVisible:false,
            uname:""
        }
    },
    components:{login},
    updated(){
        this.getName();
    },    
    created(){
        this.getName();
    },
    methods:{
        
        openNav(){
            $(".phone_nav").fadeToggle();
        },
        // 作为父组件关闭登录或者注册对话框
        myclose(){
            this.centerDialogVisible=false;
        },
        reName(data){
            // this.uname=data;
            // console.log(456)
            // console.log(this.uname)
        },
        getName(){
            this.axios.post("/login/islogin").then(result=>{
                var msg=result.data.msg;
                if(msg=="login suc"){
                    this.uname=result.data.data[0].uname;
                }
            })
        },
        handleCommand(command) {
            // 退出登录
            if(command=="loginOut"){
                this.axios.post("/login/loginOut").then(result=>{
                    var msg=result.data.msg;
                    if(msg=="logout suc"){
                        this.uname="";
                        console.log(this.uname)
                        this.$message("退出成功");
                    }
                })
            }else{
                this.$router.push("/userCollection");
            }
        },
        
    }
}
</script>
<style>
/* header样式 */
.header{position:fixed;top:0;z-index:3000;width: 100%;background:#333;display: flex;background-clip: padding-box;;}
.header_second{position: relative;display: flex;font-size:17px;max-width: 1100px;width:80%;margin: 0 auto;justify-content: space-between;}
.img{margin-top:20px;}
.header_ul>li{list-style-type: none;float: left;padding:0 10px;height:80px;line-height: 80px;color: #fff;}
.header_ul li a{color: #fff;text-decoration: none;font-size: 1rem;}
.header_ul li a:hover{color:#ff2e64;}
.phone_nav_box{display:none;background: rgba(0,0,0,0.8);width:100%}
.phone_nav_btn{margin-top:15px;}
.phone_nav_btn span{width:35px;height:4px;background: #fff;border-radius: 2px;display: block;margin-top:5px;}
.phone_nav{position: absolute;width:100%;left:0;display:none;}
.phone_nav ul{background:rgba(0,0,0,0.8);}
.phone_nav ul li a{width:80%;display:block;border-bottom:1px solid #333;border-top:1px solid #666;color:#ccc;font-size: 0.9rem;height:50px;line-height: 50px;margin:0 auto;}
.phone_nav_top{display: flex;justify-content: space-between;width:80%;margin:0 auto;}
.logo img{margin-top:10px;}
.el-button--text{color:#fff !important;}
.el-button--medium{font-size: 1rem !important;}
.el-button--text:hover{color:#ff2e64 !important;}
/*下拉菜单样式*/
.el-dropdown-link {cursor: pointer;color: #d8316c;font-size: 1rem;}
  .el-icon-arrow-down {
    font-size: 12px;
  }
.el-dropdown-menu{top:50px !important;}
.el-dropdown-menu__item:hover{color:#ff2e64 !important;background: #ccc !important}
@media (max-width:960px){
    .header_second{display: none;}
	.arc_logo{height:60px;line-height: 60px;}
	.arc_logo img{height:40px;width:auto;}
	.nav_height{height:65px;}
	.phone_nav_box{display:block;}
}
/* header end */
</style>
