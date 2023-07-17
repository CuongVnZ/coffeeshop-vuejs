import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    products: [],
    cart: [
      {
        "id": "macchiato-black-tea",
        "amount": 3
      },
      {
        "id": "dragon-eyes-chia-seeds-tea",
        "amount": 5
      }
    ]
  },

  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },
    UPDATE_PRODUCT(state, updatedProduct) {
      const index = state.products.findIndex(p => p.id === updatedProduct.id)
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct)
      }
    },
    DELETE_PRODUCT(state, productId) {
      const index = state.products.findIndex(p => p.id === productId)
      if (index !== -1) {
        state.products.splice(index, 1)
      }
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    ADD_TO_CART(state, product) {
      const index = state.carts.findIndex(p => p.id === product.id)
      if (index !== -1) {
        state.cart[index].amount++
      } else {
        state.cart.push({
          id: product.id,
          amount: 1
        })
      }
    },
    REMOVE_FROM_CART(state, productId) {
      const index = state.cart.findIndex(p => p.id === productId)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
    }
  },

  actions: {
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product)
    },
    updateProduct({ commit }, updatedProduct) {
      commit('UPDATE_PRODUCT', updatedProduct)
    },
    deleteProduct({ commit }, productId) {
      commit('DELETE_PRODUCT', productId)
    },
    setProducts({ commit }, products) {
      commit('SET_PRODUCTS', products)
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
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