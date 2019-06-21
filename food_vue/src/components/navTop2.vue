<template>
    <!-- header start-->
    <div class="header">
        <div class="header_second">
            <div>
                <img src="../assets/logo2.png" class="img w-100">
            </div>
            <div class="word">
                <ul class="header_ul">
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/">一日三餐</router-link></li>
                    <li><router-link to="/">瘦身食谱</router-link></li>
                    <li><router-link to="/">瘦身日记</router-link></li>
                    <li><router-link to="/">明星食谱</router-link></li>
                    <li><router-link to="/">瘦身课堂</router-link></li>
                    <li>
                        <router-link to="/">登录</router-link>/
                        <router-link to="/" href="">注册</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 手机端导航开始 -->
        <div class="phone_nav_box">
            <div class="phone_nav_top">
                <div class="logo">
                    <a href="#"><img src="../assets/logo.png" alt=""/></a>
                </div>
                <div class="phone_nav_btn" @click="open">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="phone_nav">
                <ul>
                    <li><a href="index.html">首页</a></li>
                    <li><a href="">一日三餐</a></li>
                    <li><a href="">瘦身食谱</a></li>
                    <li><a href="">瘦身日记</a></li>
                    <li><a href="">明星食谱</a></li>
                    <li><a href="">瘦身课堂</a></li>
                </ul>
            </div>
        </div>
        <!-- 手机端导航结束 -->
    </div>
    <!-- header end --> 
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{}
    },
    mounted(){
        window.addEventListener("scroll",this.changeColor)
    },
    methods:{
        changeColor(){
            //获取屏幕滚动的高度
            var top=document.documentElement.scrollTop;
            //获取需要改变的元素：导航栏
            var header=document.querySelector(".header");
            if(top>600){
                header.style.backgroundColor="rgba(0,0,0,0.4)";
            }else{
                header.style.background="linear-gradient(-180deg,rgba(0,0,0,.2),transparent)";
            }
        },
        open(){
            $(".phone_nav").fadeToggle();
        }
    }
}
</script>
<style scoped>
/* header样式 */
.header{background:#fff !important;position: relative;border-bottom:1px solid rgb(218, 218, 218);}
.header_ul li{color:#444;}
.header_ul li a{color:#444;}
.header_ul li a:hover{color:#ff2e64;}
/* header end */
</style>
