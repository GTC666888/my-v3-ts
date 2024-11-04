import $http from '@/utils/http'
import type {
  HospitalTypeResponesData,
  DepartmentTypeResponesData,
  GetBookingScheduleRuleResponesData,
  GetBookingScheduleRuleParams,
  GetFindScheduleListParams,
  GetFindScheduleListResponesData
} from './type'
enum API_HOSPITAL {
  GET_HOSPITAL = '/hosp/hospital',
  GET_DEPARTMENT = '/hosp/hospital/department',
  GET_BOOKINGSCHEDULE_RULE = '/hosp/hospital/auth/getBookingScheduleRule',
  GET_FINDSCHEDULE_LIST = "hosp/hospital/auth/findScheduleList"
}
export const getHospital = (hosCode: string | string[]) => // 获取医院列表
  $http.get<any, HospitalTypeResponesData>(`${API_HOSPITAL.GET_HOSPITAL}/${hosCode}`)

export const getDepartment = (hosCode: string | string[]) => // 获取医院列表
  $http.get<any, DepartmentTypeResponesData>(`${API_HOSPITAL.GET_DEPARTMENT}/${hosCode}`)

export const getBookingScheduleRule = (params:GetBookingScheduleRuleParams) => // 获取挂号列表
  $http.get<any, GetBookingScheduleRuleResponesData>(`${API_HOSPITAL.GET_BOOKINGSCHEDULE_RULE}/${params.page}/${params.limit}/${params.hoscode}/${params.depcode}`)

export const getFindScheduleList = (params:GetFindScheduleListParams) => // 获取挂号信息
  $http.get<any, GetFindScheduleListResponesData>(`${API_HOSPITAL.GET_FINDSCHEDULE_LIST}/${params.hoscode}/${params.depcode}/${params.date}`)

