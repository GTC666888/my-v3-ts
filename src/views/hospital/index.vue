<template>
  <div class="hospital">
    <el-row>
      <el-col :span="4" class="hospital-left">
        <li :class="['hospital-left-item',{isActive: route.meta.code === menu.code}]" v-for="menu in leftMenu" :key="menu.id">
          <span class="hospital-left-item-name" @click="menuClick(menu.url)">{{ menu.name }}</span>
        </li>
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
    useRouter
  } from 'vue-router'
  import {
    onMounted,
  } from 'vue'
  import useHospitalStore from '@/pinia/modules/hospital'
  const hospitalStore = useHospitalStore()
  const leftMenu = [
    { id: 1, name: '预约挂号', code: 'registration',url:'/hospital' },
    { id: 2, name: '医院详情', code: 'detail', url:'/hospital/detail' },
    { id: 3, name: '预约须知', code: 'notice', url:'/hospital/notice' },
    { id: 4, name: '停诊信息', code: 'stop', url:'/hospital/stop' },
    { id: 5, name: '查询/取消', code: 'search', url:'/hospital/search' },
  ]
  const route = useRoute()
  const router = useRouter()
  
  const menuClick = (url:string) => {
    router.push(`${url}/${hospitalStore.hosCode}`)
  }
  onMounted(() => {
    if(route.params.hosCode) {
      hospitalStore.hosCode = route.params.hosCode
    }
    console.log(hospitalStore.hosCode,"hospitalStore.hosCode");
    
    hospitalStore.getHospitalApi(hospitalStore.hosCode)
    hospitalStore.getDepartmentApi(hospitalStore.hosCode)
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
      .hospital-left-item {
        display: flex;
        align-items: center;
        width: 200px;
        height: 70px;
        position: relative;
        padding-left: 20px;
        .hospital-left-item-name {
          cursor: pointer;
          font-size: 14px;
          color: #333;
          &:hover {
            color: #4490F1;
          }
        }
      }
      .isActive {
        position: relative;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          width: 10px;
          height: 10px;
          z-index: 1;
          background: #4490f1
        }
        .hospital-left-item-name {
          color: #4490F1;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
    .hospital-right {
      padding-top: 38px;
    }
    }
    
  }
</style>