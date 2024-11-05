<template>
  <li :class="['hospital-left-item',{isActive: route.meta.code === menu.code}]" v-for="menu in leftMenu" :key="menu.id">
    <span class="hospital-left-item-name" @click="menuClick(menu.url)">{{ menu.name }}</span>
  </li>
</template>
<script setup lang='ts'>
  import {
    defineProps,
    defineEmits
  } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  defineProps(['leftMenu'])
  const route = useRoute()
  const router = useRouter()
  const emit = defineEmits(['handleMenus'])
  const menuClick = (url: string) => {
    router.push(url)
    emit('handleMenus')
  }
</script>
<style scoped lang='scss'>
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
</style>