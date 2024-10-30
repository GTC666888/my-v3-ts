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
      <div>
        挂号规则
      </div>
      <div class="line">
        <div>
          <span class="label">预约周期：</span>
          <span>
            {{ registrationDetail?.bookingRule?.cycle }}天
          </span>
        </div>
        <div class="space">
          <span class="label">放号时间：</span>
          <span>
            {{ registrationDetail?.bookingRule?.releaseTime }}
          </span>
        </div>
        <div class="space">
          <span class="label">停挂时间：</span>
          <span>
            {{ registrationDetail?.bookingRule?.stopTime }}
          </span>
        </div>
      </div>
      <div class="line">
        <span class="label">
          退号时间：
        </span>
        <span>
          {{ registrationDetail?.bookingRule?.quitTime }}
        </span>
      </div>
      <div>
      </div>
      <div style="margin-top: 20px;">
        医院预约规则
      </div>
      <div class="rule-wrapper">
        <ol v-for="(rule,index) in registrationDetail?.bookingRule?.rule" :key="index">
          <li>
            <span>{{ index+1 }}.</span>{{ rule }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
  import {
    defineProps
  } from 'vue'
  defineProps(['registrationDetail'])
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
      .line {
        display: flex;
        margin-top: 8px;
        font-size: 12px;
        .space {
          margin-left: 60px;
        }
        .label {
          color: #999;
        }
      }
      .rule-wrapper {
        margin-top: 8px;
        font-size: 12px;
        color: #999;
        line-height: 20px;
        min-height: 20px;
        padding: 0;
        background: none;
      }
    }
  }
</style>