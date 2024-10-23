<template>
  <div class="syt-title">
    <div class="syt-title-left">
      <SytSvg v-if="svgName" :name="svgName"></SytSvg>
      {{ title }}
    </div>
    <div class="syt-title-right" v-if="!$slots.right && iconShow" @click="$emit('clickRight')">
      <span class="syt-title-right_all">
        全部
      </span>
      <el-icon class="syt-title-right_icon"><ArrowRightBold /></el-icon>
    </div>
    <slot name="right"></slot>
  </div>
</template>
<script setup lang='ts'>
   import { defineProps } from 'vue'
   import { ArrowRightBold } from '@element-plus/icons-vue'
   defineProps(['title','iconShow','svgName'])
</script>
<style scoped lang='scss'>
  .syt-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .syt-title-left {
       font-size: 16px;
       color: #333;
       font-weight: 700;
    }
    .syt-title-right {
       display: flex;
       align-items: center;
       font-size: 14px;
       cursor: pointer;
       .syt-title-right_all {
        color: #999;
       }
       .syt-title-right_icon {
        color: #4490f1;
       }
    }
  }
</style>