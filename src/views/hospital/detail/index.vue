<template>
  <div class="common-header">
    <div class="title">
      {{ registrationDetail?.hospital?.hosname }} 
    </div>
    <SytSvg name="dengji" color="#999" style="margin-right: 5px"></SytSvg>
    <div>
      {{ registrationDetail?.hospital?.param?.hostypeString }}
    </div>
  </div>
  <div class="info-wrapper">
    <img :src="`data:image/jepg;base64,${registrationDetail?.hospital?.logoData}`" alt="">
    <div class="content-wrapper">
      <el-icon><Position /></el-icon>
      <p>
        {{ registrationDetail?.hospital?.route }}
      </p>
    </div>
  </div>
  <div class="son-title">
    医院介绍
  </div>
  <div class="detail-content">
    <p>
      {{ registrationDetail?.hospital?.intro }}
    </p>
  </div>
</template>
<script setup lang='ts'>
  import {
    defineProps,
    computed
  } from 'vue'
  import {
    Position
  } from '@element-plus/icons-vue'
  defineProps(['registrationDetail'])
  import useHospitalStore from '@/pinia/modules/hospital'
  const hospitalStore = useHospitalStore()
  const registrationDetail = computed(() => hospitalStore.hospitalDetail)
</script>
<style scoped lang='scss'>
  .common-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .title {
      color: #333;
      font-size: 20px;
      font-weight: 700;
      margin-right: 15px;
    }
  }
  .info-wrapper {
    display: flex;
    margin-top: 30px;
    padding-top: 0;
    padding-left: 0;
    width: 100%;
    flex-direction: inherit;
    > img {
      width: 80px;
      height: 80px;
    }
    .content-wrapper {
      flex: 1;
      color: #333;
      margin-left: 30px;
      display: flex;
      .el-icon {
        margin-top: 3px;
        margin-right: 10px;
        font-size: 18px;
      }
      >p {
        font-size: 14px;
        color: #333;
      }
    }
  }
  .son-title {
    margin-top: 40px;
    color: #333;
  }
  .detail-content {
    margin-top: 40px;
    color: #666;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 1px;
    >p {
      text-indent: 2em;
    margin: 0;
    }
  }
</style>