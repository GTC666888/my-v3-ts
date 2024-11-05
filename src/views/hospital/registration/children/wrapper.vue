<template>
  <div class="select-dept-wrapper">
    <div class="hospital-department">
      <p :class="['dep',{isActive: index === depcode}]" v-for="(dep,index) in departmentList" :key="index" @click="depClick(index)">
        {{ dep.depname }}
      </p>
    </div>
    <div class="sub-dept-container">
      <div :class="['sub-dept-wrapper',{isActive: index === depcode}]" :id="`dep${index}`" v-for="(item,index) in departmentList" :key="item.depCode">
        <div class="sub-title">
          <div class="selected" />
          {{ item.depname }}
        </div>
        <div class="sub-item-wrapper">
          <div class="sub-item" v-for="(depItem,depIndex) in item.children" :key="depIndex">
            <span @click="depItemClick(depItem)">
              {{ depItem.depname }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
  import {
    defineProps,
    ref,
  } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  defineProps(['departmentList'])
  const depcode = ref<number>(0)
  const depClick = (code: number) => {
    depcode.value = code
    scrollToSection(`dep${code}`)
  }
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    console.log(element,"element");
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const depItemClick = (item: any) => {
    router.push(`/hospital/schedule/${route.params.hosCode}/${item.depcode}`)
  }
</script>
<style scoped lang='scss'>
  .select-dept-wrapper {
    display: flex;
    justify-content: space-between;
    min-height: 100px;
    .hospital-department {
      height: 460px;
      position: -webkit-sticky;
      position: sticky;
      top: 82px;
      width: 170px;
      padding: 10px 0;
      background-color: #f4f9ff;
      overflow-y: auto;
      &:hover {
        &::-webkit-scrollbar-track {
          display: block;
        }
        &::-webkit-scrollbar-thumb {
          display: block;
        }
      }
      &::-webkit-scrollbar {
        width: 8px; // 滚动条的宽度
      }
      
      &::-webkit-scrollbar-track {
        display: none;
        background: rgba($color: #000000, $alpha: .1); // 滚动条轨道的颜色
        
      }
      &::-webkit-scrollbar-thumb {
        display: none;
        background: rgba($color: #333, $alpha: .2);; // 滚动条的颜色
        border-radius: 8px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #555; // 滚动条hover时的颜色
      }
      .dep {
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        cursor: pointer;
      }
      .isActive {
        background-color: #fff;
        color: #333;
        font-size: 16px;
        font-weight: 700;
      }
    }
    .sub-dept-container {
      margin-left: 50px;
      flex: 1;
      
      .sub-dept-wrapper {
        padding: 20px 0 20px 30px;
        border-radius: 4px;
        margin-top: 20px;
        &:first-child {
          margin-top: 0px;
        }
        .sub-title {
          display: flex;
          align-items: center;
          font-weight: 700;
          color: #333;
          font-size: 14px;
          .selected {
            width: 4px;
            border-radius: 2px;
            height: 14px;
            width: 4px;
            background: #4990f1;
            margin-right: 6px;
            border-radius: 2px;
          }
        }
        .sub-item-wrapper {
          display: flex;
          flex-wrap: wrap;
          margin-top: 10px;
          .sub-item {
            width: 230px;
            margin-top: 10px;
            padding-right: 30px;
            color: #666;
            font-size: 14px;
            cursor: pointer;
            &:hover {
              color: #4490f1;
            }
          }
        }
        &:hover {
          background-color: #fafafa;
        }
      }
      .isActive {
        background-color: #fafafa;
      }
    }
  }
</style>