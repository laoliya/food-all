<template>
    <div class="container">
        <div class="fire_content">
            <h3>燃烧吧！卡路里</h3>
            <div class="icon"></div>  
        </div>
        <div class="meals-lists">
            <a href="" class="list" v-for="(item,index) of list" :key="index">
                <div>
                    <img :src="`http://127.0.0.1:3000/img/`+item.img" alt="">
                    <p class="content">{{item.title}}</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{list:[]}
    },
    created(){
        this.loadFire()
    },
    methods:{
        loadFire(){
           this.axios.get("index/fire").then(result=>{
               this.list=result.data.data;
           })
        }
    }
}

</script>
<style>
.container{max-width:1100px;margin:0 auto;}
.fire_content{padding-top:60px;}
.fire_content h3{font-size: 1.5rem;margin-bottom:20px;text-align: center;}
div.icon{width: 60px;height: 3px;background-color:#ff2e64;margin: 0 auto;margin-bottom: 36px;}
.meals-lists{display: flex;justify-content: space-between;flex-wrap: wrap;}
.list{width: 23%;position: relative;z-index: 1;overflow: hidden;border-radius: 7px;}
.content{position: absolute;left:0;bottom:0;color:#fff;font-size: 16px;color:#fff;height:60px;line-height:60px;background: rgba(0, 0, 0, 0.6);padding-left:15px;width:100%;transition: all .5s ease-in-out;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
.list img{width: 100%;}
.list img{transition: all .4s ease-in-out;}
.list:hover img{transform: rotate(5deg);} 
.list:hover .content{background: rgba(0, 0, 0, 0);font-size: 1.5rem;left:5%;bottom:30%;color:#ff2e64;font-weight: bold;width:80%;text-align: center;}
@media (max-width:960px){
    .meals-lists{margin:0 2%;}
}
@media (max-width: 576px){
    .meals-lists{margin:0 4%;}
    .list{width:48%;margin-bottom: 20px;max-height: 240px;overflow: hidden;}
    .content{height:40px;line-height:40px;font-size: 0.875rem;}
}
</style>

