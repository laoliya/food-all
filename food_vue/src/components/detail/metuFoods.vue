<template>
    <div class="metuFoods">
        <h1>食材清单</h1>
        <div class="menuFood" v-if="list">
            <p v-for="(item,i) of list" :key="i">
                <span>{{item.fname}}</span>
                <b>{{item.count}}</b>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    props:{
        mid:""
    },
    created(){
        this.loadFoods();
    },
    methods:{
        loadFoods(){
            this.axios.get("menuDetail/getFoods",{params:{mid:this.mid}}).then((result)=>{
                this.list=result.data.data;
            })
        }
    }
}
</script>
<style scoped>
    .metuFoods h1{font-size: 1.25rem;padding:25px 0 20px;font-weight: 600;}
    .menuFood p{height:30px;line-height: 30px;}
    .menuFood p span{display: inline-block;width:60%;}
    @media (max-width:960px){
        .metuFoods h1{font-size: 1.125rem;}
    }
    @media (max-width:576px){
        .metuFoods h1{font-size: 1rem;}
    }
</style>
