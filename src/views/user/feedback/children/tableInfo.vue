<template>
  <el-descriptions
    class="margin-top"
    :column="1"
    :size="size"
    border
  >
    <el-descriptions-item v-for="item in descriptionsList" :key="item.id" :label="item.label">
      {{ tableData?.[item.props] }}
    </el-descriptions-item>
  </el-descriptions>
</template>
<script setup lang='ts'>
  import {
    defineProps,
    ref
  } from 'vue'
  defineProps(['tableData'])
  
  const size = ref('default')
  const descriptionsList = [
    { id: 1, label: '用户姓名', props: 'nickName' },
    { id: 2, label: '证件类型', props: 'openid' },
    { id: 3, label: '证件号码', props: 'phone' },
  ]
</script>
<style scoped lang='scss'>
  
</style>