import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router, { setupRouter } from './router'

// 导入 element ui 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zh from 'element-plus/es/locale/lang/zh-cn'

// 导入自定义样式
import '@/styles/index.scss'

async function bootApp() {
  let app = createApp(App)

  // 注册 ui
  app.use(ElementPlus, {
    locale: zh,
    size: 'mini',
  })

  app.use(store)

  await setupRouter(app)
  await router.isReady()
  app.mount('#app', true)
}


void bootApp()
