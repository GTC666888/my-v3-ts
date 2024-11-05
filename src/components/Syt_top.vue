<template>
  <div class="syt-top">
    <div class="syt-content-top">
      <div class="syt-content_left" @click="router.push('/')">
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
        <div class="login" @click="useStore.loginVisible = true" v-if="!userInfo.token">
          登录/注册
        </div>
        <el-dropdown v-else>
          <span class="el-dropdown-link">
            {{ userInfo.name || '--' }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in dropdownList" :key="item.id" :divided="item.divided" @click="handleClick(item.id)">{{ item.name }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts' name="SytTop">
  import 
    SytInput
  from "./Syt_input.vue";
  import { useRouter } from "vue-router";
  
  import {
    useUseStore
  } from '@/pinia/modules/useStore'
  import { computed, ref } from 'vue'
  import {
    ArrowDown
  } from '@element-plus/icons-vue'
  const router = useRouter()
  const useStore = useUseStore()
  const userInfo = computed(() => useStore.userInfo )
  const dropdownList = ref([
    { id: 1, name: '实名认证' },
    { id: 2, name: '挂号订单' },
    { id: 3, name: '就诊人管理' },
    { id: 4, name: '退出登录', divided: true },
  ])
  const handleClick = (id: number) => {
    console.log(id);
    switch(id) {
      case 1:
        // useRouter().push('/realName')
        break;
      case 2:
        // useRouter().push('/order')
        break;
      case 3:
        // useRouter().push('/doctor')
        break;
      case 4:
        localStorage.removeItem('userInfo')
        location.reload()
        break;
    }
  }
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
      width: 200px;
      &>div:hover {
        cursor: pointer;
        color: #4490F1;
      }
    }
  }
}

</style>