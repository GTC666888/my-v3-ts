import router from '../router'
import {
  useUseStore
} from '@/pinia/modules/useStore'


router.beforeEach((to, from, next) => {
  const useStore = useUseStore()
  if(to.meta.isToken) {
    if(!useStore?.userInfo?.token) {
      useStore.loginVisible = true
    }else {
      next()
    }
  }else {
    next()
  }
})