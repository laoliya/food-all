<template>
    <div class="metuSteps">
        <h1>制作步骤</h1>
        <div v-if="list">
            <div class="detail_steps" v-for="(item,i) of list" :key="i">
                <div class="steps_left">
                    <h2>步骤{{i+1}}</h2>
                    <p>{{item.details}}</p>
                </div>
                <div class="steps_right">
                    <img :src="'http://127.0.0.1:3000/img/'+item.img" alt="">
                </div>
            </div>
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
        this.loadSteps();
    },
    methods:{
        loadSteps(){
            this.axios.get("menuDetail/getSteps",{params:{mid:this.mid}}).then((result)=>{
                this.list=result.data.data;
            })
        }
    }
}
</script>
<style scoped>
    .metuSteps h1{font-size: 1.25rem;padding:25px 0 20px;font-weight: 600;}
    .detail_steps{display: flex;justify-content: space-between;margin-bottom:30px;}
    .steps_left{width:55%}
    .steps_right{width:40%}
    .steps_right img{width:100%;display: block;}
    .steps_left h2{height:30px;line-height: 30px;font-weight: 600;margin-bottom: 10px;}
    .steps_left p{line-height: 25px;}
    @media (max-width:960px){
        .metuSteps h1{font-size: 1.125rem;}
    }
    @media (max-width:576px){
        .metuSteps h1{font-size: 1rem;}
        .detail_steps{display: block;}
        .steps_left{width:100%;}
        .steps_right{width:100%;margin-top:20px;}
        
    }
</style>
