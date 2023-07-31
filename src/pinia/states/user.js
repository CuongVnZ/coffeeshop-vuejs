import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'user',
  state: () => ({
    currentUser: null
  }),
  actions: {
    setUser(state, user) {
      state.currentUser = user
    },
    updateUser(state, data) {
      state.currentUser = {
        ...state.currentUser,
        ...data
      }
    },
    logout(state) {
      state.currentUser = null
    }
  },
  getters: {
    getUser: (state) => {
      return state.currentUser
    },
    getToken: (state) => {
      return state.currentUser?.accessToken
    }
  },
})