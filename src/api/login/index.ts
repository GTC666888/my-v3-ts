import $http from '@/utils/http'
import type {
  LoginResponesData,
  LoginParams
} from './type'
enum API_LOGIN {
  GET_SEND = '/sms/send',
  GET_LOGIN = '/user/login'
}

export const getSend = (phoneNumber: string) => // 获取医院列表
  $http.get<any, LoginResponesData>(`${API_LOGIN.GET_SEND}/${phoneNumber}`)

export const getLogin = (data: LoginParams) => // 登录
  $http.post<any, LoginResponesData>(API_LOGIN.GET_LOGIN, data)