<template>
  <SytTitle title="医院" class="class-title"/>
  <div class="class-wapper">
    <div class="label">等级：</div>
    <ul class="list">
      <li class="item" v-for="(item, index) in levelList" :key="index" :class="{active: params.hostype == item.value}" @click="levelClick(item.value)">
        {{ item.name }}
      </li>
    </ul>
  </div>
  <div class="class-wapper">
    <div class="label">地区：</div>
    <ul class="list">
      <li class="item" v-for="(item,index) in areaList" :key="index" :class="{active: params.districtCode == item.id}" @click="areaClick(item.id)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script setup lang='ts'>
  import {
    ref,
    onMounted
  } from 'vue'
  import {
    SytTitle
  } from '@/components'
  import {
    getFindByDictCode
  } from '@/api/home'
  import type {
    LevelAndAreaCodeArr,
    LevelAndAreaCodeResponesData
  } from '@/api/home/type'
  import emitter from '@/utils/mitt'
  const levelList = ref<LevelAndAreaCodeArr>([])
  const areaList = ref<LevelAndAreaCodeArr>([])
  const params = ref({
    hostype: '0',
    districtCode: 0,
  })
  onMounted(async () => {
    await getFindByDictCode('Hostype').then((res:LevelAndAreaCodeResponesData) => {
      levelList.value = [{
        "id": 0,
        "createTime": "",
        "updateTime": "",
        "isDeleted": 0,
        "param": {},
        "parentId": 110100,
        "name": "全部",
        "value": "0",
        "dictCode": null,
        "hasChildren": false
      },...res.data]
      })
    await getFindByDictCode('Beijin').then((res :LevelAndAreaCodeResponesData) => {
      areaList.value = [{
        "id": 0,
        "createTime": "",
        "updateTime": "",
        "isDeleted": 0,
        "param": {},
        "parentId": 110100,
        "name": "全部",
        "value": "0",
        "dictCode": null,
        "hasChildren": false
      },...res.data]
    })
  })
  const levelClick = (value:string) => {
    params.value.hostype = value
    emitter.emit('hospitalClassChange', params.value)
  }
  const areaClick = (id:any) => {
    params.value.districtCode = id
    emitter.emit('hospitalClassChange', params.value)
  }
</script>
<style scoped lang='scss'>
  .class-title {
    margin-bottom: 30px;
  }
  .class-wapper {
    display: flex;
    justify-content: flex-start;
    .label {
      font-size: 14px;
      color: #999;
      width: 60px;
    }
    .list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex: 1;
      .item {
        margin: 0 26px 10px 0px;
        color: #666;
        cursor: pointer;
        font-size: 14px;
      }
      .active {
        color: #4490F1;
      }
    }
  }
</style>