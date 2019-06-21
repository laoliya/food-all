<template>
    <div class="dairy_two" id="dairy">
        <navTop></navTop>
        <div class="dairy_two_div">
            <!-- <h1 class="dairy_two_h1">贝太</h1> -->
            <div class="dairy_two_top" v-if="list[0]">
                <div class="first">
                    <h3 class="dairy_two_h3">{{list[0].user_name}}</h3>
                    <h4 class="dairy_two_h4">{{list[0].text}}</h4>
                    <p class="dairy_two_p">{{list[0].content}}</p>
                </div>
                <div>
                    <img :src="`http://127.0.0.1:3000/img/`+list[0].img" alt="" class="dairy_two_img"/>
                </div>
            </div> 
            <div class="dairy_two_top2" v-if="list[1]">
                <div>
                    <img :src="`http://127.0.0.1:3000/img/`+list[1].img" alt="" class="dairy_two_img"/>
                </div>
                <div class="second">
                    <h3 class="dairy_two_h3">{{list[1].user_name}}</h3>
                    <h4 class="dairy_two_h4">{{list[1].text}}</h4>
                    <p class="dairy_two_p">{{list[1].content}}</p>
                </div>
            </div> 
           
            <div class="dairy_two_top" v-if="list[2]">
                <div class="three">
                    <h3 class="dairy_two_h3">{{list[2].user_name}}</h3>
                    <h4 class="dairy_two_h4">{{list[2].text}}</h4>
                    <p class="dairy_two_p">{{list[2].content}}</p>
                </div>
                <div>
                    <img :src="`http://127.0.0.1:3000/img/`+list[2].img" alt="" class="dairy_two_img"/>
                </div>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>
<script>
import navTop from '@/components/navTop.vue'
import bottom from '@/components/bottom.vue'
export default {
    name:"dairy",
    components: {navTop,bottom},
    data(){
        return{
            list:[]
        }
    },
    created(){this.loadMore()},
    methods: {
        loadMore(){
            this.axios.get("index/dairy").then((result)=>{
                this.list=result.data.data;
            })
        }
    },
}
</script>
<style>
.first,.three{text-align: left;margin-right: 75px}
.second{text-align: right;margin-left: 75px;margin-right: 25px}
.dairy_two{
    width: 100%;box-sizing: border-box;
}
.dairy_two_div{
    max-width: 960px;
    margin: 60px auto;width:100%;box-sizing: border-box;
}
.dairy_two_top{border-radius:105px 0px;border: 2px solid #ececec;margin: 0 auto;justify-content: space-between;display: flex;padding: 2em;width:100%;box-sizing: border-box;}
.dairy_two_top2{
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
    padding: 2em;
    width:100%;box-sizing: border-box;
}
.dairy_two_img{
    border-radius: 105px 0px ;
    margin: 10px;
}
.dairy_two_h1{
    font-size: 3.8em;
    text-transform: capitalize;
    text-align: left;
    color: #000;
    font-family: 'Great Vibes', cursive;
}
.dairy_two_h3{
    font-size: 2.5em;
    color: #9e8571;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-shadow: 2px 2px 13px #a58471;
    font-family: 'Great Vibes', cursive;
    padding-left: 0.1em;
}
.dairy_two_h4{
    color: #d3e6a6;
    font-size: 26px;
    letter-spacing: 1px;
    margin-bottom:20px;
    margin-top:20px;
}
.dairy_two_p{
    font-size: 16px;
    color: #333;
    letter-spacing: .6px;
    line-height: 33px;
    margin-top: 20px;
}
@media (max-width:960px) {
    .dairy_two_div{margin:80px 0 40px;padding:0 4%;}
    .dairy_two_h3{font-size: 1.5rem;}
    .dairy_two_h4{font-size: 1.2rem;margin-bottom: 15px;}
    .dairy_two_p{font-size: 0.875rem;line-height: 25px;margin-top: 10px;}
}
@media (max-width:576px) {
    .dairy_two_top,.dairy_two_top2{display: block;padding:32px 11px 5px 32px;margin-bottom: 20px;}
    .first, .three{margin-right: 0;}
    .dairy_two_h3{font-size:1.25rem;}
    .dairy_two_h4{font-size: 1rem;margin:15px 0 10px;}
    
    .dairy_two_top2{margin-bottom: 20px;border-radius:105px 0px;border: 2px solid #ececec;padding:8px 8px 34px 20px;}
}
</style>

