import { createRouter, createWebHashHistory } from 'vue-router'

import * as page from '../pages'

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

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

