import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    products: [],
    cart: [
      {
        "desc": "The distinctive sweet and refreshing taste of longan delicately blends with the finest oolong tea and chia seeds to bring you a drink that is not only delicious but also nutritious.",
        "id": "dragon-eyes-chia-seeds-tea",
        "img": "/images/products/dragon-eyes-chia-seeds-tea.png",
        "price": "2.05",
        "title": "Dragon Eyes (Longan) Chia Seeds Tea",
        "amount": 5
      }
    ],
    notifications: [
      {
        id: 0,
        desc: 'Notification 1',
      },
    ]
  },

  mutations: {
    // PRODUCTS
    SET_PRODUCTS(state, products) {
      state.products = products
    },

    // CART
    ADD_TO_CART(state, payload) {
      const product = state.products.find(p => p.id === payload.id)
      const index = state.cart.findIndex(p => p.id === payload.id)
      if (index !== -1) {
        state.cart[index].amount += payload.amount
      } else {
        state.cart.push({
          id: product.id,
          title: product.title,
          desc: product.desc,
          img: product.img,
          amount: payload.amount,
          price: product.price
        })
      }
    },
    REMOVE_FROM_CART(state, productId) {
      const index = state.cart.findIndex(p => p.id === productId)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
    },

    // NOTIFICATIONS
    ADD_NOTIFICATION(state, notification) {
      state.notifications.push({ id: state.notifications.length, desc: notification })
    },
  },

  actions: {
    // PRODUCTS
    setProducts({ commit }, products) {
      commit('SET_PRODUCTS', products)
    },

    // CART
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },

    // NOTIFICATIONS
    addNotification({ commit }, notification) {
      commit('ADD_NOTIFICATION', notification)
    }
  },

  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(p => p.id === id)
    },
    getProductsByCategory: (state) => (category) => {
      return state.products.filter(p => p.category === category)
    },
    getAllProducts: (state) => {
      return state.products
    }
  }
})