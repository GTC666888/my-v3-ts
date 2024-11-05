<template>
  <div class="registration">
    <Info :registrationDetail="hospitalStore?.hospitalDetail"></Info>
    <div class="title">
      选择科室
    </div>
    <Wrapper :departmentList="hospitalStore?.departmentDetail"/>
  </div>
</template>
<script setup lang='ts'>
  import useHospitalStore from '@/pinia/modules/hospital'
  const hospitalStore = useHospitalStore()
  import Info from './children/info.vue'
  import Wrapper from './children/wrapper.vue'
</script>
<style scoped lang='scss'>
.registration {
  .title {
    padding-top: 30px;
    padding-bottom: 20px;
    background: #fff;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
  }
}
</style>