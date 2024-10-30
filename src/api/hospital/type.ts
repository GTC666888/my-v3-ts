import type {
  ResponesData
} from '@/types'
export interface HospitalBookingRuleType {
  "cycle": number,
  "releaseTime": string,
  "stopTime": string,
  "quitDay": number,
  "quitTime": string,
  "rule": string[]
}
export interface HospitalHospitalType {
  "id": string,
  "createTime": string,
  "updateTime": string,
  "isDeleted": number,
  "param": {
    "fullAddress": string,
    "hostypeString": string,
  },
  "hoscode": string,
  "hosname": string,
  "hostype": string,
  "provinceCode": string,
  "cityCode": string,
  "districtCode": string,
  "address": string,
  "logoData": string,
  "intro": string,
  "route": string,
  "status": number,
  "bookingRule": boolean
}
export interface HospitalType {
  "bookingRule": HospitalBookingRuleType,
  "hospital": HospitalHospitalType
}
export interface HospitalTypeResponesData extends ResponesData {
  data: HospitalType
}
interface Department {
  "depcode": string,
  "depname": string,
}
export interface DepartmentType extends Department {
  children: Department
}
export interface DepartmentTypeResponesData extends ResponesData {
  data: DepartmentType
}