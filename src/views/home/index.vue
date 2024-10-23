<template>
  <el-carousel height="350px" :motion-blur="true" indicator-position="outside">
    <el-carousel-item v-for="item in 2" :key="item">
      <img src="../../assets/images/web-banner1.b91d1a1.png" />
    </el-carousel-item>
  </el-carousel>
  <SytInput style="margin-top: 25px" width="800" />
  <el-row class="home-container" :gutter="20" style="display: flex; justify-content: space-between;">
    <el-col :span="18"><div class="grid-content ep-bg-purple" />
      <SytTitle title="医院" style="margin-bottom: 30px" />
    </el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" />
      <SytTitle title="常见科室" :iconShow="true" @clickRight="clickRight"/>
    </el-col>
  </el-row>
</template>
<script setup lang='ts'>
  import {
    SytInput,
    SytTitle
  } from '@/components'
  const clickRight = () => {
    console.log('clickRight');
    
  }
</script>
<style scoped lang='scss'>
  .home-container {
    margin-top: 70px;
  }
</style>