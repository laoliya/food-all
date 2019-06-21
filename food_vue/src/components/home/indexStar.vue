<template>
    <!-- 和明星一起瘦身 -->
    <div class="fire">
        <div class="three_meals">
            <div class="fire_content">
            <h3>和明星一起瘦身</h3>
            <div class="icon"></div>  
        </div>
            <div class="three_meals_img">
                <div class="meals-one" v-for="(item,i) of list" :key="i">
                    <router-link :to="`/starsMore/${item.slwId}`" class="meal_j">
                        <div class="meals-left">
                            <img :src="`http://127.0.0.1:3000/img/`+item.img" alt="">
                        </div>
                        <div class="meals-right">
                            <div class="meals-container">
                                <p class="meals-p1">25 NOVEMBER 2014</p>
                                <hr>
                                <p class="meals-p2">{{item.title}}</p>
                                <hr>
                                <p class="meals-p1">{{item.subtitle}}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>   
        </div>
    </div>
    <!-- 和明星一起瘦结束 -->
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.loadStar()
    },
    methods:{
        loadStar(){
            this.axios.get("index/indexStar").then((result)=>{
                this.list=result.data;
            })
        }
    }
}
</script>
<style>
.three_meals_img{display: flex;margin:0 auto;justify-content: space-between;flex-wrap: wrap;margin-bottom:30px;}
.meals-one{padding:20px;box-shadow: 1px 1px 6px 2px rgb(230, 230, 230);;box-sizing: border-box;border-radius: 7px;display:flex;justify-content: space-between;width:48%;margin-bottom:30px;}
.meals-left{width:48%;}
.meals-left img{width:100%;}
.meals-right{width:48%;}
.meals-right>p1{color:#D4D4D4;display:-webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;}
.meals-container{text-align:center;margin-top:10%;}
p.meals-p1{color:#ababab;overflow: hidden;white-space: nowrap;font-size: 0.875rem;}
p.meals-p2{color:#464646;font-size:1.2rem;margin:20px 0;}
.meals-container>hr{width:90%;color:#eee;}
.three_meals{max-width:1110px;margin:0 auto;}
.three_meals_div{text-align: center;margin:60px 0 20px;}
.three_meals_div>hr{width:60px;background-color:#ff2e64;height:4px;border:none;border-radius:2px;}
.three_meals_h2{font-size:1.5rem;margin-bottom: 20px;}
.meal_j{display: flex;justify-content: space-between;}
@media (max-width:960px){
    .three_meals_img{margin:10px 2% 0;}  
    .meals-container{margin-top:10%;}
    .three_meals{padding-bottom:30px;}
}
@media (max-width:576px){
    .three_meals_img{margin:10px 4% 0;}
    .meals-one{width:98%;}  
    p.meals-p2{font-size: 1rem;}
    .meals-container{margin-top:15%;}
    .three_meals{padding-bottom: 10px;}
    .meals-one{margin-bottom: 15px;}
}
</style>
