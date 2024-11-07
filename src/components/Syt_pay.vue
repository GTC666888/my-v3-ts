<template>
  <Teleport to="body" v-if="pauVisible">
    <div  class="pay-dialog" @click="cancelPay">
      <div class="dialog-content" @click.stop="() => {console.log(1321321321);}">
        <div class="header">
          <el-icon @click="cancelPay"><Close /></el-icon>
        </div>
        <div class="content">
          <qrcode :value="qrCodeValue" :size="220" />
          <div class="text">
            请使用微信扫一扫
            <br/>
            扫描二维码支付
          </div>
        </div>
      </div>
    </div>
  </Teleport>>
</template>
<script setup lang='ts'>
  import {
    Close
  } from '@element-plus/icons-vue'
  import {
    ref,
    defineExpose,
    computed
  } from 'vue'
  import Qrcode from 'qrcode.vue';
  import {
    createNative
  } from '@/api/user'
  import {
    useRoute
  } from 'vue-router'
  import { ElMessage } from 'element-plus'
  const route = useRoute()
  const orderId = computed(() => route.params.orderId)
  const pauVisible = ref(false)
  const interViewData =  async() => {
    num.value = 0
    await createNativeApi()
    pauVisible.value = await true
  }
  const cancelPay = () => {
    pauVisible.value = false
  }
  const qrCodeValue = ref('')
  const num = ref(0)
  const createNativeApi = async() => {
    await createNative(orderId.value).then( res => {
      qrCodeValue.value = res.data.codeUrl;
      if(num.value > 3) {
        ElMessage({
          message: '支付成功！',
          type: 'success',
        })
        cancelPay()
        return
      }
      if( res.data.totalFee === 100 ) {
        setTimeout(() => {
          createNativeApi()
          num.value ++
        },1000)
      }
    })
  } 
  defineExpose({
    interViewData,
  })
</script>
<style scoped lang='scss'>
  .pay-dialog {
    z-index: 9999;
    background-color: rgba($color: #000000, $alpha: 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 2s;
    .dialog-content {
      width: 500px;
      height: 420px;
      background-color: #f7fbff;
      position: relative;
      top: -150px;
      border-radius: 5px;
      .header {
        height: 40px;
        width: 100%;
        background-color: #E8F2FF;
        position: relative;
        .el-icon {
          cursor: pointer;
          position: absolute;
          right: 30px;
          bottom: 0;
          font-size: 18px;
          color: #666;
        }
      }
      .content {
        height: 350px;
        margin: 0 30px 30px 30px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
        .text {
          text-align: center; 
          line-height: 25px; 
          margin-top: 10px;
        }
      }
    }
  }
</style>