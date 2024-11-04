import { defineStore } from 'pinia'

export const useUseStore = defineStore('useStore', {
  state: () => {
    return {
      loginVisible: false,
      userInfo: {
        name: '',
        token: ''
      }
    }
  },
  persist: true,
  actions: {

  },
  getters: {

  },
  
})