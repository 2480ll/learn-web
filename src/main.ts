// 引入公共样式
import '@/styles/index.css'

// pinia
import { setupStore } from '@/stores/index'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'
// element样式
import 'element-plus/dist/index.css'
// 路由守卫
import '@/router/permission'
// uncoss
import 'virtual:uno.css'
/**
 * vite-plugin-purge-icons  注释原因看语雀问题总结
 * import '@purge-icons/generated'
 */

//'vite-plugin-svg-icons'
import 'virtual:svg-icons-register'

const app = createApp(App)

// app.use(createPinia())
setupStore(app)
app.use(router)

app.mount('#app')
