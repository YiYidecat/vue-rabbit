import imageView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'

//把components中的所有组件进行全局化注册,通过插件的方式
export const componentPlugin = {
  install(app) {
    // 全局注册组件
    // app.component('组件名字', 组件配置对象) // 旧的注册方式
    app.component('XtxImageView',imageView)
    app.component("XtxSku",Sku)
  }
}