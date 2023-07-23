const state = {
    data: []
}

const mutations = {
  SET_PRODUCTS(state, products) {
    state.data = products
  }
}

const actions = {
  setProducts({ commit }, products) {
    commit('SET_PRODUCTS', products)
  }
}

const getters = {
  getProductById: (state) => (id) => {
    return state.data.find(p => p.pid === id)
  },
  getProductsByCategory: (state) => (category) => {
    return state.data.filter(p => p.category === category)
  },
  getProducts: (state) => {
    return state.data
  },
  getProductSize: (state) => {
    return state.data.length
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}