<template>
    <div>
        <navTop></navTop>
        <div class="col_con">
        <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="我收藏的食谱" name="first" class="dheader">
                    <div class="line"></div>
                     <div class="menu-content" v-if="list">
                        <a href="" v-for="(item,index) in list" :key="index">
                            <div class="menu-content-item">
                                <div class="img_div">
                                    <img :src="`http://127.0.0.1:3000/img/`+item.img" alt="">
                                </div>
                                <div class="content_div">
                                    <h4>{{item.mname}}</h4>
                                    <p>{{item.subtitle}}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="我收藏的文章" name="second" class="dheader">
                     <div class="line"></div>
                     <div class="menu-content" v-if="list">
                        <a href="" v-for="(item,index) in list" :key="index">
                            <div class="menu-content-item">
                                <div class="img_div">
                                    <img :src="`http://127.0.0.1:3000/img/`+item.img" alt="">
                                </div>
                                <div class="content_div">
                                    <h4>{{item.title}}</h4>
                                    <p>{{item.subtitle}}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </el-tab-pane>
        </el-tabs>
        <el-pagination class="page"
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
import navTop from '@/components/navTop.vue'
import bottom from '@/components/bottom.vue'
  export default {
      components: {navTop,bottom},
    data() {
      return {
        activeName: 'first',
        list:[],
        totalPage:[],  //所有页面的数据
        currentPage:1,//  默认显示当前第一页
        pageSize:16,  // 每页的数量
           // total:1,  //共几页
        total:1,
      };
    },
    created() {
        this.loadMore();
    },
    methods: {
      loadMore(){
          this.axios.get("collection/collectionMeals").then((result)=>{
              if(result.data.code==-1){
                  $(".menu-content").html("您还没有收藏菜谱~");
                  $(".page").hide()
                  $(".menu-content").css({"margin-left":483,"color":"#272b2c","font-weight":300,"font-size":"17px","margin-top":35})
              } else{
                  this.list=result.data.data
                  console.log(this.list)
              }
          })
      },
       handleClick(tab, event) {
         // console.log(123)
          if(tab.name=="second"){
            this.axios.get("collection/collectionArticles").then((result)=>{
                if(result.data.data.length===0){
                    $(".menu-content").html("您还没有收藏文章~");
                    $(".page").hide()
                   $(".menu-content").css({"margin-left":483,"color":"#272b2c","font-weight":300,"font-size":"17px","margin-top":35})
               } else{
                   console.log(123)
                  this.list=result.data.data
              }
          })
      }else{
          this.loadMore()
      } },
      handleSizeChange(size){
            this.pageSize=size;
        },
        handleCurrentChange(size){
            this.currentPage=size;
            this.loadMore();
            this.select()
        },
    }
  };
</script>
<style scoped>
    .col_con{ margin:120px auto 0;width: 100%;max-width: 1100px;}
    .tab{ max-width: 1100px;}
    .el-tabs__item{ cursor: pointer;position: relative;display: inline-block;font-size: 24px !important;color: #272b2c;letter-spacing: -.4px;font-weight: 800 !important; -webkit-transition: all .8s;transition: all .8s; margin-bottom: 5px;}
    .el-tabs__item.is-active {color: #d8316c;cursor: pointer;}
    #app {max-width: 1100px; margin: 0 auto;}
    .el-tabs__active-bar{height: 5px !important; width:140px !important;border-radius: 5px !important;margin-top: 8px !important;background-color: #d8316c !important;}
    .el-tabs__active-bar {position: absolute;bottom: 15px;left: 0; height: 5px;background-color: #D8316D;z-index: 1;transition: transform .2s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);list-style: none;border-radius: 2px;}
   .menu-content{width: 100%;display: flex;flex-wrap: wrap;margin-top: 25px}
    .menu-content a{display: block;width:23%;text-decoration: none;padding-left: 1%;padding-right: 1%}
    .img_div{width:100%; overflow: hidden;}
    .content_div{margin-top: 16px;}
    .menu-content-item img{width:100%;transition: all 0.4s linear;display: block}
    .menu-content a:hover img{transform: scale(1.1)}
    .menu-content-item h4{font-size: 17px;font-weight: 600;color: #272b2c;text-align: left;
                          text-overflow: ellipsis;overflow: hidden;white-space: nowrap;margin-top: 0;margin-bottom: 10px;}
    .menu-content-item p{font-size: 14px;margin-top: 6px;font-weight: 300;color: #272b2c;text-align: left;
                          text-overflow: ellipsis;overflow: hidden;white-space: nowrap;line-height: 20px}
    .dheader{font-weight: 800}
    .line{max-width:1100px;height: 2px;background-color: #eee;border-radius: 3px;}
    .el-pagination{margin: 20px auto 60px}
    .el-pagination button:disabled{background-color: #fff  !important;border: 1px solid #e8e8e8;color:#c0c4cc !important}
    .el-pagination .btn-prev{min-width: 28px;height: 28px;padding: 0 !important;border-radius: 50%;margin-right: 20px;background-color: #d8316c !important;border: 1px solid #d8316c;color: #fff !important}
    .el-pagination .el-pager .number{font-weight: 600;border-radius: 50%;min-width: 28px;height: 28px;margin: 0 6px;color:#d8316c}
    .el-pagination .el-pager .active{color:#fff;background-color: #d8316c;min-width: 28px;height: 28px;box-sizing: border-box}
    .el-pagination .el-pager .more{color:#d8316c}
    .el-pagination .btn-next{min-width:28px;height: 28px;border-radius: 50%;background-color: #d8316c !important;margin-left: 20px;border: 1px solid #d8316c;color:#fff !important;padding: 0 !important}
    .el-icon-arrow-left:before{content:"\E6DE" !important}
    .el-icon-arrow-right:before{content:"\E6E0" !important}
</style>
