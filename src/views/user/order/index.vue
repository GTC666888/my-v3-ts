<template>
  <div class="title">
    挂号订单
  </div>
  <div class="form">
    <el-form-item label="就诊人：">
      <el-select
        v-model="params.patientId"
        placeholder="选择就诊人"
        size="large"
        style="width: 240px"
      >
        <el-option
          v-for="item in useStore.findAllList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="订单状态：" class="order-status">
      <el-select
        v-model="params.orderStatus"
        placeholder="全部"
        size="large"
        style="width: 240px"
      >
        <el-option
          v-for="item in useStore.statusList"
          :key="item.status"
          :label="item.comment"
          :value="item.status"
        />
      </el-select>
    </el-form-item>
    <div class="btn-text" @click="search">
      查询
    </div>
  </div>
  <el-table 
    :data="tableData" 
    style="width: 100%"
    :row-style="{
      color: '#333',
      padding: '0 10px',
      fontSize: '12px'
    }"
  >
    <el-table-column 
      :prop="item.props" 
      :label="item.label" 
      v-for="item in columnList" 
      :key="item.id"
      :width="item.width"
    >
      <template v-if="item.slot" #default="scope">
        <div>
          {{ scope.row.param.orderStatusString }}
        </div>
      </template>
    </el-table-column>
    <el-table-column 
      label="操作"
    >
      <template #default="scope">
        <el-button type="text" @click="handleDetail(scope.row)">详情</el-button>
      </template>
    </el-table-column>>
  </el-table>
  <div class="pagination">
    <el-pagination layout="prev, pager, next" :total="paginationOptions.total" @change="handlePageChange" />
  </div>
</template>
<script setup lang='ts'>
  import {
    onMounted,
    ref,
    reactive
  } from 'vue'
  import {
    useUseStore
  } from '@/pinia/modules/useStore'
  import {
    getOrderInfo
  } from '@/api/user'
  import type {
    OrderInfoTypeResponesData,
    OrderInfoType
  } from '@/api/user/type'
  import {
    useRouter
  } from 'vue-router'
  const router = useRouter()
  const params = ref({
    orderStatus: '',
    patientId: '',
  })
  const columnList = [
    { id: 1, label: '就诊时间', props: 'reserveDate', width: 120 },
    { id: 2, label: '医院', props: 'hosname' },
    { id: 3, label: '科室', props: 'depname' },
    { id: 4, label: '医生', props: 'title', width: 120 },
    { id: 5, label: '医事服务费', props: 'amount', width: 120 },
    { id: 6, label: '就诊人', props: 'patientName', width: 120 },
    { id: 7, label: '订单状态', props: 'orderStatusString', slot: true },
  ]
  const tableData = reactive<OrderInfoType[]>([])
  const getOrderInfoApi = () => {
    getOrderInfo(paginationOptions.pageNo, paginationOptions.pageSize, params.value).then( (res: OrderInfoTypeResponesData) => {
      paginationOptions.total = res.data.total
      Object.assign(tableData, res.data.records)
    })
  }
  const useStore = useUseStore()
  onMounted(() => {
    useStore.getFindAllApi()
    if(!useStore.statusList.length) {
      useStore.getStatusListApi()
    }
    getOrderInfoApi()
  })
  const search = () => {
    getOrderInfoApi()
  }
  const paginationOptions = reactive({
    pageNo: 1,
    pageSize: 10,
    total: 0,
  })
  const handlePageChange = (No: number,Size: number) => {
    paginationOptions.pageNo = No
    paginationOptions.pageSize = Size
    getOrderInfoApi()
  }
  const handleDetail = (row: OrderInfoType) => {
    router.push(`/user/orderDetails/${row.id}`)
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
  
  .form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .el-form-item {
      margin: 0;
      
    }
    .btn-text {
      text-align: center;
      line-height: 2;
      color: #409fee;
      font-size: 14px;
      cursor: pointer;
      user-select: none; /* 对大多数现代浏览器有效 */
      -webkit-user-select: none; /* 适用于旧版 Safari */
      -moz-user-select: none; /* 适用于 Firefox */
      -ms-user-select: none; /* 适用于 Internet Explorer 和 Edge */
      &:hover {
        color: #4490f1;
      }
    }
    .order-status {
      margin: 0 10px 0 80px;
    }
  }
  ::v-deep(.el-form-item__label) {
    font-size: 14px !important;
    color: #999 !important;
  }
  ::v-deep(.el-select__wrapper) {
    box-shadow: none !important;
    border-radius: 0;
    border-bottom: 1px solid #eee;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
</style>