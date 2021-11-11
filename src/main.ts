import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router/index'
import '@/style/global.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import QrCode from './components/QrCode.vue'

createApp(App)
  .use(router)
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .component('qr-code',QrCode)
  .mount('#app')
