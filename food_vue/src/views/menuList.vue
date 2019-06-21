<template>
<div>
    <navTop></navTop>
    <div class="menu-box">
        <h2 class="menuheader">{{header}}</h2>
        <div class="menu_content">
            <el-tabs v-model="activeName" class="menu_tabs">
                <el-tab-pane label="综合最佳" name="first">
                    <div class="menu-line">
                    </div>
                    <div class="menu-content">
                        <router-link :to="`/menuDetail/${menu.mid}`" target="_blank" v-for="(menu,index) in mm" :key="index">
                            <div class="menu-content-item">
                                <div class="img_div">
                                    <img :src="`http://127.0.0.1:3000/img/`+menu.img" alt="">
                                </div>
                                <div class="content_div">
                                    <h4>{{menu.mname}}</h4>
                                    <p>{{menu.subtitle}}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="收藏最多" name="second">
                    <div class="menu-line">
                    </div>
                    <div class="menu-content">
                        <router-link :to="`/menuDetail/${menu.mid}`" target="_blank" v-for="(menu,index) in nn" :key="index">
                            <div class="menu-content-item">
                                <div class="img_div">
                                    <img :src="`http://127.0.0.1:3000/img/`+menu.img" alt="">
                                </div>
                                <div class="content_div">
                                    <h4>{{menu.mname}}</h4>
                                    <p>{{menu.subtitle}}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="浏览最多" name="third">
                    <div class="menu-line">
                    </div>
                    <div class="menu-content">
                        <router-link :to="`/menuDetail/${menu.mid}`" target="_blank" v-for="(menu,index) in ss" :key="index">
                            <div class="menu-content-item">
                                <div class="img_div">
                                    <img :src="`http://127.0.0.1:3000/img/`+menu.img" alt="">
                                </div>
                                <div class="content_div">
                                    <h4>{{menu.mname}}</h4>
                                    <p>{{menu.subtitle}}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="total">
        </el-pagination>
    </div>
    <bottom></bottom>
</div>
</template>
<script>
import navTop from '@/components/navTop.vue';
import bottom from '@/components/bottom.vue';
import $ from 'jquery'
export default {
    components:{navTop,bottom},
    data(){
        return{
            header:"全部食谱",
            activeName: 'first',
            menus:[],//后台接收的数据
            totalPage:[],  //所有页面的数据
            currentPage:1,//  默认显示当前第一页
            pageSize:16,  // 每页的数量
           // total:1,  //共几页
            mm:"",
            nn:"",
            ss:"",
            total:1,
        }
    },
    created(){
        this.getData();
    },
    methods: {
        getData(){
            var keyword = this.$route.query.keyword
            if(keyword===undefined){
            this.axios.get("menu/mealsList").then(result=>{
                this.menus=result.data.data;
                //1.根据后台数据的条数和每页显示的数量算出一共几页
                 this.total=this.pageSize*Math.ceil(this.menus.length/this.pageSize)
               // console.log(this.pageNum) 
                //2.根据页数对数据分组，并存进每一页
                var begin=(this.currentPage-1)*this.pageSize;
                var end=this.currentPage*this.pageSize;
                //每一页都是一个数组，形如[[第一页的数据],[第二页的数据],[第三页的数据]...]
                //根据每页显示数量将后台的数据分割到每一页，
                this.mm=this.menus1.slice(begin,end);
                this.nn=this.menus2.slice(begin,end);
                this.ss=this.menus3.slice(begin,end);
             
        })} else {
             this.axios.get("menu/meals/search",{params:{keyword}}).then(result=>{
                this.menus=result.data.data;
                if(this.menus=="非常抱歉,没有相关菜谱"){ 
                    this.header="“"+keyword+"”";
                   $(".menu-content").html(this.menus);
                              
                   }
                        else{
                            this.header="“"+keyword+"”";
                            this.total=this.pageSize*Math.ceil(this.menus.length/this.pageSize)
                            // console.log(this.pageNum) 
                                //2.根据页数对数据分组，并存进每一页
                                var begin=(this.currentPage-1)*this.pageSize;
                                var end=this.currentPage*this.pageSize;
                                //每一页都是一个数组，形如[[第一页的数据],[第二页的数据],[第三页的数据]...]
                                //根据每页显示数量将后台的数据分割到每一页，
                                this.mm=this.menus1.slice(begin,end);
                                this.nn=this.menus2.slice(begin,end);
                                this.ss=this.menus3.slice(begin,end);}
                        })
        }
       
        },
        handleSizeChange(size){
            this.pageSize=size;
        },
        handleCurrentChange(size){
            this.currentPage=size;
            this.getData();
        },
    },
    computed:{
        menus1:function(){
              return sortKey(this.menus,'grade')
       },
       menus2:function(){
               return sortKey(this.menus,'store')
       },
        menus3:function(){
               return sortKey(this.menus,'watch')
       },
   }
     }
      function sortKey(array,key){
                return array.sort(function(a,b){
                    var x = a[key];
                    var y = b[key];
                    return ((x<y)?1:(x>y)?-1:0)
                })
 }
