<template>
  <div class="syt-input">
    <div class="syt-input-content" :style="{width: `${props.width}px`}">
      <el-icon class="syt-input-content_left" size="20"><Search /></el-icon>
      <el-select
        class="syt-input-content_center"
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入医院名称"
        :remote-method="remoteMethod"
        :loading="loading"
        style="width: 240px"
        :fit-input-width="true"
        popper-class="syt-input-_popper"
        @change="changeHandle"
      >
        <el-option
          v-for="item in options"
          :key="item.hoscode"
          :label="item.hosname"
          :value="item.hoscode"
        />
      </el-select>
      <div class="syt-input-content_right">
        <span>
          搜索
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
  import {
    Search
  } from '@element-plus/icons-vue'
  import { 
    ref,
    defineProps,
  } from 'vue'
  import {
    getFindByHosName
  } from '@/api/home'
  import type {
    HospitalArr,
    hospitalListResponesData
  } from '@/api/home/type'
  const value = ref('')
  const options = ref<HospitalArr>([])
  const loading = ref(false)
  const remoteMethod = (query: string) => {
    getFindByHosName(query).then( (res:hospitalListResponesData) => {
      options.value = res.data
    })
  }
  const changeHandle = (val: string) => {
    console.log(val);
    
  }
  const props = defineProps(['width'])
</script>
<style scoped lang='scss'>
  .syt-input {
    width: 100%;
    display: flex;
    justify-content: center;
    .syt-input-content {
      height: 60px;
      border-bottom: 1px solid #eee;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      .syt-input-content_left {
        width: 48px;
        text-align: center;
      }
      .syt-input-content_center {
        flex: 1;
        height: 32px;
        ::v-deep>.el-select__wrapper {
          width: 100%;
          box-shadow: none;
        }
      }
      .syt-input-content_right {
        width: 58px;
        text-align: center;
        line-height: 60px;
        font-size: 18px;
        color: #4490f1;
        >span {
          cursor: pointer;
        }
      }
    }
  }
</style>