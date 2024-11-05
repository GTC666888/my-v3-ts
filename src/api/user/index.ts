import $http from '@/utils/http'
import type {
  UserInfoTypeResponesData
} from './type'
enum API_USER {
  GET_USERINFO = '/user/auth/getUserInfo',
  GET_FINDBY_DICTCODE = '/cmn/dict/findByDictCode',
}

export const getUserInfo = () => // 获取医院列表
  $http.get<any, UserInfoTypeResponesData>(API_USER.GET_USERINFO)

export const getFindByDictCode = (code: string) => // 获取医院列表
  $http.get<any>(`${API_USER.GET_FINDBY_DICTCODE}/${code}`)