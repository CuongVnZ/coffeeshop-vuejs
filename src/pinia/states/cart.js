const state = {
    data: [
        {
            "desc": "The distinctive sweet and refreshing taste of longan delicately blends with the finest oolong tea and chia seeds to bring you a drink that is not only delicious but also nutritious.",
            "pid": "dragon-eyes-chia-seeds-tea",
            "img": "/images/products/dragon-eyes-chia-seeds-tea.png",
            "price": "2.05",
            "title": "Dragon Eyes (Longan) Chia Seeds Tea",
            "quantity": 5
        }
    ]
}

const mutations = {
  ADD_TO_CART(state, item) {
    const index = state.data.findIndex(p => p.pid === item.pid)
    if (index !== -1) {
      state.data[index].quantity += item.quantity
    } else {
      state.data.push(item)
    }
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