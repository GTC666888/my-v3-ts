import $http from '@/utils/http'
import type {
  UserInfoTypeResponesData,
  StatusTypeResponesData,
  OrderInfoTypeResponesData,
  OrderInfoParams
} from './type'
enum API_USER {
  GET_USERINFO = '/user/auth/getUserInfo',
  GET_FINDBY_DICTCODE = '/cmn/dict/findByDictCode',
  GET_STATUS_LIST = '/order/orderInfo/auth/getStatusList',
  GET_ORDER_INFO= '/order/orderInfo/auth'
}

export const getUserInfo = () => // 获取医院列表
  $http.get<any, UserInfoTypeResponesData>(API_USER.GET_USERINFO)

export const getFindByDictCode = (code: string) => // 获取医院列表
  $http.get<any>(`${API_USER.GET_FINDBY_DICTCODE}/${code}`)

export const getStatusList = () => // 获取状态列表
  $http.get<any,StatusTypeResponesData>(API_USER.GET_STATUS_LIST)

export const getOrderInfo = (pageNo: any, pageSize: number, params: OrderInfoParams) => // 获取订单列表
  $http.get<any,OrderInfoTypeResponesData>(`${API_USER.GET_ORDER_INFO}/${pageNo}/${pageSize}`, {params})