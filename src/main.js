import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'

import useCustomeDirective from './directives'

import store from './vuex'
import router from './router/index.js'

// const pinia = createPinia()

const app = createApp(App)
// app.use(pinia)
app.use(store)
app.use(router)
useCustomeDirective(app);
app.mount('#app')
