import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// 导入组件库
import jdui from '../src/index.js'
// 注册组件库
app.use(jdui)

app.config.productionTip = false
app.mount('#app')