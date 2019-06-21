<template>
<!-- 瘦身小课堂 -->
    <div class="lose">
        <div class="lesson">
            <div class="lesson-img">
                <img src="../../assets/5nnYmsMsRP.jpg" alt="">
            </div>
            <div class="lesson-right">
                <div class="lesson-container">
                    <h1>瘦身小课堂</h1>
                    <div class="icon class_icon"></div> 
                    <div class="class_content">
                        <router-link :to="`/article/${item.lcId}`" target="_blank" v-for="(item,i) of list" :key="i"><span>{{item.title}}</span><i>{{item.date}}</i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- 瘦身小课堂结束 -->
</template>
<script>
export default {
    data(){
        return{
            list:[],
        }
    },
    created() {
        this.load();
    },
    methods:{ 
        load(){
            var url="index/indexClass";
            this.axios.get(url).then((result)=>{
                this.list=result.data;
            })
        }
    },

}
</script>
<style scoped>
.lose{width:100%;}
.lesson{width:100%;margin:0 auto;display: flex;}
.lesson-img{width:50%;}
.lesson-img>img{width:100%;display:block;}
.lesson-right{background-color:#eee;width:50%;}
.lesson-container{max-width:550px;padding-left:10%;margin-top:15%;box-sizing: border-box;}
.lesson-container>h1{font-size:1.5rem;margin-bottom: 20px;}
.lesson-container>hr{width:60px;background-color:#d8316c;height:2px;border:none;border-radius:2px;margin-left:5px;}
.class_content{margin-top:40px;}
.class_content a{display:flex;margin:0 0 20px 0;justify-content: space-between;font-size: 16px;}
.class_content a:hover{color:#d8316c;cursor: pointer;}
.class_content a span{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width:80%;}
.class_icon{margin:0 0;}
@media (max-width:960px){
    .lesson-img{display: none;}
}
@media (max-width:960px){
    .lesson-right{width:100%;}
    .lesson-container{max-width:90%;margin:30px 0;}
    .class_content a span{width:70%;font-size: 0.875rem;}
    .lesson-container>h1{font-size: 1rem;margin-bottom: 15px;text-align: center;}
    .class_content{margin-top:20px;}
    .class_content a{margin-bottom: 15px;}
    .class_icon{margin:0 auto;}
}
</style>
