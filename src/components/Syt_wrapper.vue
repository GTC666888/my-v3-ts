<template>
  <div v-for="(item,index) in options" :key="index" class="wrapper-list">
    <div class="label" :style="{width:item.labelWidth+'px' || labelWidth+'px'}">
      {{item.label}} {{ item.symbol || symbol }}
    </div>
    <div class="content">
      <slot :name="item.slot" v-if="item.slot" class="wrapper-slot"></slot>
      <div v-else>
        {{ dataList[item.props] || '--'}}
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
  import {
    defineProps,
    ref,
    watch
  } from 'vue'
  const props = defineProps(['data','options','labelWidth','symbol'])
  const dataList = ref([])
  watch(() => props.data, (newVal: any) => {
    dataList.value = newVal;
  })

</script>
<style scoped lang='scss'>
  .wrapper-list {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5px;
    .label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #999;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .content {
      text-align: left;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #333;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
      height: 40px;
    }
    .wrapper-slot .content {
      flex: 1;
    }
  }
</style>