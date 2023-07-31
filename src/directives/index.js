import exampleDirective from './exampleDirective.js'
import addToCart from './addToCart.js'

const useCustomeDirective = (app) => {
  app.directive('example-directive', exampleDirective)
  app.directive('add-to-cart', addToCart)
}

export default useCustomeDirective