<template>
    <div class="star">
        <navTop></navTop>
        <div class="star-container">
            <div class="flex">
                <div class="flex-left">
                        <div class="blog-post" v-for='(item,index) of list' :key="index">
                            <div class="blog-post-img">
                                <img :src="`http://127.0.0.1:3000/img/`+item.img" alt="">
                                <div class="news-icon">
                                    <div class="icon">
                                        <div class="weight">{{item.weight}}</div>
                                        <div class="height">{{item.height}}</div>
                                    </div>
                                    <div class="news-date">
                                        <div class="news-day"></div>
                                        <div class="news-month"></div>
                                    </div>
                                </div>                            
                            </div>
                            <div class="blog-post-content">
                                <div class="news-title">
                                    <p>{{item.title}}</p>
                                </div>
                                <div class="news-info">
                                    <p><span>❤&nbsp;</span> | <span>&nbsp;瘦身秘诀</span></p>
                                </div>
                                <div class="news-text">
                                    <p>{{item.text}}</p>
                                </div>
                                <router-link :to="`/starsMore/${item.slwId}`" class="jump" >
                                   MORE
                                </router-link>
                            </div>
                        </div>  
                </div>
                <menuRecom></menuRecom>
            </div>
        </div>
        <bottom></bottom>
    </div>

</template>
<script>
import navTop from '@/components/navTop.vue'
import bottom from '@/components/bottom.vue'
import menuRecom from '@/components/detail/menuRecom.vue';
export default {
    components: {navTop,bottom,menuRecom},
    data(){
        return{list:[]}
    },
    created(){
        this.loadStars()
    },
    methods:{
        loadStars(){
           this.axios.get("index/stars").then(result=>{
               this.list=result.data.data;
               console.log(this.list);
           })
        }
    }
}
</script>
<style scoped>
    /* <!-- 左边div开始 --> */
        .star{background: #FFFFFF;}
        .star-container{max-width: 1100px;margin: 0 auto;padding-top:90px; padding-bottom: 60px;}
        .flex {display: flex;flex-wrap: wrap;justify-content: space-between;}
        .flex-left{max-width: 70%;margin-top:75px;}
        .blog-post{position:relative;}
        .blog-post:not(:last-child) {margin-bottom: 50px;}
       
         .blog-post-img img {/* max-width: 800px;max-height:600px;*/
            width:100%;
        } 
        img {
            vertical-align: middle;
            border-style: none;
        }
        .news-icon {
            position: absolute;
            top: -3%;
            left: 5%;
            width: 94px;
            height: 94px;
            border-radius: 50%;
            background: #f03271;
           
        }
        .icon{  
            position: absolute;
            top:-7.2%;
            left: -7.8%;
            width: 110px;
            height: 110px;
            border-radius: 50%;
            background: #f03271;
            background:rgba(240,50,113,0.27);
        }
        .jump{width:80px;border: 1px solid #f03271;font-size:0.875rem;color: #000;height:30px;text-decoration:none;float:right;color:#f03271;text-align:center;line-height:30px;border-radius: 50px;margin:20px 30px 0 0;box-sizing: border-box;}
        .jump:hover{background: #f03271;color:#fff;}
    
        .weight{
            font-size: 24px;
            color: #FFFFFF;
            font-weight: 600;
            line-height: 3.75;text-align: center;
        }
        .height{font-size: 14px;color: #FFFFFF;font-weight: 500;margin-top: -30px;text-align: center;}
        .news-date{
            text-align: center!important;
        }
        .news-day{
            font-size: 24px;
            color: #FFFFFF;
            font-weight: 600;
            line-height: 0.75;
        }
        .news-month{
            font-size: 14px;
            color: #FFFFFF;
            font-weight: 500;
            line-height: 0.75;
            margin-top: 7px;
        }
        .blog-post-content{
            /*padding-left: 69px;*/
            padding-top: 33px;
            /* padding-right: 15px;*/
            padding-bottom: 35px;
            position: relative;
            text-align:left;
            
        }
        .news-title p{
            font-size:1.625rem;
            font-weight: 1000;
            text-align:center;
            color: #373636;
            cursor:pointer;
        }
        .news-title p:hover{
            color:#f03271;
            transition:all 0.7s;
        }
        .news-info {
            margin-top: 2px;
        }
        .news-info p{
            font-size: 12px;
            color: #939292;
            text-align:center;
            cursor:pointer;margin-top:20px;
        }
        .news-info p>span:hover{
            color:#f03271;
            transition:all 0.7s;
        }
        .news-text{
            margin-top:20px;
        }
        .news-text>p{
            font-family: 'Montserrat', sans-serif;
            font-size:1rem;
            line-height: 2.2;
            font-weight: 500;
            color: #6f6f6f;
            text-shadow: rgba(0,0,0,.01) 0 0 1px;
            text-indent: 2em;
        }
         /* 左边div结束 */
         /*  右边div开始*/
         .flex-right{
            margin-left:20px;
         }
         .side{
             width:100%;
             margin-top:-2px;
         }
         .side-container:not(:last-child) {
            margin-bottom: 90px;
         }
         .recent{
             margin:45px 5px;
             position:relative;
         }
         .recent p{
            font-size: 24px;
            font-weight: 600;
            color: #373636;
            padding:0px;
         }
         .line-one{
            position:absolute;
            width:5%;
            height: 1px;
            background: #f03271;
            margin-top:-2%;
         }
         .line-two{
            position:absolute;
            width:10%;
            height: 1px;
            background: #d4dcde;
            margin-top:-2%;
            margin-left:5%;
         }
         /* 右边div结束 */
</style>
