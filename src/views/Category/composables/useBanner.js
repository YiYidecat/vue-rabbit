//封装轮播图业务代码
import {ref,onMounted} from 'vue'
import { getBannerAPI } from "@/apis/home";

export function useBanner () {
  const bannerList = ref([])

  const getBanner = async () => {
    const res = await getBannerAPI({
      //默认为1，商品为2
      distributionSite: "2"
    })
    bannerList.value = res.result
  }
  onMounted(() => getBanner())
  return {
    bannerList
  }
}