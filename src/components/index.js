import imageView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentPlugin = {
  install(app) {
    app.component('XtxImageView',imageView)
    app.component("XtxSku",Sku)
  }
}