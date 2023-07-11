import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    products: []
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