<template>
    <div class="menuRecom">
        <h1>最新食谱</h1>
        <div v-if="list">
            <div class="newMetu" v-for="(item,i) of list" :key="i">
                <router-link :to="`/menuDetail/${item.mid}`" target="_blank">
                    <div><img :src="'http://127.0.0.1:3000/img/'+item.img" alt=""></div>
                    <h2>{{item.mname}}</h2>
                    <p>{{item.subtitle}}</p>
                </router-link>
            </div>
            <h1>热门搜索</h1>
            <div class="menuSearch" @click="jump">
                <span class="tomato">沙拉</span>
                <span class="tomato">土豆</span>
                <span class="tomato">鸡胸肉</span>
                <span class="tomato">粥</span>
                <span class="tomato">羊肉</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
        }
    },
    props:{mid:""},
    created(){
        this.loadRe();
    },
    methods:{
        loadRe(){
            this.axios.get("menuDetail/getRecom").then((result)=>{
                this.list=result.data.data;
            })
        },
        jump(e){
		    var span=e.target;
            var keyword=span.innerHTML;
            var routerdata = this.$router.resolve({
                path: "/menuList", 
                query: {
                    keyword:keyword,
                }
            });
            window.open(routerdata.href, "_blank");
	    },
        
    }
}
</script>
<style scoped>
    .menuRecom{width:25%;margin-top:75px;}
    .menuRecom h1{font-weight: 600;font-size: 1.25rem;margin:20px 0;}
    .newMetu{margin:20px 0 30px;;}
    .newMetu img{width:100%;}
    .newMetu p{line-height:20px;font-size: 0.875rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;color:#272B2C;overflow: hidden;font-weight: 300;}
    .newMetu h2{font-weight: 600;margin:15px 0 5px;;height:25px;line-height: 25px;}
    .menuSearch span{display: inline-block;padding:8px 12px;border:1px solid #272B2C;color:#272B2C;border-radius: 5px;margin:10px 10px 5px 0;font-size: 0.875rem;cursor: pointer;}
    .menuSearch span:hover{border:1px solid #ff2e64;color:#ff2e64;}
</style>
