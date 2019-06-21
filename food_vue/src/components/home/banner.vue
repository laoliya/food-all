<template>
  <div class="banner">
	 <!-- Swiper -->
	<div class="swiper-container">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide">
			 <!-- 1.轮播图片-->
			<img src="../../assets/banner13.jpg" alt=""/>
			<!-- 文字 -->
			<div class="life">
			     <div class="banner-cook">
			         <div class="sliders-title">
			             食幸福，享生活
			         </div>
			         <div class="sliders-intro">了解“泰式粉丝沙拉的做法”</div>
			     </div>
			 </div>
		</div>
	    <div class="swiper-slide">
			<img src="../../assets/banner14.jpg" alt=""/>
			<!-- 文字 -->
			<div class="life">
			     <div class="banner-cook">
			         <div class="sliders-title">
			             食幸福，享生活
			         </div>
			         <div class="sliders-intro">了解“泰式粉丝沙拉的做法”</div>
			     </div>
			 </div>
		</div>
	    <div class="swiper-slide">
			<img src="../../assets/banner16.jpg" alt=""/>
			<!-- 文字 -->
			<div class="life">
			     <div class="banner-cook">
			         <div class="sliders-title">
			             食幸福，享生活
			         </div>
			         <div class="sliders-intro">了解“泰式粉丝沙拉的做法”</div>
			     </div>
			 </div>
		</div>
	    <div class="swiper-slide">
			<img src="../../assets/banner14.jpg" alt=""/>
			<!-- 文字 -->
			<div class="life">
			     <div class="banner-cook">
			         <div class="sliders-title">
			             食幸福，享生活
			         </div>
			         <div class="sliders-intro">了解“泰式粉丝沙拉的做法”</div>
			     </div>
			 </div>
		</div>
	  </div>
	  <!-- Add Pagination -->
	  <div class="swiper-pagination"></div>
	  <!-- Add Arrows -->
	  <div class="swiper-button-next next"></div>
	  <div class="swiper-button-prev prev"></div>
	</div>
	<!-- 4.input-->
	<div class="search">
		<div class="banner-search">
			<img class="banner-img" src="../../assets/search1.png" alt=""/>
			<input type="text" placeholder="搜索食谱/食材" class="search-input" v-model="keyword"/>
			<button class="search-btn" @click="search">搜索</button>
		</div>
		<!-- 5.热门分类-->
		<div class="banner-keyword">
			<span>热门分类：</span>
			<span class="tomato" @click="jump">沙拉</span>
			<span class="tomato" @click="jump">土豆</span>
			<span class="tomato" @click="jump">鸡胸肉</span>
			<span class="tomato" @click="jump">粥</span>
			<span class="tomato"  @click="jump">羊肉</span>
		</div>
	</div>
	<!-- Swiper JS -->
	<!-- 已经在mian.js中引入了 -->
	<!-- Initialize Swiper -->
	
</div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: 'banner',
  data(){
	  return{
		  keyword:""
	  }
  },
  props: {
    msg: String
  },
  methods: {
      jump(e){
		  var span=e.target;
		  var keyword=span.innerHTML;
		   this.$router.push({path:"/menuList",query:{keyword}});
		  console.log(keyword)
	  },
	  search(){
		  var routerdata = this.$router.resolve({
                path: "/menuList", 
                query: {
                    keyword:this.keyword
                }
            });
			window.open(routerdata.href, "_blank");
			console.log(this.keyword)
	  }
  },
  mounted(){
		new Swiper('.swiper-container', {
			loop:true,
			effect:'fade',
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
  },
};
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.banner{ width: 100%;position: relative;max-height: 740px;overflow: hidden;}
.swiper-slide{width:100%;}
.swiper-slide>img{width:100%;}
.swiper-container-horizontal>.swiper-pagination-progressbar, .swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:30% !important;left:35% !important;top:92% !important;}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#fff !important;}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next{background-image:url(../../assets/arrow-left.png) !important;opacity: 0.5;}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev{background-image:url(../../assets/arrow-right.png) !important;opacity: 0.5;}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next{left:10% !important;}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev{right:10% !important;}
.life{position: absolute;width:70%;top:30%;left:20%;}
.sliders-title{font-size: 60px;color: #fff;text-shadow: 0 2px 8px rgba(0,0,0,.2);margin-bottom:20px;}
.sliders-intro{cursor: pointer;font-size: 24px;color: #fff;}
.search{position:absolute;bottom:20%;left:20%;z-index:999;width:100%;max-width: 960px;}
.banner-search{height: 60px;width:100%;background-color: #fff;border: 1px solid #eee;-webkit-box-shadow: 0 6px 12px 0 rgba(0,0,0,.08);box-shadow: 0 6px 12px 0 rgba(0,0,0,.08);border-radius: 6px;display: -webkit-box;display: -ms-flexbox;display: flex;max-width: 1000px;}
.banner-keyword{font-size: 14px;color: #fff;text-shadow: 0 2px 4px rgba(0,0,0,.2);margin-top:20px;}
.banner-keyword span{margin-right:15px;cursor: pointer;}
.tomato:hover{color:red;}
.carousel-indicators{position:absolute;top: 550px;right: 50%;}
.search-input{border:none;width:82%;outline:none;}
.search-btn{flex: 0 74px;font-size: 17px;color: #fff;line-height: 40px;text-align: center;margin: 10px 20px;border-radius: 4px;background: #d8316c;border:0;box-shadow: #eee;outline:none;cursor: pointer;}
.banner-img{width: 20px;height: 20px;margin: 20px;}
.swiper-prev{position: absolute;top: 50%;}
.arrow-left {margin-left: 300px;width: 20px;height: 35px;}
.arrow-right {margin-left: 1430px;width: 20px;height: 35px;}
@media (max-width:1400px){
	.search{width:60%;}
}
@media (max-width:960px){
	.sliders-title{font-size:3rem;}
	.search{width:60%;}
	.banner-search{height:40px;line-height: 40px;}
	.banner-img{margin:10px;}
	.search-btn{margin:5px 10px;font-size: 1rem;line-height: 30px;}
}
@media (max-width:576px){
	.sliders-title{font-size:1.5rem;}
	.search{display: none;}
	.sliders-intro{font-size: 1rem;}
	.swiper-button-next, .swiper-button-prev{display: none;}
}
</style>