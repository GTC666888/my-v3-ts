import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/hospital',
      component: () => import('@/views/hospital/index.vue'),
      children: [
        {
          path: '/hospital/:hosCode',
          component: () => import('@/views/hospital/registration/index.vue'),
          meta: {
            code: 'registration'
          }
        },
        {
          path: '/hospital/schedule/:hosCode/:depCode',
          component: () => import('@/views/hospital/schedule/index.vue'),
          meta: {
            code: 'registration',
            isToken: true
          }
        },
        {
          path: '/hospital/booking/:scheduleId',
          component: () => import('@/views/hospital/booking/index.vue'),
          meta: {
            code: 'registration',
            isToken: true
          }
        },
        {
          path: '/hospital/detail/:hosCode',
          component: () => import('@/views/hospital/detail/index.vue'),
          meta: {
            code: 'detail'
          }
        },
        {
          path: '/hospital/notice/:hosCode',
          component: () => import('@/views/hospital/notice/index.vue'),
          meta: {
            code: 'notice'
          }
        },
        {
          path: '/hospital/stop/:hosCode',
          component: () => import('@/views/hospital/stop/index.vue'),
          meta: {
            code: 'stop'
          }
        },
        {
          path: '/hospital/search/:hosCode',
          component: () => import('@/views/hospital/search/index.vue'),
          meta: {
            code: 'search'
          }
        },
      ]
    },
  ]
})