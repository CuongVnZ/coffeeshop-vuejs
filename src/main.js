import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import Home from './pages/Home.vue'
import Products from './pages/Products.vue'
import Product from './pages/Product.vue'
import Cart from './pages/Cart.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Profile from './pages/Profile.vue'
import Checkout from './pages/Checkout.vue'
import Receipt from './pages/Receipt.vue'

import store from './vuex/store.js'

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/product/:id', component: Product },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile },
    { path: '/checkout', component: Checkout },
    { path: '/receipt/:id', component: Receipt },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
