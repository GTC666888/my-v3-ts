<template>
  <div class="hospital">
    <el-row>
      <el-col :span="4" class="hospital-left">
        <SytMenus :leftMenu="leftMenu" />
      </el-col>
      <el-col :span="20" class="hospital-right">
        <routerView />
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang='ts'>
  import { 
    useRoute,
  } from 'vue-router'
  import {
    onMounted,
    ref
  } from 'vue'
  import useHospitalStore from '@/pinia/modules/hospital'
  import {
    SytMenus
  } from '@/components'
  const hospitalStore = useHospitalStore()
  const leftMenu = ref([
    { id: 1, name: '预约挂号', code: 'registration',url:'/hospital' },
    { id: 2, name: '医院详情', code: 'detail', url:'/hospital/detail' },
    { id: 3, name: '预约须知', code: 'notice', url:'/hospital/notice' },
    { id: 4, name: '停诊信息', code: 'stop', url:'/hospital/stop' },
    { id: 5, name: '查询/取消', code: 'search', url:'/hospital/search' },
  ])
  const route = useRoute()
  onMounted(() => {
    if(route.params.hosCode) {
      hospitalStore.hosCode = route.params.hosCode
    }
    hospitalStore.getHospitalApi(hospitalStore.hosCode)
    hospitalStore.getDepartmentApi(hospitalStore.hosCode)
    leftMenu.value.forEach(menu => {
      menu.url = `${menu.url}/${hospitalStore.hosCode}`
    })
  })
  
</script>
<style scoped lang='scss'>
  .hospital {
    padding-bottom: 40px;
    .el-row {
      height: 100%;
      .hospital-left {
        height: 350px;
        margin-top: 14px;
        position: -webkit-sticky;
        position: sticky;
        top: 14px;
      }
      .hospital-right {
        padding-top: 38px;
      }
    }
  }
</style>