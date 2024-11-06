import { defineStore } from 'pinia'
import {
  getFindAll,
} from '@/api/hospital'
import {
  getStatusList
} from '@/api/user'
import type {
  GetFindAllResponesData,
  GetFindAllType
} from '@/api/hospital/type'
import type {
  StatusTypeResponesData,
  StatusType
} from '@/api/user/type'

export const useUseStore = defineStore('useStore', {
  state: () => {
    return {
      loginVisible: false as boolean,
      userInfo: {
        name: '',
        token: ''
      },
      findAllList: [] as GetFindAllType[],
      statusList: [] as StatusType[]
    }
  },
  persist: true,
  actions: {
    getFindAllApi() {
      getFindAll().then( (res: GetFindAllResponesData) => {
        this.findAllList = res.data
      })
    },
    getStatusListApi() {
      getStatusList().then( (res: StatusTypeResponesData) => {
        this.statusList = res.data
      })
    }
  },
  getters: {

  },
  
})