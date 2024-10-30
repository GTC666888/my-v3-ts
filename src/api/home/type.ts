// 定义等级和地区码表值数据类型
import type {
  ResponesData
} from '@/types'
// 定义码表值数据类型
export interface LevelAndAreaCode {
  "id": number;
  "createTime": string;
  "updateTime": string;
  "isDeleted": number;
  "param": {};
  "parentId": 110100;
  "name": string;
  "value": string;
  "dictCode": any;
  "hasChildren": boolean;
}
export type LevelAndAreaCodeArr = LevelAndAreaCode[]
// 定义码表接口数据类型
export interface LevelAndAreaCodeResponesData extends ResponesData {
  data: LevelAndAreaCodeArr;
}

export interface Hospital {
  "id": string,
  "createTime": string,
  "updateTime": string,
  "isDeleted": number,
  "param": {
    "hostypeString": string,
    "fullAddress": string
  },
  "hoscode": string,
  "hosname": string,
  "hostype": string,
  "provinceCode": string,
  "cityCode": string,
  "districtCode": string,
  "address": string,
  "logoData": string,
  "intro": null,
  "route": string,
  "status": number,
  "bookingRule": {
    "cycle": number,
    "releaseTime": string,
    "stopTime": string,
    "quitDay": number,
    "quitTime": string,
    "rule": string[]
  },
}
export type HospitalArr = Hospital[]
export interface HospitalResponesData extends ResponesData {
  data: {
    content: HospitalArr,
    "pageable": {
      "sort": {
        "sorted": boolean,
        "unsorted": boolean,
        "empty": boolean
      },
      "pageNumber": number,
      "pageSize": number,
      "offset": number,
      "paged": boolean,
      "unpaged": boolean
    },
    "totalPages": number,
    "totalElements": number,
    "last": boolean,
    "first": boolean,
    "sort": {
      "sorted": boolean,
      "unsorted": boolean,
      "empty": boolean
    },
    "numberOfElements": number,
    "size": number,
    "number": number,
    "empty": boolean
  },
}
export interface hospitalListResponesData extends ResponesData {
  data: HospitalArr
}