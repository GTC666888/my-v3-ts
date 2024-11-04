<template>
  <div class="hospital-source">
    <div class="header-wrapper">
      <div>
        {{ bookingSchedule?.baseMap.hosname }}
      </div>
      <div class="wrapper-line" />
      <div>
        {{ bookingSchedule?.baseMap.bigname }}
      </div>
    </div>
    <div class="header-title">
      {{ bookingSchedule?.baseMap.depname }}
    </div>
    <div class="content-list">
      <div class="title-wrapper">
        {{ bookingSchedule?.baseMap.workDateString }}
      </div>
      <div class="wrapper-list">
        <div :class="['calendar-item',{'isActive':item.workDate === findParams.date}]" 
          v-for="item in bookingSchedule?.bookingScheduleList" 
          :key="item.workDate" 
          @click="bookingScheduleClick(item)">
          <div class="date-wrapper">
            <span>
              {{ item.workDate }}
            </span>
            <span class="week">
              {{ item.dayOfWeek }}
            </span>
          </div>
          <div class="status-wrapper">
            {{ setStatuName(item.status) }}
          </div>
        </div>
      </div>
      <el-pagination 
        class="syt-pagination" 
        layout="prev, pager, next" 
        :total="bookingSchedule?.total" 
        :page-size="params.limit" 
        @change="paginationChange"
        :current-page="params.page"   
      />
    </div>
    <div class="number-info">
      <div class="info-title">
        上午号源
      </div>
      <div class="info-list" v-for="item in FindScheduleList" :key="item.workDate">
        <div class="type">
          <div class="leavl">
            <span>
              {{ item.title }}
            </span>
            <span class="line"></span>
            <span>
              {{ item.docname }}
            </span>
          </div>
          <div class="section">
            {{ item.skill }}
          </div>
        </div>
        <div class="money-and-total">
          <div class="money">
            ￥{{ item.amount }}
          </div>
          <div class="total">
            剩余{{ item.availableNumber }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
  import {
    ref,
    onMounted
  } from 'vue'
  import {
    getBookingScheduleRule,
    getFindScheduleList
  } from '../../../api/hospital'
  import {
    useRoute
  } from 'vue-router'
  const route = useRoute()
  import type {
    GetBookingScheduleRuleParams,
    GetFindScheduleListParams,
    GetBookingScheduleRuleType,
    GetBookingScheduleRuleResponesData,
    GetFindScheduleListResponesData,
    GetFindScheduleListType,
    BookingScheduleList
  } from '../../../api/hospital/type'
  const params = ref<GetBookingScheduleRuleParams>({
    page: '1',
    limit: 7,
    hoscode: route.params.hosCode,
    depcode: route.params.depCode,
  })
  const bookingSchedule = ref<GetBookingScheduleRuleType>()
  const findParams = ref<GetFindScheduleListParams>({
    hoscode: route.params.hosCode,
    depcode: route.params.depCode,
    date: '',
  })
  const getBookingScheduleRuleApi = () => {
    getBookingScheduleRule(params.value).then((res:GetBookingScheduleRuleResponesData) => {
      bookingSchedule.value = res.data
      findParams.value.date = res.data.bookingScheduleList[0].workDate
      getFindScheduleListApi()
    })
  }
  const FindScheduleList = ref<GetFindScheduleListType[]>()
  const getFindScheduleListApi = async() => {
    await getFindScheduleList(findParams.value).then( (res:GetFindScheduleListResponesData) => {
      FindScheduleList.value = res.data
    })
  }
  onMounted(() => {
    getBookingScheduleRuleApi()
  })
  const setStatuName = (status: number) => {
    switch (status) {
      case 0:
        return '有号'
      default:
        return '状态待定'
    }
  }
  const bookingScheduleClick = (item: BookingScheduleList) => {
    findParams.value.date = item.workDate
    getFindScheduleListApi()
  }
  const paginationChange = (num: number) => {
    params.value.page = num.toString()
    getBookingScheduleRuleApi()
  }
</script>
<style scoped lang='scss'>
  .hospital-source {
    font-size: 14px;
    .header-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #333;
      font-size: 14px;
      .wrapper-line {
        width: 1px;
        height: 16px;
        background-color: #ccc;
        margin: 0 20px;
      }
    }
    .header-title {
      margin-top: 20px;
      letter-spacing: 1px;
      font-weight: 700;
      color: #333;
      font-size: 16px;
    }
    .content-list {
      margin-top: 30px;
      .title-wrapper {
        text-align: center;
        letter-spacing: 1px;
        color: #333;
        margin-bottom: 20px;
      }
      .wrapper-list {
        display: flex;
        .calendar-item {
          width: 124px;
          margin-left: 16px;
          font-size: 12px;
          color: #4990f1;
          cursor: pointer;
          .date-wrapper {
            padding: 10px 0;
            background-color: #e8f2ff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px 4px 0 0;
            .week {
              margin-left: 13px;
            }
          }
          .status-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 0;
            border: 1px solid #e8f2ff;
            border-top: 0;
            border-radius: 0 0 4px 4px;
          }
        }
        .isActive {
          font-weight: 700;
          .date-wrapper {
            background-color: #4990f1;
            color: #fff;
            font-weight: 16px;
          }
          .status-wrapper {
            color: #4990f1;
            border: 1px solid #4990f1;
          }
        }
      }
      .syt-pagination {
        margin-top: 30px;
        height: 42px;
        display: flex;
        justify-content: center;
      }
    }
    .number-info {
      margin-top: 30px;
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
      .info-list {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        height: 68px;
        .type {
          display: flex;
          flex-direction: column; /* 垂直方向排列 */
          justify-content: space-between; /* 上下分散 */
          font-weight: 700;
          .leavl {
            display: flex;
            .line {
              display: inline-block;
              width: 1px;
              height: 18px;
              background-color: #e0e0e0;
              margin: 0 10px;
            }
          }
          .section {
            letter-spacing: 1px;
            color: #999;
          }
        }
        .money-and-total {
          display: flex;
          align-items: center;
          .money {
            letter-spacing: 1px;
            color: #4990f1;
            font-weight: 700;
            margin-right: 20px;
          }
          .total {
            width: 140px;
            background-color: #4990f1;
            color: #fff;
            font-weight: 700;
            font-size: 16px;
            height: 44px;
            text-align: center;
            line-height: 44px;
            box-shadow: 0 10px 20px -10px rgba(73, 144, 241, .5);
            border-radius: 4px;
            cursor: pointer;
          }
        }
      }
    }
    
  }
</style>