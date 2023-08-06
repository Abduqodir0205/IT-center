import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import 'vue-toast-notification/dist/theme-sugar.css';
import '@/plugins/vee-validate.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
