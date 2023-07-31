import { defineStore } from 'pinia'

export const useNotificationStore = defineStore({
  id: 'cart',
  state: () => ({
    data: [
      {
        id: 0,
        desc: 'Welcome to our website!',
      }
    ],
  }),
  actions: {
    addNotification(state, notification) {
      state.data.push({ id: state.data.length, desc: notification })
    },
    resetNotifications(state) {
      state.data = []
    }
  },
  getters: {
    getNotifications: (state) => {
      return state.data
    }
  },
})