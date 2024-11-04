import router from '../router'
const token = JSON.parse(localStorage.getItem('userInfo') || '{}').token || null
import {
  useUseStore
} from '@/pinia/modules/useStore'


router.beforeEach((to, from, next) => {
  const useStore = useUseStore()
  if(to.meta.isToken) {
    if(!token) {
      useStore.loginVisible = true
    }else {
      next()
    }
  }else {
    next()
  }
})