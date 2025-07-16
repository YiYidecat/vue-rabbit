//定义懒加载插件

import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin =  {
  //install函数
  install(app) {
    app.directive('img-lazy',{
      mounted(el,binding) {
        //el:指令绑定的那个元素
        //针对进入视口区域进行设置//
        
        //解决重复监听的问题，防止内存浪费
        const {stop} = useIntersectionObserver(
          el,
          ([{isIntersecting}]) => {
            if(isIntersecting) {
              el.src = binding.value
              stop()
            }

          },
        ) 
      }
    })
  }
}