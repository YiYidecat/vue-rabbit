import request from '@/utils/http'
//购物车加入数据
export const insertCartAPI = (goods) => {
  const {skuId,count} = goods
  return  request({
    url:"/member/cart",
    method:"POST",
    data:{
      skuId,
      count
    }
  })
}

//获取购物车列表

export const findnewCartList = () => {
  return request({
    url:"/member/cart",
    method:"GET"
  })
}

export const deleteCartList = (ids) => {
  return request({
    url:"/member/cart",
    method:"DELETE",
    data:{
      ids
    }
  })
}
//合并购物车数据
export const mergeCartAPI = (data) => {
  return request({
    url:"/member/cart/merge",
    method:"POST",
    data
  })
}