</script>
<style>
    .menu-box{max-width:960px;margin: 70px auto 60px;}
    .menuheader{text-align: left;font-size:24px;color:272b2c;padding: 60px 0 40px;
            line-height: 40px;font-weight: 800;margin: 0}
    .el-tabs__nav-wrap::after{background-color: #fff !important;}
    .el-tabs__active-bar{
        /* height: 5px !important; */
        /* width:66px !important; */
        border-radius: 5px !important;
        margin-top: 8px !important;
        background-color: #d8316c !important;
    }
    .el-tabs__item {font-size: 17px !important;font-weight: 500 !important }
    .el-tabs__item.is-active{color: #d8316c !important;}
    .el-tabs__item:hover{color:#d8316c !important}
    .menu-line{width: 960px;height: 2px;background-color: #eee;border-radius: 3px;
               margin-bottom: 36px;}
    .menu-content{width: 100%;display: flex;flex-wrap: wrap;margin-top: 25px;box-sizing: border-box;margin-bottom: 25px;}
    .menu-content a{display: block;width:23%;text-decoration: none;padding-left: 1%;padding-right: 1%;margin-bottom: 20px;}
    .img_div{width:100%; overflow: hidden;}
    .content_div{margin-top: 16px;}
    .menu-content-item img{width:100%;transition: all 0.4s linear;display: block}
    .menu-content a:hover img{transform: scale(1.1)}
    .menu-content-item h4{font-size: 17px;font-weight: 600;color: #272b2c;text-align: left;
                          text-overflow: ellipsis;overflow: hidden;white-space: nowrap;margin-top: 0;margin-bottom: 10px;}
    .menu-content-item p{font-size: 14px;margin-top: 6px;font-weight: 300;color: #272b2c;text-align: left;
                          text-overflow: ellipsis;overflow: hidden;white-space: nowrap;line-height: 20px}
    .el-pagination{margin: 20px auto 80px;width:min-content;}
    .el-pagination button:disabled{background-color: #fff  !important;border: 1px solid #e8e8e8;color:#c0c4cc !important}
    .el-pagination .btn-prev{min-width: 28px;height: 28px;padding: 0 !important;border-radius: 50%;margin-right: 20px;background-color: #d8316c !important;border: 1px solid #d8316c;color: #fff !important}
    .el-pagination .el-pager .number{font-weight: 600;border-radius: 50%;min-width: 28px;height: 28px;margin: 0 6px;color:#d8316c}
    .el-pagination .el-pager .active{color:#fff;background-color: #d8316c;min-width: 28px;height: 28px;box-sizing: border-box}
    .el-pagination .el-pager .more{color:#d8316c}
    .el-pagination .btn-next{min-width:28px;height: 28px;border-radius: 50%;background-color: #d8316c !important;margin-left: 20px;border: 1px solid #d8316c;color:#fff !important;padding: 0 !important}
    .el-icon-arrow-left:before{content:"\E6DE" !important}
    .el-icon-arrow-right:before{content:"\E6E0" !important}
    @media (max-width:960px){
        .menu_tabs .el-tabs__nav-scroll{width:281px;margin:0 auto;}
        .menu-box{padding:0 2%;margin-bottom: 40px;}
        .menu-content a{width:48%;margin-bottom: 20px;}
        .menuheader{text-align: center;font-size: 1.25rem;padding:80px 0 10px;}
        .el-tabs__item{font-size: 1rem !important;}
    }
    @media (max-width:576px){
        .menuheader{text-align: center;font-size: 1.2rem;padding:70px 0 0;}
        .menu_tabs .el-tabs__active-bar{width:64px !important;}
        .menu-line{margin-bottom: 20px;}
        .menu-content-item h4{font-size: 1rem;}
    }
</style>


