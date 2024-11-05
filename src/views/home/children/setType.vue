<template>
  <SytTitle title="常见科室" :icon-show="true" />
  <ul class="often">
    <span class="often-item" v-for="(item,index) in oftenList" :key="index">
      {{ item.name }}
    </span>
  </ul>
  <SytTitle title="平台公告" svg-name="laba" :size="30" bgcolor="#F2F8FF" :icon-show="true" style="margin-top: 40px" />
  <ul class="platform">
    <li class="platform-item" v-for="(item,index) in platformList" :key="index">
      {{ item.title }}
    </li>
  </ul>
</template>
<script setup lang='ts'>
  import {
    ref
  } from 'vue'
  import {
    SytTitle
  } from '@/components'
  const oftenList = ref([
    { id: 1, name: '神经内科' },
    { id: 2, name: '消化内科' },
    { id: 3, name: '泌尿内科' },
    { id: 4, name: '心血管科' },
    { id: 5, name: '呼吸内科' },
    { id: 6, name: '肿瘤内科' },
    { id: 7, name: '神经外科' },
    { id: 8, name: '消化外科' },
  ])
  const platformList = [
    { id: 1, title: '关于延长北京大学国际医院放假的通知' },
    { id: 2, title: '北京中医药大学东方医院部分科室医生门诊医 ' },
    { id: 3, title: ' 武警总医院号源暂停更新通知 ' },
  ]
</script>
<style scoped lang='scss'>
  .often {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    line-height: 31px;
    margin-left: -15px;
    .often-item {
      width: 70px;
      margin-left: 30px;
      text-align: center;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      &:hover {
        color: #4490F1;
      }
    }
  }
  .platform {
    margin-top: 17px;
    .platform-item {
      font-size: 14px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      padding-left: 10px;
      margin-top: 14px;
      cursor: pointer;
      &:hover {
        color: #4490F1;
      }
      &::before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #4490F1;
        position: absolute;
        left: 0;
        top: calc(50% - 2px)  ;
      }
    }
  }
</style>