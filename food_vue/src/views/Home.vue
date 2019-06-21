<template>
  <div class="home">
    <navTop class="index_header"></navTop>
    <!-- 轮播图 -->
    <banner></banner>
    <indexMeals></indexMeals>
    <indexFire></indexFire>
    <indexDiary></indexDiary>
    <indexStar></indexStar>
    <indexClass></indexClass>
    <bottom></bottom>
  </div>
</template>

<script>
//引入需要使用的子组件
import banner from '@/components/home/banner.vue'
import indexClass from '@/components/home/indexClass.vue'
import indexStar from '@/components/home/indexStar.vue'
import indexFire from '@/components/home/indexFire.vue'
import navTop from '@/components/navTop.vue'
import bottom from '@/components/bottom.vue'
import indexMeals from '@/components/home/indexMeals.vue'
import indexDiary from '@/components/home/indexDiary.vue'



export default {
  name: 'home',
  components: {banner,indexClass,indexStar,indexFire,navTop,indexMeals,indexDiary,bottom},
  mounted(){
    window.addEventListener("scroll",this.changeColor)
  },
  methods: {
    changeColor(){
            //获取屏幕滚动的高度
            var top=document.documentElement.scrollTop;
            //获取需要改变的元素：导航栏
            var header=document.querySelector(".index_header");
            if(top>600){
                header.style.backgroundColor="rgba(0,0,0,0.4)";
            }else{
                header.style.background="linear-gradient(-180deg,rgba(0,0,0,.2),transparent)";
            }
        },
  },
}
</script>
<style scoped>
  .index_header{background:linear-gradient(-180deg,rgba(0,0,0,.2),transparent);position: fixed;top:0;z-index: 99999;}
</style>


