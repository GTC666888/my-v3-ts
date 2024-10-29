<template>
  <el-carousel height="350px" :motion-blur="true" indicator-position="outside">
    <el-carousel-item v-for="item in 2" :key="item">
      <img src="../../assets/images/web-banner1.b91d1a1.png" />
    </el-carousel-item>
  </el-carousel>
  <SytInput style="margin-top: 25px" width="800" />
  <div class="hospital-content">
    <el-row>
      <el-col :span="20">
        <HospitalClass/>
        <div class="hospital-tags">
          <HospitalTag />
        </div>
      </el-col>
      <el-col :span="4">
        <SetType />
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang='ts'>
  import {
    SytInput,
  } from '@/components'
  import HospitalTag from './children/hospitalTag.vue'
  import HospitalClass from './children/hospitalClass.vue'
  import SetType from './children/setType.vue'
  
</script>
<style scoped lang='scss'>
  .hospital-content {
    margin-top: 70px;
    padding-bottom: 40px;
  }
  .hospital-tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
</style>