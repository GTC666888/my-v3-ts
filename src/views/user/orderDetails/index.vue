<template>
  <div class="title">
    挂号详情
  </div>
  <div class="status-bar">
    <div class="left-wrapper">
      <div class="status-wrapper">
        <Syt-svg name="duigou" size="30" style="margin-right: 10px;"></Syt-svg>
        {{ orderInfo?.param.orderStatusString }}
      </div>
    </div>
    <div class="right-wrapper">
      <img src="//img.114yygh.com/static/web/code_order_detail.png" alt="">
      <div class="content-wrapper">
        <div>
          微信
          <Syt-svg name="weixin" color="#00c25f" size="20" style="margin-right: 10px;"></Syt-svg>
          关注“北京114预约挂号”
        </div>
        <div class="watch-wrapper">
          快速挂号，轻松就医
        </div>
      </div>
    </div>
  </div>
  <div class="info-title mt40 mb20">
    挂号信息
  </div>
  <div class="info-form">
    <SytWrapper :options="options" :data="orderInfo" symbol="：">
      <template #reserveDate>
        {{ orderInfo?.reserveDate }}
        <span style="margin-left: 5px;">
          上午
        </span>
      </template>
      <template #amount>
        <span style="color: #4990f1;font-weight: 700;">
          {{ orderInfo?.amount }}元
        </span>
      </template>
    </SytWrapper>
  </div>
  <div class="rule-wrapper mt40">
    <div class="rule-title">
      注意事项
    </div>
    <div>
      1、请确认就诊人信息是否准确，若填写错误将无法取号就诊，损失由本人承担；
      <br/>
      <span style="color: red">
        2、【取号】就诊当天需在2024-11-0809:00前在医院取号，未取号视为爽约，该号不退不换；
      </span>
      <br/>
      3、【退号】在2024-11-07 15:30前可在线退号 ，逾期将不可办理退号退费；
      <br/>
      4、北京114预约挂号支持自费患者使用身份证预约，同时支持北京市医保患者使用北京社保卡在平台预约挂号。请于就诊当日，携带预约挂号所使用的有效身份证件到院取号；
      <br/>
      5、请注意北京市医保患者在住院期间不能使用社保卡在门诊取号。
    </div>
  </div>
  <div class="bottom-wrapper mt60" v-if="orderInfo?.orderStatus !== -1">
    <el-button plain @click="handleClick('cancel')">取消预约</el-button>
    <el-button type="primary" plain @click="handleClick('pay')" v-if="orderInfo?.orderStatus !== 1">支付</el-button>
  </div>
  <SytPay ref="sytPay"></SytPay>
</template>
<script setup lang='ts'>
  import {
    onMounted,
    computed,
    ref,
  } from 'vue'
  import {
    getOrderDetails,
    cancelOrder
  } from '@/api/user'
  import type {
    OrderDetailsType,
    OrderDetailsResponesData,
    OrderCancelResponesData
  } from '@/api/user/type'
  import {
    useRoute
  } from 'vue-router'
  import {
    SytWrapper,
    SytPay
  } from '@/components'
  import { ElMessageBox } from 'element-plus'
  const sytPay = ref()
  const route = useRoute()
  const getOrderDetailsApi = (orderId: string) => {
    getOrderDetails(orderId).then( (res :OrderDetailsResponesData) => {
      orderInfo.value = res.data
    })
  }
  const orderInfo = ref<OrderDetailsType>()
  const options = [
    { id: '1', label: '就诊人信息', props: 'patientName' },
    { id: '2', label: '就诊日期', props: 'reserveDate', slot: 'reserveDate' },
    { id: '3', label: '就诊医院', props: 'hosname' },
    { id: '4', label: '就诊科室', props: 'depname' },
    { id: '5', label: '医生职称', props: 'title' },
    { id: '6', label: '医事服务费', props: 'amount', slot: 'amount' },
    { id: '7', label: '挂号订单', props: 'outTradeNo' },
    { id: '8', label: '挂号时间', props: 'createTime' },
  ]
  onMounted( async () => {
    await getOrderDetailsApi(orderId.value)
  })
  const orderId = computed(() => route.params.orderId as string)

  const cancelOrderApi = () => {
    
  ElMessageBox.confirm(
    '确定取消预约吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
      cancelOrder(orderId.value).then( (res: OrderCancelResponesData) => {
        if(res.data) {
          getOrderDetailsApi(orderId.value)
        }else {
          console.log('取消失败')
        }
      })
    })
  }
  const handleClick = (type: string) => {
    if (type === 'cancel') {
      cancelOrderApi()
    }else if (type === 'pay') {
      console.log(sytPay.value?.interViewData(123));
      
    }
  }
</script>
<style scoped lang='scss'>
  .title {
    padding-bottom: 20px;
    background: #fff;
    letter-spacing: 1px;
    font-weight: 700;
    color: #333;
  }
  .status-bar {
    margin-top: 20px;
    background-color: #f4f9ff;
    width: 1000px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    .left-wrapper {
      display: flex;
      justify-content: space-between;
      width: 636px;
      padding-left: 20px;
      .status-wrapper {
        color: #4490f1;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
      }
    }
    .right-wrapper {
      flex: 1;
      padding-left: 40px;
      display: flex;
      align-items: center;
      color: #999;
      font-size: 14px;
      >img {
        width: 61px;
        height: 61px;
      }
      .content-wrapper {
        margin-top: -30px;
        margin-left: 12px;
        .watch-wrapper {
          margin-top: 3px;
        }
      }
    }
  }
  .info-title {
    color: #999;
    font-size: 14px;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      width: 4px;
      height: 14px;
      background-color: #4990f1;
      margin-right: 10px;
      border-radius: 2px;
    }
  }
  .info-form {
    margin: 40px 0 0 140px;
  }
  .rule-wrapper {
    background-color: #fafafa;
    padding: 30px;
    font-size: 14px;
    color: #666;
    .rule-title {
      color: #333;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }
  .bottom-wrapper {
    display: flex;
    justify-content: space-around;
    button {
      width: 140px;
      height: 44px;
    }
  }
</style>