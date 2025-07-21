import httpInstance from "@/utils/http";
//获取一级分类列表数据
export const getCategoryAPI = (id) => {
  return httpInstance({
    url:"/category",
    params:{
      id
    }
  })
}

//获取subcategory页面二级分类面包屑的数据

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url:"/category/sub/filter",
    params:{
      id
    }
  })
}

//获取二级分类列表数据
export const getSubCategoryAPI = (data) => {
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}