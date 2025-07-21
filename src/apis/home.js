import httpInstance from "@/utils/http.js";

/**
 * 获取banner
 * @returns {*}
 */
export function getBannerAPI(params = {}) {
    //默认为1，商品为2
    const {distributionSite = '1'} = params
    return httpInstance({
        url: '/home/banner',
        params:{
            distributionSite
        }
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