// addToCart.js

export default {
  mounted (el, binding) {
    el.addEventListener('click', function () {
      const value = binding.value
      
      const store = value.$store
      const item = value.item
      const type = value.type
      const options = value.options

      if(type) item.choosedType = type
      else item.choosedType = item.types[0]

      if(options) item.choosedOptions = options
      else item.choosedOptions = []

      store.dispatch('addToCart', item)
      store.dispatch('addNotification', "You added item(s) to your cart.")
    });
  }
}