import $http from '@/utils/http'
import type {
  LevelAndAreaCodeResponesData,
  HospitalResponesData,
  hospitalListResponesData
} from './type'
enum API_HOME {
  GET_HOSPITAL_LIST = '/hosp/hospital',
  GET_FINDBY_DICTCODE = '/cmn/dict/findByDictCode',
  GET_FINDBY_HOSNAME = '/hosp/hospital/findByHosname'
  
}
export const getHospitalList = (params: any) => // 获取医院列表
  $http.get<any, HospitalResponesData>(`${API_HOME.GET_HOSPITAL_LIST}/${params.page}/${params.limit}?hostype=${params.hostype || ''}&districtCode=${params.districtCode || ''}`)

export const getFindByDictCode = (code: string) => // 获取医院列表
  $http.get<any, LevelAndAreaCodeResponesData>(`${API_HOME.GET_FINDBY_DICTCODE}/${code}`)

export const getFindByHosName = (hosName: string) => // 获取医院列表
  $http.get<any, hospitalListResponesData>(`${API_HOME.GET_FINDBY_HOSNAME}/${hosName}`)
