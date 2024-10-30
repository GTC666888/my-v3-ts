<template>
  <div class="hospital_tag" v-infinite-scroll="load" v-for="item in hospitalList" :key="item.id" @click="tagClick(item)" :infinite-scroll-distance="50">
    <div class="tag-left">
      <div class="name">
        {{ item.hosname }}
      </div>
      <div class="bottom">
        <div class="leave">
          <SytSvg name="dengji" color="#999" style="margin-right: 5px"></SytSvg>
          {{ item.param.hostypeString }}
        </div>
        <div class="time">
          <SytSvg name="shizhong" color="#999" style="margin-right: 5px"></SytSvg>
          每天{{ item.bookingRule.releaseTime }}放号
        </div>
      </div>
    </div>
    <div class="tag-right">
      <img :src="`data:image/jepg;base64,${item.logoData}`" alt="">
    </div>
  </div>
</template>
<script setup lang='ts'>
  import { 
    ref,
    onMounted
  } from 'vue'
  import {
    getHospitalList
  } from '@/api/home'
  import type {
    HospitalResponesData,
    HospitalArr,
    Hospital
  } from '@/api/home/type'
  import emitter from '@/utils/mitt'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  let params = ref({
    page: 1,
    limit: 8,
  })
  const total = ref(0)
  const totalElements = ref(0)
  let hospitalList = ref<HospitalArr>([])
  const getHospitalListApi = () => {
    getHospitalList(params.value).then( (res:HospitalResponesData) => {
      hospitalList.value.push(...res.data.content)
      total.value = res.data.totalElements
      totalElements.value = res.data.totalElements
    })
  }
  onMounted(() => {
    getHospitalListApi()
  })
  emitter.on('hospitalClassChange',(value:any) => {
    let _value = JSON.parse(JSON.stringify(value))
    Object.keys(_value).forEach( f => {
      if([0,'0'].includes(_value[f])) {
        _value[f] = ''
      }
    })
    params.value = {
      ...params.value,
      ..._value
    }
    getHospitalListApi()
  })
  const tagClick = (item: Hospital) => {
    router.push(`/hospital/${item.hoscode}`)
  }
  const load = () => {
    console.log(123);
    if(hospitalList.value.length < totalElements.value) {
      getHospitalListApi()
    }
  }
</script>
<style scoped lang='scss'>
  .hospital_tag {
    width: 440px;
    height: 98px;
    margin-left: 10px;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    margin-top: 30px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: all .3s ease;
      .name {
        font-weight: 700;
      }
      img {
        transition: all .3s ease;
        transform: scale(1.1)
      }
    }
    .tag-left {
      .name {
        line-height: 42px;
        color: #333;
      }
      .bottom {
        font-size: 14px;
        color: #999;
        margin-top: 10px;
        display: flex;
        justify-content: flex-start;
        .leave {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .time {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-left: 50px;
        }
      }
    }
    .tag-right {
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
</style>