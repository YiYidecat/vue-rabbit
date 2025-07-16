// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import "@/styles/common.scss"

//引入懒加载指令插件并且进行注册
import { lazyPlugin } from './directives'

// //测试接口函数
// import { getCategory } from '@/apis/testAPI'

// getCategory().then(res=>{
//     console.log(res)
// })              

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')

// //定义全局指令，这一部分后面写在了directives/index.js

// app.directive('img-lazy',{
//     mounted(el,binding){
//         //el:指令绑定的那个元素
//         //binding：binding.value 指令等于号后面绑定的表达式的值 图片url
//         console.log(el,binding.value)
//         //针对进入视口区域进行设置
//         useIntersectionObserver(
//             el,
//             ([{isIntersecting}])=>{
//                 console.log(isIntersecting)
//                 if(isIntersecting){
//                     //进入视口区域
//                     el.src = binding.value
//                 }
//             }
//         )
//     }
// })


