import { createApp } from 'vue'
import App from '@/App.vue'
import pinia from '@/pinia'
import '@/assets/css/reset.scss'
import '@/assets/css/app.scss'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "virtual:svg-icons-register";

import '@/utils/intercept'

import {
  SytTop,
  SytContent,
  SytFooter,
  SytSvg,
  SytLogin
} from '@/components'
const components = [SytTop,SytContent,SytFooter,SytSvg,SytLogin]
const app = createApp(App)
// app.config.globalProperties.$router = router;
app.use(pinia)

app.use(ElementPlus)
app.use(router)

components.forEach(component => {
  app.component(component.name, component)
})
app.mount('#app')
