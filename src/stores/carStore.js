import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { insertCartAPI,findnewCartList,deleteCartList } from "@/apis/cart";
export const useCartStore = defineStore("cart",() => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  const cartList = ref([])
  const addCart = async(goods) => {
    // 登录后加入购物车 
    if(isLogin.value) {
      await insertCartAPI(goods)
      const res = await findnewCartList()  
      cartList.value = res.result
    }else {
      const item = cartList.value.find(item =>goods.skuId === item.skuId)
      if(item) {
        item.count+=goods.count
      }else {
        cartList.value.push(goods)
      }
      console.log(666);
      
    }
  }
  const delCart = async(skuId) => {
    if(isLogin.value) {
      await deleteCartList([skuId])
      const res = await findnewCartList()
      cartList.value = res.result
    }else {
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    cartList.value.splice(idx,1)
    }
    
  }
  const allCount = computed(() => {
    return  cartList.value.reduce((total,item) => {
        return total + item.count
      },0)
  })
  const allPrice = computed(() => {
    return cartList.value.reduce((total,item) => {
      return total + item.count * item.price
    },0)
  })
  const singleCheck = (skuId) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    if(item) {
      item.selected = !item.selected
    }
  }
  const allSelected = computed(() => cartList.value.every((item) => item.selected))
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }
  const selectedCount = computed(() => {
    return cartList.value.filter((item) => item.selected).length
  })
  const selectedPrice = computed(() => {
    return cartList.value.filter(item => item.selected).reduce((total,item) => {
      return total + item.count * item.price 
    },0)
  })
  const clearCartList = () => {
    cartList.value = []
  }
  const updateCartList = async() => {
    const res = await findnewCartList()
    cartList.value = res.result
  }
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    allSelected,
    allCheck,
    selectedCount,
    selectedPrice,
    clearCartList,
    updateCartList,
  }
},
{
  persist:true
})