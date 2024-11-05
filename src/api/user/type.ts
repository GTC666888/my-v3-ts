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