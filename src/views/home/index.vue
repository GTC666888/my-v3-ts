<template>
  <el-carousel height="350px" :motion-blur="true" indicator-position="outside">
    <el-carousel-item v-for="item in 2" :key="item">
      <img src="../../assets/images/web-banner1.b91d1a1.png" />
    </el-carousel-item>
  </el-carousel>
  <SytInput style="margin-top: 25px" width="800" />
</template>
<script setup lang='ts'>
  import {
    SytInput
  } from '@/components'
</script>
<style scoped lang='scss'>
  
</style>