import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import './assets/style.css'
import App from './App.vue'
import router from './router'
import ENV from './config/env';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.css';

//const pinia = createPinia()
const app = createApp(App)

//add theme
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = `/theme/${ENV.VITE_THEME}/css/style.css`
document.head.appendChild(link)

//globals
app.config.globalProperties.$env = ENV

//app.use(pinia)
app.use(router)
app.mount('#app')

export default ENV;
