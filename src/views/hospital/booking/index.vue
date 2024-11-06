<template>
  <div class="title">
    确认挂号信息
  </div>
  <div class="syt-title_line mt60 col999">
    选择就诊人：
  </div>
  <div class="patient-wrapper mt30">
    <div class="patient-list">
      <div 
        :class="['patient-item',{isActive:item.certificatesNo === certificatesNo}]" 
        v-for="(item,index) in useStore.findAllList" 
        :key="index" 
        @click="patientClick(item.certificatesNo)"  
      >
        <div class="item-left">
          <p class="item-name fz14 col333">
            {{item.name}}
          </p>
          <p class="item-certificatesNo fz12 col999">
            {{ item.certificatesNo }}
          </p>
        </div>
        <div class="item-right">
          <el-icon><Select /></el-icon>
        </div>
      </div>
    </div>
    <div class="add-patient">
      <el-icon><Plus /></el-icon>
      添加就诊人
    </div>
  </div>
  <div class="syt-title_line mt60">
    <span class="col999">
      选择就诊卡：
    </span>
    <div class="warning-color">
      <el-icon><Warning /></el-icon>
      <span>
        如您持社保卡就诊，请务必选择医保预约挂号，以保证正常医保报销
      </span>
    </div>
  </div>
  <div class="patient-card mt30">
    <div class="patient-card-header col333">
      {{ setFind('name')  }}
      {{ setFind('certificatesNo') }}
      居民{{ setFind('certificatesType') }}
    </div>
    <div class="patient-card-body">
      <div class="patient-card">
        <div class="card-1">
          自费
        </div>
        <div class="card-2">
          {{ setFind('certificatesNo') }}
        </div>
        <div class="card-2">
          居民{{ setFind('certificatesType') }}
        </div>
      </div>
    </div>
  </div>
  <div class="syt-title_line mt60 col999">
    挂号信息
  </div>
  <div class="content-wrapper">
    <SytWrapper :options="options" :data="schedule" symbol="：">
      <template #workDate>
        <div>
          {{ schedule?.workDate }}
          {{ schedule?.param.dayOfWeek }}
          {{ schedule?.workTime === 0? '上午': '下午' }}
        </div>
      </template>
      <template #hosname>
        {{ schedule?.param.hosname }}
      </template>
      <template #depname>
        {{ schedule?.param.hosname }}
      </template>
      <template #amount>
        <span style="color: #4490f1;font-weight: bold;">
          <span>
            {{ '￥' + schedule?.amount || '--' }}
          </span>
        </span>
      </template>
    </SytWrapper>
  </div>
  <div class="syt-title_line mt60 col999">
    用户信息
  </div>
  <div class="content-wrapper">
    <SytWrapper :options="numOptions" :data="(useStore.findAllList as GetFindAllType[])?.find(
      (f: GetFindAllType) => f.certificatesNo === (certificatesNo)
    )" symbol="：">
    </SytWrapper>
  </div>
  <div class="botton-wrapper">
    <div class="syt-button">
      确认挂号
    </div>
  </div>
</template>
<script setup lang='ts'>
  import {
    onMounted,
    computed,
    ref
  } from 'vue'
  import {
    Warning,
    Select,
    Plus
  } from '@element-plus/icons-vue'
  import {
    getSchedule,
  } from '@/api/hospital'
  import {
    useRoute
  } from 'vue-router'
  import type {
    GetScheduleResponesData,
    GetScheduleType,
    GetFindAllType
  } from '@/api/hospital/type'
  import {
    SytWrapper
  } from '@/components'
  import {
    useUseStore
  } from '@/pinia/modules/useStore'
  const useStore = useUseStore()
  const route = useRoute()
  const scheduleId = computed(() => route.params.scheduleId)
  const schedule = ref<GetScheduleType>()
  const getScheduleApi = async () => {
    await getSchedule(scheduleId.value).then( (res: GetScheduleResponesData) => {
      schedule.value = res.data
    })
  }

  onMounted( async () => {
    await getScheduleApi()
    await useStore.getFindAllApi()
    certificatesNo.value = await useStore.findAllList&&useStore.findAllList[0].certificatesNo
  })

  const certificatesNo = ref<string>()

  const patientClick = (no: string) => {
    certificatesNo.value = no
  }

  const options = [
    { label: '就诊日期', props: 'workDate', labelWidth: '100px', slot: 'workDate' },
    { label: '就诊医院', props: 'hosname', labelWidth: '100px', slot: 'hosname' },
    { label: '就诊科室', props: 'depname', labelWidth: '100px', slot: 'depname' },
    { label: '医生姓名', props: 'docname', labelWidth: '100px' },
    { label: '医生职称', props: 'title', labelWidth: '100px' },
    { label: '医生专长', props: 'skill', labelWidth: '100px' },
    { label: '医事服务费', props: 'amount', labelWidth: '100px', slot: 'amount' },
  ]
  const numOptions = [
    { label: '就诊人手机号', props: 'phone', labelWidth: '100px' },
  ]
  const setFind = (type: keyof GetFindAllType) => {
    return (useStore.findAllList as GetFindAllType[])?.find(
      (f: GetFindAllType) => f.certificatesNo === (certificatesNo.value)
    )?.[type] || ' '
  }
</script>
<style scoped lang='scss'>
  @import url('./index.scss');
</style>