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

export interface GetBookingScheduleRuleParams {
  "page": string,
  "limit": number,
  "hoscode": string | string[],
  "depcode": string | string[],
}
export interface BookingScheduleList {
  "workDate": string,
  "workDateMd": string,
  "dayOfWeek": string,
  "docCount": number,
  "reservedNumber": number,
  "availableNumber": number,
  "status": number
}
export interface BaseMap {
  "workDateString": string,
  "releaseTime": string,
  "bigname": string,
  "stopTime": string,
  "depname": string,
  "hosname": string
}
export interface GetBookingScheduleRuleType {
  "total": number,
  "bookingScheduleList": BookingScheduleList[],
  "baseMap": BaseMap,
}
export interface GetBookingScheduleRuleResponesData extends ResponesData {
  data: GetBookingScheduleRuleType
}

export interface GetFindScheduleListParams {
  "hoscode": string | string[],
  "depcode": string | string[],
  "date": string,
}

export interface GetFindScheduleListType {
  "id": string,
  "createTime": string,
  "updateTime": string,
  "isDeleted": number,
  "param": {
    "dayOfWeek": string,
    "depname": string,
    "hosname": string
  },
  "hoscode": string,
  "depcode": string,
  "title": string,
  "docname": string,
  "skill": string,
  "workDate": string,
  "workTime": number,
  "reservedNumber": number,
  "availableNumber": number,
  "amount": number,
  "status": number,
  "hosScheduleId": string
}

export interface GetFindScheduleListResponesData extends ResponesData {
  data: GetFindScheduleListType[]
}