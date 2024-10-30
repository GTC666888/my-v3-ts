import { defineStore } from 'pinia'
import {
  getHospital,
  getDepartment
} from '@/api/hospital'
import type {
  HospitalTypeResponesData,
  HospitalType,
  DepartmentTypeResponesData,
  DepartmentType
} from '@/api/hospital/type'
const useHospitalStore = defineStore( ('hospital'),{
  state: () => {
    return {
      hospitalDetail: {} as HospitalType,
      departmentDetail: {} as DepartmentType
    }
  },
  actions: {
    async getHospitalApi(code: string | string[]) {
      await getHospital(code).then((res: HospitalTypeResponesData) => {
        this.hospitalDetail = res.data
      })
    },
    async getDepartmentApi(code: string | string[]) {
      await getDepartment(code).then((res: DepartmentTypeResponesData) => {
        this.departmentDetail = res.data
      })
    }
  },
  getters: {

  }
})
export default useHospitalStore