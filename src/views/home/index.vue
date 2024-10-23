<template>
  <el-carousel height="350px" :motion-blur="true" indicator-position="outside">
    <el-carousel-item v-for="item in 2" :key="item">
      <img src="../../assets/images/web-banner1.b91d1a1.png" />
    </el-carousel-item>
  </el-carousel>
  <SytInput style="margin-top: 25px" width="800" />
  <HomeContainer></HomeContainer>
</template>
<script setup lang='ts'>
  import {
    SytInput,
  } from '@/components'
  import HomeContainer from './children/honeContent.vue'
  
</script>
<style scoped lang='scss'>
  .home-container {
    margin-top: 70px;
  }
</style>