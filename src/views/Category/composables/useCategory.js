import { ref,onMounted } from "vue";
import { getCategoryAPI } from "@/apis/category";
import {useRoute,onBeforeRouteUpdate} from 'vue-router'


export function useCategory() {
  const categoryData = ref([]);

  //获取路由参数
  const $route = useRoute()
  //获取一级分类数据，router使用的是params形式传参，这里就使用params形式接受id，如果是query形式就使用query形式
  const getCategory = async (id = $route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result
  }
  onMounted(() => getCategory());

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  });
  return {
    categoryData
  }
}
