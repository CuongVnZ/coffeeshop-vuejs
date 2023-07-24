const state = {
  currentUser: null
}

const mutations = {
  SET_USER(state, user) {
    state.currentUser = user
  }
}

const actions = {
  setUser({ commit }, user) {
    commit('SET_USER', user)
  },
  logout({ commit }) {
    commit('SET_USER', null)
  }
}

const getters = {
  getUser: (state) => {
    return state.currentUser
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}