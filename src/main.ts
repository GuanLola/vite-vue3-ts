import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router/index'
import '@/style/global.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus, { size: 'small', zIndex: 3000}).mount('#app')
