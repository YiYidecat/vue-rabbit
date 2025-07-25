import { defineStore } from "pinia";
import { ref } from "vue";
import {loginAPI} from "@/apis/login"
import { useCartStore } from "./carStore";
import {mergeCartAPI} from "@/apis/cart"
export const useUserStore = defineStore('user',() => {
  const userInfo = ref({})
  const cartStore = useCartStore()
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
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCartList()
  }
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