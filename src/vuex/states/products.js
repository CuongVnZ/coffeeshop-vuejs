import { publicRequest } from '@/requestMethod.js'

const state = {
  isLoading: true,
  data: []
}

const mutations = {
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading;
  },
  SET_PRODUCTS(state, products) {
    state.data = products
  }
}

const actions = {
  setProducts({ commit }, products) {
    commit('SET_PRODUCTS', products)
  },
  async loadProducts({ commit }) {
    commit('SET_LOADING', true)
		await publicRequest.get('/products/')
		.then(res => {
			commit('SET_PRODUCTS', res.data)
		})
    .catch(error => {
      console.log(error)
    })
    commit('SET_LOADING', false)
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