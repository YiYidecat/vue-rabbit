<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
// import HomePanel from "@/views/Home/components/HomePanel.vue";


</script>

<template>
  <div class="container">
    <HomeCategory/>
    <HomeBanner/>
  </div>
  <HomeNew/>
  <HomeHot/>
  <homeProduct/>
   <!-- 测试面板组件
  <homePanel title="新鲜毫无" sub-title="sdj">
    <div>大家看法</div>
  </homePanel>
  <homePanel title="啊是第几发货尽快" sub-title="dshj">
    <div>大家</div>
  </homePanel> -->
</template>