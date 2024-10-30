import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/reset.scss'
import '@/assets/css/app.scss'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "virtual:svg-icons-register";
import pinia from '@/pinia'

import {
  SytTop,
  SytContent,
  SytFooter,
  SytSvg
} from '@/components'
const components = [SytTop,SytContent,SytFooter,SytSvg]
const app = createApp(App)
// app.config.globalProperties.$router = router;
app.use(router)
app.use(ElementPlus)
app.use(pinia)
components.forEach(component => {
  app.component(component.name, component)
})
app.mount('#app')
