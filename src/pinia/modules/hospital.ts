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
    async getHospitalApi(hosCode: string | string[]) {
      await getHospital(hosCode).then((res: HospitalTypeResponesData) => {
        this.hospitalDetail = res.data
      })
    },
    async getDepartmentApi(hosCode: string | string[]) {
      console.log(hosCode,"hosCodehosCode");
      
      await getDepartment(hosCode).then((res: DepartmentTypeResponesData) => {
        this.departmentDetail = res.data
      })
    }
  },
  getters: {

  }
})
export default useHospitalStore