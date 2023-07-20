const state = {
  data: [
    {
      id: 0,
      desc: 'Welcome to our website!',
    },
  ]
}

const mutations = {
  ADD_NOTIFICATION(state, notification) {
    state.data.push({ id: state.data.length, desc: notification })
  }
}

const actions = {
  addNotification({ commit }, payload) {
    commit('ADD_NOTIFICATION', payload)
  }
}

const getters = {
  getNotifications: (state) => {
    return state.data
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}