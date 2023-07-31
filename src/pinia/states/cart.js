import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    data: [
      {
        desc: 'The distinctive sweet and refreshing taste of longan delicately blends with the finest oolong tea and chia seeds to bring you a drink that is not only delicious but also nutritious.',
        pid: 'dragon-eyes-chia-seeds-tea',
        img: '/images/products/dragon-eyes-chia-seeds-tea.png',
        price: '2.05',
        title: 'Dragon Eyes (Longan) Chia Seeds Tea',
        quantity: 5,
      },
    ],
  }),
  actions: {
    addToCart(state, item) {
      const index = state.data.findIndex((p) => p.pid === item.pid)
      if (index !== -1) {
        state.data[index].quantity += item.quantity
      } else {
        state.data.push(item)
      }
    },
    removeFromCart(state, productId) {
      const index = state.data.findIndex((p) => p.pid === productId)
      if (index !== -1) {
        state.data.splice(index, 1)
      }
    },
    resetCart(state) {
      state.data = []
    },
  },
  getters: {
    getCart(state) {
      return state.data
    },
    getCartSize(state) {
      return state.data.length
    },
    getCartTotal(state) {
      return state.data.reduce((acc, cur) => {
        return acc + cur.quantity * cur.price
      }, 0)
    }
  },
})