<template>
<div class="dairy">
    <div class="container">
        <div class="fire_content">
            <h3>瘦身日记</h3>
            <div class="icon"></div>  
        </div>
        <div class="dairy_second">
            <div class="dairy_left">
                <router-link to="/dairy" target="_blank">
                    <div class="dairy_a_div" v-if="menus[0]">
                        <div class="dairy_top">
                            <img :src="`http://127.0.0.1:3000/img/`+menus[0].img" alt="" class="dairy_img"/>
                        </div>
                        <span class="dairy_span dairy_span3">{{menus[0].title}}</span>
                        <div class="dairy_bottom">
                                <div class="intro">
                                    <div>
                                        <i class="iconfont icon-nvsheng"></i>
                                    </div>
                                    <div>
                                        <span class="name">{{menus[0].user_name}}</span>
                                        <span class="age">{{menus[0].age}}</span>
                                    </div>
                                </div>
                            <div class="write">
                                <div class="read">
                                    <i class="iconfont icon-yinshi"></i>
                                    <p class="c1">
                                      {{menus[0].subtitle}}
                                    </p>
                                </div>
                                <div class="read">
                                    <i class="iconfont icon-bhjyoga"></i>
                                    <p class="c1">
                                     {{menus[0].sport}}
                                    </p>
                                </div>
                                <div class="read">
                                    <i class="iconfont icon-tiyu-paobu"></i>
                                    <p class="c1">
                                        {{menus[0].yundong}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="dairy_left">
                <router-link to="/dairy" target="_blank">
                    <div class="dairy_a_div" v-if="menus[0]">
                        <div class="dairy_top">
                            <img :src="`http://127.0.0.1:3000/img/`+menus[1].img" alt="" class="dairy_img"/>
                        </div>
                        <span class="dairy_span dairy_span2">{{menus[1].title}}</span>
                        <div class="dairy_bottom">
                                <div class="intro">
                                    <div>
                                        <i class="iconfont icon-nansheng"></i>
                                    </div>
                                    <div>
                                        <span class="name">{{menus[1].user_name}}</span>
                                        <span class="age">{{menus[1].age}}</span>
                                    </div>
                                </div>
                            <div class="write">
                                <div class="read">
                                    <i class="iconfont icon-yinshi"></i>
                                    <p class="c1">
                                        {{menus[1].subtitle}}
                                    </p>
                                </div>
                                <div class="read">
                                    <i class="iconfont icon-zixingche"></i>
                                    <p class="c1">
                                        {{menus[1].sport}}
                                    </p>
                                </div>
                                <div class="read">
                                    <i class="iconfont icon-jianshen-"></i>
                                    <p class="c1">
                                        {{menus[1].yundong}}
                                    </p>
                                </div>
                                </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="dairy_left">
                <router-link to="/dairy" target="_blank">
                    <div class="dairy_a_div" v-if="menus[0]">
                        <div class="dairy_top">
                            <img :src="`http://127.0.0.1:3000/img/`+menus[2].img" alt="" class="dairy_img"/>
                        </div>
                        <span class="dairy_span dairy_span">{{menus[2].title}}</span>
                        <div class="dairy_bottom">
                                <div class="intro">
                                    <div>
                                        <i class="iconfont icon-nvsheng"></i>
                                    </div>
                                    <div>
                                        <span class="name">{{menus[2].user_name}}</span>
                                        <span class="age">{{menus[2].age}}</span>
                                    </div>
                                </div>
                            <div class="write">
                                <div class="read">
                                    <i class="iconfont icon-yinshi"></i>
                                    <p class="c1">
                                    {{menus[2].subtitle}}
                                    </p>
                                </div>
                                <div class="read">
                                    <i class="iconfont icon-bhjyoga"></i>
                                    <p class="c1">
                                        {{menus[2].sport}}
                                    </p>
                                </div>
                                <div class="read">
                                    <i class="iconfont icon-tiyu-paobu"></i>
                                    <p class="c1">
                                        {{menus[2].yundong}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
          menus:[]
        }
    },
    created(){this.loadDiary()},
    methods:{
        loadDiary(){
            this.axios.get("index/indexDiary").then(result=>{
                this.menus=result.data;
            })
        }
    }
}
</script>
<style scoped>
    .dairy{
        background-color: #f3f4f7;
        margin: 0 auto;
        height: 100%;
    }
.container{ max-width:1100px;padding:0 0 60px;margin-top:60px;}
.three_meals_icon{width:65px;height: 3px;background-color: #ff2e64; margin: 0 auto;margin-top: 15px;}
.dairy_header{
    text-align: center;
    padding-top: 25px;
    padding-bottom: 20px;
}
.iconfont{font-size: 26px;}
.name{font-size: 16px;color: #ff2e64;height:26px;line-height:26px;}
.age{font-size: 16px;color: #ff2e64;padding-left: 20px;}
.dairy_2p{color: #fdbd39;}
.dairy_second{display: flex;justify-content:space-between;flex-wrap: wrap;}
.dairy_left{width: 31%;background:#fff;border-radius: 7px;overflow: hidden;}
.dairy_left img{width: 100%;}
.dairy_a_div{
    position: relative;
    transition: all 0.5s;
    width: 100%;
}
.dairy_a_div:hover{
    transform: translateY(-5px);
}
.dairy_left a{
    display: block;
    text-decoration: none;
    color: #000000;
}
.dairy_bottom{text-align: left;padding:15px;}

.dairy_span{
    position: absolute;
    right: -35px;
    width: 60px;
    height: 60px;
    text-align: center;
    margin: -40px 47px 0 0;
    font-size: 21px;
    background: #ff7474;
    color: #fff;
    padding: 5px;
    border-radius: 50%;
    line-height: 58px;
}
.dairy_span2{
    background: #ffae00!important;
}
.dairy_span3{
    background: #46cd38 !important;
}
.c1{line-height: 26px;height:26px;letter-spacing: 1px;margin-left: 15px;font-size:0.875rem;color: #888;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
.read{display: flex;margin-bottom: 8px;}
.intro{display: flex;padding-top: 8%;justify-content: space-between;}
.read span{margin: 0;margin-left: 15px;}
.read p{margin: 0;margin-left: 15px;}
.write{padding-top:10px;}
.dairy_top{max-height: 350px;overflow: hidden;}
@media (max-width:960px){
    .container{margin:10px 2% 0;}  
}
@media (max-width:576px){
    .travel_second_div{margin:20px 4%;}
    .dairy_left:last-child{display: none;}
    .dairy_top{max-height:190px;}
    .dairy_left{width:48%;}
    .dairy_span{width:40px;height:40px;line-height: 40px;font-size:0.875rem;}
}
</style>



