const state = {
  data: [

  ]
}

const mutations = {
  ADD_TO_CART(state, item) {
    const index = state.data.findIndex(p => p.pid === item.pid)
    if (index !== -1) {
      // only add if the two items have the same types and options
      if (state.data[index].choosedType === item.choosedType && state.data[index].choosedOptions === item.choosedOptions) {
        state.data[index].quantity += item.quantity
        return;
      }
    }
    state.data.push(item)
  },
  REMOVE_FROM_CART(state, productId) {
    const index = state.data.findIndex(p => p.pid === productId)
    if (index !== -1) {
      state.data.splice(index, 1)
    }
  },
  RESET_CART(state) {
    state.data = []
  }
}

const actions = {
  addToCart({ commit }, payload) {
    commit('ADD_TO_CART', payload)
  },
  removeFromCart({ commit }, payload) {
    commit('REMOVE_FROM_CART', payload)
  },
  resetCart({ commit }) {
    commit('RESET_CART')
  }
}

const getters = {
  getCart: (state) => {
    return state.data
  },
	getCartSize: (state) => {
		return state.data.length
	},
  getCartTotal: (state) => {
    return state.data.reduce((acc, cur) => {
      return acc + (cur.quantity * cur.price)
    }, 0)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}