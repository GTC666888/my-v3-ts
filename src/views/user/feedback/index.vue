<template>
  <div class="title">
    实名认证
  </div>
  <div class="content">
    <div class="tips">
      <el-icon><Warning /></el-icon>
      完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。
    </div>
    <div class="context-container">
      <TableInfo :tableData="userInfo" />
      <SetInfo></SetInfo>
    </div>
  </div>
</template>
<script setup lang='ts'>
  import {
    onMounted,
    ref
  } from 'vue'
  import {
    getUserInfo
  } from '@/api/user'
  import type {
    UserInfoType,
    UserInfoTypeResponesData
  } from '@/api/user/type'
  import {
    Warning
  } from '@element-plus/icons-vue'
  import TableInfo from './children/tableInfo.vue'
  import SetInfo from './children/setInfo.vue'
  const userInfo = ref<UserInfoType | {}>({})
  const getUserInfoApi = () => {
    getUserInfo().then( (res:UserInfoTypeResponesData) => {
      userInfo.value = res.data
    })
  }
  onMounted(() => {
    getUserInfoApi()
  })
</script>
<style scoped lang='scss'>
  .title {
    padding-bottom: 20px;
    background: #fff;
    letter-spacing: 1px;
    font-weight: 700;
    color: #333;
  }
  .content {
    .tips {
      margin: 40px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #999;
    }
    .context-container {
      margin-top: 80px;
      margin-left: 140px;
    }
  }
</style>