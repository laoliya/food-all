import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import menuDetail from './views/menuDetail.vue'
import menuList from './views/menuList.vue'
import dairy from './views/dairy.vue'
import articleList from './views/articleList.vue'
import article from './views/article.vue'
import stars from './views/stars.vue'
import starsMore from './views/starsMore.vue'
import userCollection from './views/userCollection.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Home},
    {path: '/menuDetail/:mid',component: menuDetail,props:true},
    {path: '/menuList',component: menuList},
    {path: '/dairy',component: dairy},
    {path: '/articleList',component: articleList},
    {path: '/article/:lcId',component: article,props:true},
    {path: '/stars',component: stars},
    {path: '/starsMore/:slwId',component: starsMore,props:true},
    {path: '/userCollection',component: userCollection},
  ]
})
