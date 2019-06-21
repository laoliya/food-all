<template>
    <footer>
	<div class="footer_top">
		<div class="footer_logo"><img src="../assets/logo.png" alt=""></div>
		<div class="footer_nav">
			<ul class="">
				<li><h4><router-link to="/menuList" target="_blank">一日三餐</router-link></h4></li>
				<li><h4><router-link to="/menuList" target="_blank">瘦身食谱</router-link></h4></li>
				
				<!-- <li><router-link to="/menuList" target="_blank">早餐</router-link></li>
				<li><router-link to="/menuList" target="_blank">午餐</router-link></li>
				<li><router-link to="/menuList" target="_blank">晚餐</router-link></li> -->
			</ul>
			<ul class="">
				<li><h4><router-link to="/menuList" target="_blank">瘦身日记</router-link></h4></li>
				<li><h4><router-link to="/menuList" target="_blank">明星食谱</router-link></h4></li>
				<!-- <li><a href="#">鸿天新闻</a></li>
				<li><a href="#">文化活动</a></li>
				<li><a href="#">通知公告</a></li>
				<li><a href="#">行业动态</a></li> -->
			</ul>
			<ul class="">
				<li><h4><router-link to="/menuList" target="_blank">瘦身课堂</router-link></h4></li>
				<!-- <li><a href="#">男装</a></li>
				<li><a href="#">女装</a></li>
				<li><a href="#">男童装</a></li>
				<li><a href="#">女童装</a></li> -->
			</ul> -->
			<ul class="">
				<li><h4><a href="javascript:viod()">联系我们</a></h4></li>
				<li>电话：+86 0531-68650996</li>
				<li>传真：+86 0531-68650044</li>
				<li>邮编：250101</li>
				<li>公司地址：山东省济南市高新区经十东路7000号<br>汉峪金谷A4-3-21（A4地块3栋21层）</li>
			</ul>
		</div>
		<div class="ewm d-flex">
			<div class="mr-lg-3 mr-xl-5">
				<p>扫描查看手机效果</p>
				<img src="../assets/ewm1.jpg" alt="">
			</div>
		</div>
	</div>
	<div class="copy">
		<p>鲁ICP备16009282号 COPYRIGHT &copy; 2018 济南鸿天健康管理有限公司 ALL RIGHTS RESERVED</p>
	</div>
</footer>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style>
/* 底部 */
footer{background: #333;padding-top:70px !important;}
.footer_top{display: flex;justify-content: space-between;max-width: 1100px;margin:0 auto;}
.footer_height{height:375px;}
.footer_logo img{margin-top:35px;}
.footer_nav{margin-left: 70px;width:70%;display: flex;}
.footer_nav ul{margin-right:30px;}
.footer_nav ul li a,.footer_nav ul li{color:#bbb;font-size: 0.8125rem;line-height: 30px;}
.footer_nav ul li h4 a{font-size: 1rem;color:#eee;margin-bottom: 20px;}
.ewm{margin-left:36px;}
.ewm p{color:#ddd;font-size: 0.875rem;margin-bottom: 25px;}
.copy p{width:90%;margin:0 auto;border-top:1px solid #777777;color:#bbb;font-size: 0.875rem;line-height: 65px;margin-top:35px;text-align: center;}
@media (max-width:960px){
	footer{padding:0 !important;}
	.footer_top{display: none !important;}
	.copy p{border:none;line-height:30px;margin-top:0;padding:10px 0;}
	.footer_height{height:90px;}
}
</style>
