<template>
  <div class="hospital">
    <el-row>
      <el-col :span="4" class="hospital-left">
        <SytMenus :leftMenu="leftMenu" />
      </el-col>
      <el-col :span="20" class="hospital-right">
        <routerView />
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang='ts'>
  import {
    ref
  } from 'vue'
  import {
    SytMenus
  } from '@/components'
  const leftMenu = ref([
    { id: 1, name: '实名认证', code: 'feedback',url:'/user/feedback' },
    { id: 2, name: '挂号订单', code: 'order', url:'/user/order' },
    { id: 3, name: '就诊人管理', code: 'patient', url:'/user/patient' },
    { id: 4, name: '修改账号信息', code: 'setAccount', url:'/user/setAccount' },
    { id: 5, name: '意见反馈', code: 'realName', url:'/user/realName' },
  ])
  
</script>
<style scoped lang='scss'>
  .hospital {
    padding-bottom: 40px;
    .el-row {
      height: 100%;
      .hospital-left {
        height: 350px;
        margin-top: 14px;
        position: -webkit-sticky;
        position: sticky;
        top: 14px;
      }
      .hospital-right {
        padding-top: 38px;
      }
    }
  }
</style>