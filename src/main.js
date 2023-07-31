import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import * as page from './pages'

import exampleDirective from './directives/exampleDirective'

import store from './vuex/store.js'

const routes = [
    { path: '/', component: page.Home },
    { path: '/products', component: page.Products },
    { path: '/product/:id', component: page.Product },
    { path: '/cart', component: page.Cart },
    { path: '/login', component: page.Login },
    { path: '/register', component: page.Register },
    { path: '/profile', component: page.Profile },
    { path: '/checkout', component: page.Checkout },
    { path: '/receipt/:id', component: page.Receipt },
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

app.directive('example-directive', exampleDirective)

app.mount('#app')
