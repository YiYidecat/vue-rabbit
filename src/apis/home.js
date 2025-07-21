import httpInstance from "@/utils/http.js";

/**
 * 获取banner
 * @returns {*}
 */
export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}

/**
 * 获取新鲜好物
 * @returns {*}
 */
export function findNewAPI() {
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}

//获取产品列表的数据
export const getGoodAPI = () => {
  return httpInstance({
    url:"/home/goods"
  })
}