// main.ts
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router, { setupRouter } from './router'
// import './theme/index.scss'
import './style/index.scss'
import { setupStore } from './stores'
import { setupIcon } from './plugins'
// import 'element-plus/theme-chalk/dark/css-vars.css'
// import 'virtual:svg-icons-register'

async function bootstrap(): Promise<void> {
  const app = createApp(App)
  //全局注册elementplus icon
  setupIcon(app)

  // 注册全局自定义指令，如：v-permission权限指令
  // setupDirectives(app)

  // 挂载路由
  setupRouter(app)

  // 挂载状态管理
  setupStore(app)

  // app.use(ElementPlus)

  // 路由准备就绪后挂载APP实例
  await router.isReady()

  app.mount('#app')
}

void bootstrap()
