<template>
<div>
    <!-- 一日三餐 start -->
    <div class="three_meals">
        <div class="fire_content">
            <h3>一日三餐</h3>
            <div class="icon"></div>  
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="index_meals">
            <el-tab-pane label="早餐" name="first">
                <!-- 图片-->
                <div class="meals">
                    <div class="meals-box" v-for="(item,i) of bre" :key="i">
                        <router-link :to="`/menuDetail/${item.mid}`" target="_blank" class="meals_a">
                            <div class="meals-img-box">
                                <img :src="'http://127.0.0.1:3000/img/'+item.img" class="meals_img">
                            </div>
                            <div class="meal_con">
                                <h3 class="meals_h3">{{item.mname}}</h3>
                                <p class="meals_p">{{item.subtitle}}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="午餐" name="second">
                <!-- 图片-->
                <div class="meals">
                    <div class="meals-box" v-for="(item,i) of lun" :key="i">
                        <router-link :to="`/menuDetail/${item.mid}`" target="_blank" class="meals_a">
                            <div class="meals-img-box">
                                <img :src="'http://127.0.0.1:3000/img/'+item.img" class="meals_img">
                            </div>
                            <div class="meal_con">
                                <h3 class="meals_h3">{{item.mname}}</h3>
                                <p class="meals_p">{{item.subtitle}}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="晚餐" name="third">
                <!-- 图片-->
                <div class="meals">
                    <div class="meals-box" v-for="(item,i) of din" :key="i">
                        <router-link :to="`/menuDetail/${item.mid}`" target="_blank" class="meals_a">
                            <div class="meals-img-box">
                                <img :src="'http://127.0.0.1:3000/img/'+item.img" class="meals_img">
                            </div>
                            <div class="meal_con">
                                <h3 class="meals_h3">{{item.mname}}</h3>
                                <p class="meals_p">{{item.subtitle}}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
    <!-- 一日三餐 end -->
    <!--享"瘦"之旅 start-->
        <div class="travel">
            <div class="fire_content">
            <h3>享"瘦"之旅</h3>
            <div class="icon icon_t"></div>
            <p class="travel_span">美食且经过试作保障的烘焙食谱</p> 
        </div>
        <!-- 图片-->
        <div class="travel_second_div">
            <div class="travel_box" v-for="(item,i) of video" :key="i">
                <router-link :to="`/menuDetail/${item.mid}`" target="_blank" class="travel_a">
                    <div class="travel_img_box">
                        <img :src="'http://127.0.0.1:3000/img/'+item.img" class="travel_img">
                    </div>
                    <div>
                        <h3 class="travel_h3 meals_h3">{{item.mname}}</h3>
                        <p class="travel_p meals_p">{{item.subtitle}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
<!--享"瘦"之旅 end -->
</div>
</template>
<script>
export default {
    data(){
        return{
            activeName: 'first',
            bre:[],
            lun:[],
            din:[],
            video:[]
        }
    },
    created(){
        this.loadMeal();
    },
    methods:{
        handleClick(tab, event) {
            //console.log(tab, event);
        },
        loadMeal(){
            this.axios.get("index/meal").then((result)=>{
                var list=result.data.data;
                var i=0;
                var j=0;
                for(var item of list){
                    if(i<12&&item.video==null){
                        if(item.tid==1){
                            this.bre.push(item);
                        }else if(item.tid==2){
                            this.lun.push(item);
                        }else{
                            this.din.push(item);
                        };
                        i++;
                    }else if(j<4&&item.video!==null){
                        this.video.push(item);
                        j++;
                    }    
                }
            })
        }
    }
}
</script>

<style>
/* 一日三餐 start*/
.index_meals .el-tabs__nav-wrap .el-tabs__nav-scroll{width:182px;margin:0 auto;}
.three_meals{width: 100%;padding-bottom: 60px;}
.three_meals_div{text-align: center;}
.three_meals_second_div{display: flex;justify-content: center;}
.three_meals_ul{list-style: none;padding: 0;}
.three_meals_li{float: left;}
.three_meals_a{color: #4d4d4d;text-decoration: none;padding:0 10px 10px;margin:0 15px 15px;display:inline-block;}
.three_meals_a:hover{color: #ff2e64;text-decoration:none;}
.three_meals_ul li .active{border-bottom: 2px solid #ff2e64;color: #ff2e64;}
.meals{display: flex;margin: 0 auto;max-width: 1100px;justify-content: space-between;flex-wrap: wrap;}
.meals-box{width:23%;}
.meals-img-box{width: 100%;overflow: hidden;border-radius: 7px;}
.meals_img{width: 100%;display: block;transition: all 0.6s ease-in-out;}
.meals_a:hover .meals_img{transform: scale(1.05);}
.meals_a{text-decoration: none;}
.meals_h3{color: #444;height:40px;line-height: 40px;}
.meals_p{color: #888;line-height: 20px;height:40px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;font-size:0.875rem;}
.el-tabs__nav-wrap::after{background: none !important;}
.el-tabs__item{font-size: 1rem !important;}
.el-tabs__item.is-active{color:#ff2e64 !important;}
.el-tabs__active-bar{background:#ff2e64 !important;}
.el-tabs__item:hover{color:#ff2e64 !important;cursor:pointer}

@media (max-width:960px){
    .meals{margin:0 2%;}
    .three_meals{padding-bottom: 30px;}
}
@media (max-width:576px){
    .meals{margin:0 4%;}
    .meals-box{width:48%;margin-bottom: 20px;}
    .fire_content{padding-top:30px;}
    .fire_content h3{font-size: 1rem;margin-bottom: 15px;}
    div.icon{width:30px;height:2px;margin-bottom:8px;}
    .el-tabs__item{font-size: 0.875rem !important;}
    .el-tabs__active-bar{width:27px !important;}
    .meal_con{margin:0 2%;}
    .meals_h3{height:30px;line-height: 30px;margin-top:10px;}
    .three_meals{padding-bottom:0;}
}
/*一日三餐 end*/
/*享"瘦"之旅 start*/
.travel{width: 100%;background-color: #f3f4f7;padding-bottom: 60px;}
.travel_div{text-align: center;}
.travel_span{color: #4d4d4d;text-align: center;}
.travel_second_div{display: flex;max-width: 1100px;margin: 20px auto 0;justify-content:space-between;flex-wrap: wrap;}
.travel_box{width: 23%;}
.travel_img_box{width: 100%;overflow: hidden;border-radius: 7px;}
.travel_img{width: 100%;transition: all 0.6s;display: block;}
.travel_img:hover{transform: scale(1.1);}
.travel_a{text-decoration: none;}
.travel_h3{color: #000000;}
div .icon_t{margin-bottom:15px}
@media (max-width:960px){
    .travel_second_div{margin:20px 2%;}
}
@media (max-width:576px){
    .travel{padding-bottom:10px;}
    .travel_second_div{margin:20px 4%;}
    .travel_box{width:48%;margin-bottom:20px;}
    .travel_span{font-size: 0.875rem;}
}
/*享"瘦"之旅 end*/
</style>
