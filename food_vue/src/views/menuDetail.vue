<template>
    <div class="menuDetail">
        <navTop></navTop>
        <div class="detail_box">
            <menuLeft :mid="mid"></menuLeft>
            <menuRecom></menuRecom>
        </div>
        <bottom></bottom>
    </div>
</template>
<script>
import navTop from '@/components/navTop.vue';
import bottom from '@/components/bottom.vue';
import menuLeft from '@/components/detail/menuLeft.vue';
import menuRecom from '@/components/detail/menuRecom.vue';

export default {
    components:{navTop,bottom,menuLeft,menuRecom},
    props:{mid:""},
    data(){
        return{}
    },
    methods:{}
}
</script>
<style scoped>
    .detail_box{max-width: 1100px;margin:50px auto;display: flex;justify-content: space-between;margin-bottom: 30px;}
    @media (max-width:960px) {
        .menuRecom{display: none;width:100%;}
        .detail_box{margin:50px 2%;}
    }
    @media (max-width:576px) {
        .detail_box{margin:50px 2% 30px;}
    }
</style>
