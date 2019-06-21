<template>
    <div class="starsMore" v-if="list[0]">
        <navTop></navTop>
        <div class="stars_con">
            <div class="moreleft" v-for='(item,index) of list' :key="index">
                <div class="stars_logo">
                    <span class="span1" @click="jump">明星瘦身</span>
                    <span>*{{item.title}}</span>
                </div>
                <div class="star-content">
                    <div class="img">
                        <img :src="`http://127.0.0.1:3000/img/`+item.large_img" alt="">
                    </div>
                    <div class="title">
                    <i class="iconfont icon-aixin"></i>
                                    {{item.title}}
                    </div>
                    <div class="morecontainer">
                        <p>{{item.content}}</p>
                    </div>
                    <div class="img">
                        <img :src="`http://127.0.0.1:3000/img/`+item.small_img" alt="">
                    </div>
                    <div class="morecontainer">
                        <p>{{item.neirong}}</p>
                    </div>
                </div>
            </div>
            <menuRecom></menuRecom>
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
        return{
            list:[]
        }
    },
    props:["slwId"],
     created(){
        this.loadStarsMore()
    },
    methods: {
           loadStarsMore(){
            this.axios.get("index/starsMore",{params:{slwId:this.slwId}}).then(result=>{
                this.list=result.data.data
                console.log(this.list)
            })
        },
        jump(){
            this.$router.push("/stars");
        }
    },
}

</script>
<style>
    .starsMore{}
    .stars_con{max-width:1100px;display: flex;justify-content: space-between;margin:90px auto 60px;}
    .stars_logo{text-align:left;font-size:18px;}
    .span1{color:#f03271;font-weight: 800;font-family: PingFangSC,Helvetica-Light,arial,sans-serif;cursor:pointer;}
    .more_logo{margin:15px 0px 15px 0px;text-align:left;}
    .more_logo img{width: 32px;height: 32px;text-align:left;padding: 1px 0;border-radius:50%;}
    .moreleft{margin-top: 50px;width:70%;}
    .moreright{width: 35%;float: right;}
    .morecontainer p{font-family: 'Montserrat', sans-serif;text-align:left;text-indent: 2em;
    font-size: 16px;
    line-height: 2.2;
    font-weight: 500;
    color: #333;
    text-shadow: rgba(0,0,0,.01) 0 0 1px;}
    .title{text-align:left;font-size: 24px;line-height: 40px;font-weight: 700;font-family: "Microsoft Yahei", "微软雅黑", "宋体";margin-top:15px;padding-left:1%;}
    .img img{width:100%;border-radius:5px;}
    /* .img{margin-top:40px;} */
    .morecontainer p{margin-top:5px;}
</style>