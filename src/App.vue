<script setup>

</script>

<template>
  <header>
    <!-- 一级路由出口组件    -->
    <RouterView/>
    <div class="test">
      test scss
    </div>
  </header>
</template>

<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
