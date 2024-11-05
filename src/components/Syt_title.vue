<template>
  <div class="syt-title">
    <div class="syt-title-left">
      <div class="syt-title-left_icon" :style="{'background-color': bgcolor}" v-if="svgName">
        <SytSvg :name="svgName" :size="size"></SytSvg>
      </div>
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
   defineProps(['title','iconShow','svgName','size','bgcolor'])
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
       display: flex;
       justify-content: center;
       align-items: center;
       .syt-title-left_icon {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
       }
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