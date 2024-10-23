import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/reset.scss'
import '@/assets/css/app.scss'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import {
  SytTop,
  SytContent,
  SytFooter
} from '@/components'
const components = [SytTop,SytContent,SytFooter]
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
components.forEach(component => {
  app.component(component.name, component)
})
app.mount('#app')
