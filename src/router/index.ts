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
          path: '/hospital/:code',
          component: () => import('@/views/hospital/registration/index.vue'),
          meta: {
            code: 'registration'
          }
        },
        {
          path: '/hospital/detail/:code',
          component: () => import('@/views/hospital/detail/index.vue'),
          meta: {
            code: 'detail'
          }
        },
        {
          path: '/hospital/notice/:code',
          component: () => import('@/views/hospital/notice/index.vue'),
          meta: {
            code: 'notice'
          }
        },
        {
          path: '/hospital/stop/:code',
          component: () => import('@/views/hospital/stop/index.vue'),
          meta: {
            code: 'stop'
          }
        },
        {
          path: '/hospital/search/:code',
          component: () => import('@/views/hospital/search/index.vue'),
          meta: {
            code: 'search'
          }
        },
      ]
    },
  ]
})