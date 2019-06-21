<template>
    <div class="article" v-if="article[0]">
        <navTop></navTop>
        <div class="arc_con">
            <div class="title">
                <span @click="jump">厨房故事·</span>
                <span>{{article[0].title}}</span>
            </div>
            <div class="article-main">
                <div>
                    <img :src="`http://127.0.0.1:3000/img/`+article[0].img" alt=""> 
                </div>
                <h4 class="content-title">
            {{article[0].subtitle}}
                </h4>
                <div class="article-bottom">
                    <div class="arc_logo">
                        <img src="../assets/EtnjKySPkT.jpg" alt="">
                        <span>享瘦厨房</span> 
                    </div>
                    <div class="share" @click="collect">
                        <i class="iconfont icon-shoucang"></i>
                        <span>收藏</span>
                    </div>
                </div>
            <p class="text">
                <i class="iconfont icon-shuben"></i>
                {{article[0].content}}
            </p>
        </div>
    </div>
    <bottom></bottom>
</div>
</template>
<script>
import $ from 'jquery'
import navTop from '@/components/navTop.vue'
import bottom from '@/components/bottom.vue'
export default {
    components: {navTop,bottom},
    data(){
        return{
            article:[]
        }
    },
    props:["lcId"],
    created(){
        this.loadArticle()
    },
    methods:{
        loadArticle(){
            this.axios.get("article/getarticle",{params:{lcId:this.lcId}}).then(result=>{
                this.article=result.data.data
            })
        },
        jump(){
            this.$router.push("/articleList")
        },
        collect() {
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
               $(".share").css("color","#d8316c")
            }else{
                $(".share").css("color","#272b2c")
                var  col=$(".share>span").html("收藏");
                this.$message({
                message: '已取消收藏',
                center:true,
                customClass: 'messageBox-prompt-test', //在这里在这里
                });
            }
      },
    }
}
</script>
<style>
.article .title{text-align: left;max-width: 1100px;margin: 0 auto;}
.title span:first-child{color:#d8316c;font-size:1.125rem;font-weight: 800;cursor: pointer;}
.title span:last-child{color:#272b2c;font-weight: 400;font-size:1.125rem;}
.article-main{max-width:850px;margin:30px auto 60px;text-align: left}
.article-main img{width: 100%}
.content-title{font-size:1.25rem;font-weight: 700;color:#272b2c;margin:30px 0;line-height: 32px;}
p.text{font-size:1rem;line-height:30px;text-indent: 2em;}
.arc_logo{display: flex;align-items: center;margin-bottom: 30px;}
.arc_logo img{width:50px;height:50px;border-radius: 50%;margin-right:15px;}
.article-bottom{display: flex;justify-content: space-between;align-items: center;font-size: 1rem;color:#272b2c;font-weight: 500}
.share{display: flex;align-items: center;margin-bottom: 30px;margin-top: 10px;cursor: pointer;}
.share span{margin-left:10px;}
.iconfont{font-size: 1.125rem !important;}
.share:hover span{color:#d8316c}
.share:hover i{color:#d8316c}
.messageBox-prompt-test{width:450px;height: 60px;}
.arc_con{margin-top:120px;box-sizing: border-box;}
@media (max-width:960px){
    .arc_con{margin-top:80px;padding:0 2%;}
    .title span:first-child,.title span:last-child{font-size: 1rem;}
    .article-main{width:100%;}
    .content-title{margin:20px 0;}
    .arc_logo,.share{margin-bottom: 20px;}
    .article-main{margin:30px auto 30px;}
}
@media (max-width:576px){
    .arc_con{margin-top:70px;padding:0 4%;}
    .article-main{margin:20px auto 20px;}
    .content-title{font-size: 1rem;line-height: 26px;}
    .arc_logo img{width:40px;height:40px;}
    .article-bottom{font-size: 0.875rem;}
    .arc_logo,.share{margin-bottom:0px;}
    .content-title{margin-bottom: 5px;}
}
</style> 