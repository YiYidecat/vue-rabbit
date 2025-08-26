//封装购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { insertCartAPI,findnewCartList,deleteCartList } from "@/apis/cart";

// 使用Pinia返回购物车信息
export const useCartStore = defineStore("cart",() => {

  // 引入用户信息store
  // 用于判断用户是否登录
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)

  // 定义购物车列表——state
  const cartList = ref([])

  // 定义添加购物车的state——action
  const addCart = async(goods) => {
    // 登录后加入购物车 
    if(isLogin.value) {
      await insertCartAPI(goods) //接受购物车商品数据
      const res = await findnewCartList()  //获取购物车列表
      cartList.value = res.result //覆盖购物车列表
    }else {
      // 未登录加入购物车
      // 先判断购物车中是否已经有该商品,如果有则数量+1,如果没有则直接加入购物车
      const item = cartList.value.find(item =>goods.skuId === item.skuId)
      if(item) {
        item.count+=goods.count
      }else {
        cartList.value.push(goods)
      }
      console.log(666);
    }
  }

  // 定义删除购物车的state——action
  const delCart = async(skuId) => {
    if(isLogin.value) {
      await deleteCartList([skuId])
      updateCartList()
    }else {
    // 未登录删除购物车
    // 先判断购物车中是否有该商品,如果有则删除
    // 如果没有则不做任何操作
    if(!cartList.value.some(item => item.skuId === skuId)) return
    // 找到该商品在购物车中的索引
    // splice方法删除该商品
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    cartList.value.splice(idx,1)
    }
    
  }

  //计算属性——购物车商品总数量
  const allCount = computed(() => {
    return  cartList.value.reduce((total,item) => {return total + item.count},0)
  })
  //计算属性——购物车商品总价格
  // 计算总价时需要遍历购物车列表，计算每个商品的价格
  // 商品价格 = 商品数量 * 商品单价
  // 最后将所有商品的价格相加
  const allPrice = computed(() => {
    //reduce方法遍历购物车列表，将数组里的每个商品的价格累加
    return cartList.value.reduce((total,item) => {return total + item.count * item.price},0)
  })

  // 定义单选框的state——action
  const singleCheck = (skuId) => {
    // 如果购物车列表中有该商品，则将该商品的选中状态取反
    const item = cartList.value.find((item) => item.skuId === skuId)
    if(item) {
      item.selected = !item.selected
    }
  }

  // 定义全选框的state——action
  const allSelected = computed(() => cartList.value.every((item) => item.selected))
  // 将列表中的每个商品的选中状态设置为全选框的选中状态
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  //已选择商品数量
  const selectedCount = computed(() => {
    //filter方法过滤出已选择的商品，再计算长度
    return cartList.value.filter((item) => item.selected).length
  })
  //已选择商品总价
  const selectedPrice = computed(() => {
    return cartList.value.filter(item => item.selected).reduce((total,item) => {
      return total + item.count * item.price 
    },0)
  })


  // 清空购物车
  const clearCartList = () => {
    cartList.value = []
  }

  // 定义更新购物车的state——action
  const updateCartList = async() => {
    const res = await findnewCartList()
    cartList.value = res.result
  }

  // 返回需要暴露的state和action
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