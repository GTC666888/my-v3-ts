<template>
  <div class="syt-content">
    <div class="syt-content-wrapper">
      <slot />
    </div>
  </div>
</template>
<script setup lang='ts' name="SytContent">
</script>
<script lang="ts">
  export default {
    name: "SytContent",
  }
</script>
<style scoped lang='scss'>
  .syt-content {
    width: 100%;
    display: flex;
    justify-content: center;
    .syt-content-wrapper {
      box-sizing: border-box;
      width: 1200px;
      // overflow-y: auto;
      overflow: scroll; /* 保留滚动功能 */
      box-sizing: border-box;
      &::-webkit-scrollbar {
        display: none; /* 隐藏滚动条 (仅限 WebKit 内核) */
      }
    }
  }
</style>