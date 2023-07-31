import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

import products from './states/products'
import cart from './states/cart'
import notifications from './states/notifications'
import user from './states/user'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  modules: {
    products,
    cart,
    notifications,
    user
  },
  plugins: [vuexLocal.plugin]
})