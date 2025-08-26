import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'
import Category from '../views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CarList from '@/views/CartList/index.vue'
import Checkout from '../views/Checkout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      // 一级路由
      path:'/',
      component:Layout,
      // 二级路由
      children:[
        {
          //home页是打开时候的页面，这里进行置空
          path:'',
          component:Home
        },
        {
          path:'category/:id',
          component:Category
        },
        {
          path:'category/sub/:id',
          component:SubCategory
        },
        {
          path:'detail/:id',
          component:Detail
        },
        {
          path:'cartlist',
          component:CarList
        },
        {
          path:'checkout',
          component:Checkout
        }
      ]
    },
    {
      // 一级路由
      path:'/login',
      component:Login
    }
  ],

  //所有路由切换都从最顶部开始
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
