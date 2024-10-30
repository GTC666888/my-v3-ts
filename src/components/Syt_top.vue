<template>
  <div class="syt-top">
    <div class="syt-content-top">
      <div class="syt-content_left" @click="useRouter().push('/')">
        <img src="../assets/images/logo.png" alt="">
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="syt-content_center">
        <SytInput width="300"/>
      </div>
      <div class="syt-content_right">
        <div class="help">
          帮助中心
        </div>
        <div class="login">
          登录/注册
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts' name="SytTop">
  import 
    SytInput
  from "./Syt_input.vue";
  import { useRouter } from "vue-router";
</script>
<script lang="ts">
  export default {
    name: "SytTop",
  }
</script>
<style lang="scss" scoped>
.syt-top {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  .syt-content-top {
    width: 1200px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    .syt-content_left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
      p {
        font-size: 20px;
        color: #4490F1;
        margin-left: 20px;
        cursor: pointer;
      }
    }
    .syt-content_right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #666;
      width: 166px;
      &>div:hover {
        cursor: pointer;
        color: #4490F1;
      }
    }
  }
}

</style>