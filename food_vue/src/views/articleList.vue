<template>
    <div class="article-box">
        <navTop></navTop>
        <div class="arc_list">
        <div class="arc_header">
        </div>
        <div class="article-content">
            <div  class="back" @click="goBack">
                <div class="goBack"></div>
                <span>返回首页</span>
            </div>
            <!-- <h4 class="title">推荐文章</h4> -->
          <div class="articlelist" v-if="mm">
                <router-link :to="`/article/${item.lcId}`" v-for="(item,index) in mm" :key="index" class="guide" >
                    <div class="articlelist-item">
                        <div class="img_div">
                            <img :src="`http://127.0.0.1:3000/img/`+item.img" alt="">
                        </div>
                        <div class="content_div">
                            <h4>{{item.title}}</h4>
                            <p>{{item.subtitle}}</p>
                         </div>
                         <div class="enjoy">
                                 <img src="../assets/EtnjKySPkT.jpg" alt="">
                               <span>享瘦厨房</span> 
                         </div>
                    </div>
                </router-link>
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
        </div>
        <bottom></bottom>
    </div>
</template>
<script>
import navTop from '@/components/navTop.vue'
import bottom from '@/components/bottom.vue'
export default {
    components: {navTop,bottom},
    data(){
        return{
            articlelist:[],
            totalPage:[],  //所有页面的数据
            currentPage:0,//  默认显示当前第一页
            pageSize:15,  // 每页的数量
            total:1,
            mm:""
        }
    },
    created(){this.loadArticle()},
    methods:{
       loadArticle(){
           this.axios.get("article/articles").then(result=>{
               this.articlelist=result.data.data
               this.total=this.pageSize*Math.ceil(this.articlelist.length/this.pageSize)
               var begin=(this.currentPage-1)*this.pageSize
               var end=this.currentPage*this.pageSize;
               this.mm=this.articlelist.slice(begin,end);
           })
       },
        handleCurrentChange(size){
            this.currentPage=size
            this.loadArticle()
        },
        handleSizeChange(){

        },
        goBack(){
            this.$router.push("/menu")
        }
    }
}
</script>
<style>
.article-box{width:100%;margin: 0;}
.arc_list{margin:60px 0;}
.arc_header{width: 100%;height: 28vw;background: url("../assets/article.jpg") no-repeat 50%/cover;padding: 0;}
.article-content{max-width: 1100px;margin: 0 auto;}
.back{text-align: left;margin-top: 50px;padding-left: 1%;margin-bottom: 30px;cursor: pointer;display: flex;align-items: center}
.goBack{width: 20px;height: 24px;background-image: url("../assets/back.png");background-position: center;margin-right: 20px;}
.back span{font-size:1rem;color:#656969;}
.title{font-size: 24px;color:#272b2c;font-weight: 500;margin-bottom: 20px;margin-top: 60px;padding-left: 1%;}
.articlelist{width: 100%;display: flex;flex-wrap: wrap;margin-top: 25px;}
a.guide{display: block;width:31%;text-decoration: none;padding-left: 1%;padding-right: 1%}
.img_div{width:100%; overflow: hidden;}
.content_div{margin-top: 16px;padding-left: 5px;}
.articlelist-item .img_div img{width:100%;transition: all 0.4s linear;display: block}
.articlelist a:hover .img_div img{transform: scale(1.1)}
.articlelist-item h4{font-size:1rem;font-weight: 600;color: #272b2c;text-align: left;text-overflow: ellipsis;overflow: hidden;white-space:nowrap;margin-top: 16px;margin-bottom: 10px;}
.articlelist-item p{font-size:0.875rem;margin-top: 6px;font-weight: 300;color: #272b2c;text-align: left;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;line-height: 20px}
.enjoy{display: flex;align-items: center;margin-bottom: 30px;margin-top: 10px;padding-left: 2%}
.enjoy img{width:36px;height:36px;border-radius: 50%;margin-right:10px;}
.enjoy span{font-size:1rem;color:#272b2c;font-weight: 500}
.el-pagination{margin: 0 auto}
    .el-pagination button:disabled{background-color: #fff  !important;border: 1px solid #e8e8e8;color:#c0c4cc !important}
    .el-pagination .btn-prev{min-width: 28px;height: 28px;padding: 0 !important;border-radius: 50%;margin-right: 20px;background-color: #d8316c !important;border: 1px solid #d8316c;color: #fff !important}
    .el-pagination .el-pager .number{font-weight: 600;border-radius: 50%;min-width: 28px;height: 28px;margin: 0 6px;color:#d8316c}
    .el-pagination .el-pager .active{color:#fff;background-color: #d8316c;min-width: 28px;height: 28px;box-sizing: border-box}
    .el-pagination .el-pager .more{color:#d8316c}
    .el-pagination .btn-next{min-width:28px;height: 28px;border-radius: 50%;background-color: #d8316c !important;margin-left: 20px;border: 1px solid #d8316c;color:#fff !important;padding: 0 !important}
    .el-icon-arrow-left:before{content:"\E6DE" !important}
    .el-icon-arrow-right:before{content:"\E6E0" !important}
    @media (max-width:960px){
        .article-content{padding:0 1%;}
        .back{margin:30px 0 10px;}
    }
    @media (max-width:576px){
        .article-content{padding:0 2%;}
        .back{margin:20px 0 0;}
        .articlelist {margin-top: 20px;}
        .goBack{margin-right:10px;}
        a.guide{width:48%;}
        .enjoy img{width:30px ;height:30px;}
        .enjoy span{font-size: 0.875rem;}
    }
</style>



