const state = {
  currentUser: null
}

const mutations = {
  SET_USER(state, user) {
    state.currentUser = user
  },
  UPDATE_USER(state, data) {
    state.currentUser = {
      ...state.currentUser,
      ...data
    }
  }
}

const actions = {
  setUser({ commit }, user) {
    commit('SET_USER', user)
  },
  updateUser({ commit }, data) {
    commit('UPDATE_USER', data)
  },
  logout({ commit }) {
    commit('SET_USER', null)
  }
}

const getters = {
  getUser: (state) => {
    return state.currentUser
  },
  getToken: (state) => {
    return state.currentUser?.accessToken
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}