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
      width: 1200px;
    }
  }
</style>