import { defineStore } from "pinia";
import { ref } from "vue";
import {loginAPI} from "@/apis/login"
import { useCartStore } from "./carStore";
import {mergeCartAPI} from "@/apis/cart"

export const useUserStore = defineStore('user',() => {
  //1.定义管理用户数据的state
    const userInfo = ref({})
  //2.定义获取接口获取用户数据的action
    const getUserInfo = async(Form) => {
    const res = await loginAPI(Form)
    userInfo.value = res.result
    mergeCartAPI(cartStore.cartList.map((item) => {
      return {
        skuId:item.skuId,
        selected:item.selected,
        count:item.count
      }
    }))
    cartStore.updateCartList()
  }
  const cartStore = useCartStore()
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCartList()
  }
    //3.以对象的格式把action return出去
  return {
    userInfo,
    getUserInfo,
    clearUserInfo,
  }
},
{
  persist:true,
}
)  