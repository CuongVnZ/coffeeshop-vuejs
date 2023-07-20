import Vuex from 'vuex'

import products from './states/products'
import cart from './states/cart'
import notifications from './states/notifications'

export default new Vuex.Store({
  modules: {
    products,
    cart,
    notifications
  }
})