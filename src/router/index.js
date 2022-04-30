import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/Home')
  },
  {
    path:'/area',
    name:'Area',
    component:()=>import('../views/Area')
  },
  {
    path:'/prevention',
    name:'Prevention',
    component:()=>import('../views/Prevention')
  },
  {
    path:'/city/:cityname',
    name:'City',
    component:()=>import('../views/City'),
    props:true,
  },
  {
    path:'/trivel',
    name:'Trivel',
    component:()=>import('../views/Trivel/Trivel.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
