import $http from '@/utils/http'
import type {
  HospitalTypeResponesData,
  DepartmentTypeResponesData
} from './type'
enum API_HOSPITAL {
  GET_HOSPITAL = '/hosp/hospital',
  GET_DEPARTMENT= '/hosp/hospital/department'
}
export const getHospital = (code: string | string[]) => // 获取医院列表
  $http.get<any, HospitalTypeResponesData>(`${API_HOSPITAL.GET_HOSPITAL}/${code}`)

export const getDepartment = (code: string | string[]) => // 获取医院列表
  $http.get<any, DepartmentTypeResponesData>(`${API_HOSPITAL.GET_DEPARTMENT}/${code}`)