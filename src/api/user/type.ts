import type {
  ResponesData
} from '@/types'

export interface UserInfoType {
  "id": number,
  "createTime": string,
  "updateTime": string,
  "isDeleted": number,
  "param": object,
  "openid": string,
  "nickName": string,
  "phone": string,
  "name": string,
  "certificatesType": string,
  "certificatesNo": string,
  "certificatesUrl": string,
  "authStatus": number,
  "status": number
}

export interface UserInfoTypeResponesData extends ResponesData {
  "data": UserInfoType
}

export interface StatusType {
  "comment": string,
  "status": number
}

export interface StatusTypeResponesData extends ResponesData {
  "data": StatusType[]
}

export interface OrderInfoParams {
  patientId: string,
  orderStatus: string,
}

export interface OrderInfoType {
  "id": number,
  "createTime": string,
  "updateTime": string,
  "isDeleted": number,
  "param": {
      "orderStatusString": string
  },
  "userId": number,
  "outTradeNo": string,
  "hoscode": string,
  "hosname": string,
  "depcode": string,
  "depname": string,
  "scheduleId": null,
  "title": string,
  "reserveDate": string,
  "reserveTime": number,
  "patientId": number,
  "patientName": string,
  "patientPhone": string,
  "hosRecordId": string,
  "number": number,
  "fetchTime": string,
  "fetchAddress": string,
  "amount": number,
  "quitTime": string,
  "orderStatus": number
}

export interface OrderInfoTypeResponesData extends ResponesData {
  // data: 
  "data": {
    "current": number
    "hitCount":boolean
    "orders":[]
    "pages": number
    "records": OrderInfoType[],
    "searchCount": boolean
    "size": number
    "total": number
  }
}

export interface OrderDetailsType {
  "id": number,
  "createTime": string,
  "updateTime": string,
  "isDeleted": number,
  "param": {
      "orderStatusString": string
  },
  "userId": number,
  "outTradeNo": string,
  "hoscode": string,
  "hosname": string,
  "depcode": string,
  "depname": string,
  "scheduleId": string,
  "title": string,
  "reserveDate": string,
  "reserveTime": number,
  "patientId": number,
  "patientName": string,
  "patientPhone": string,
  "hosRecordId": string,
  "number": number,
  "fetchTime": string,
  "fetchAddress": string,
  "amount": number,
  "quitTime": string,
  "orderStatus": number
}

export interface OrderDetailsResponesData extends ResponesData {
  "data": OrderDetailsType
}

export interface OrderCancelResponesData extends ResponesData {
  "data": boolean
}

export interface createNativeType {
  "codeUrl": string,
  "orderId": number,
  "totalFee": number,
  "resultCode": string
}

export interface createNativeResponesData extends ResponesData {
  "data": createNativeType
}