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
    return state.find(p => p.id === id)
  },
  getProductsByCategory: (state) => (category) => {
    return state.filter(p => p.category === category)
  },
  getProducts: (state) => {
    return state.data
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}