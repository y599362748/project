import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入element-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import pinia from './stores'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
