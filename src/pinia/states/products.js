import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    data: []
  }),
  actions: {
    setProducts(state, products) {
      state.data = products
    }
  },
  getters: {
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
  },
})