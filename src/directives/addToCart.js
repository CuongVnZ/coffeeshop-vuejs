// addToCart.js

export default {
  mounted (el, binding) {
    el.addEventListener('click', function () {
      const value = binding.value
      
      const store = value.$store
      const item = value.item

      store.dispatch('addToCart', item)
      store.dispatch('addNotification', "You added item(s) to your cart.")
    });
  }
}