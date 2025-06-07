import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/home.scss' // Import your global SCSS

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')