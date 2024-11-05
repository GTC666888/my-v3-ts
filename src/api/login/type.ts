import type {
  ResponesData
} from '@/types'


export interface LoginResponesData extends ResponesData {
  data: string
}

export interface LoginParams {
  phone: string,
  code: string
}