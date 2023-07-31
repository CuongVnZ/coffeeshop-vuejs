// exampleDirective.js

export default {
  mounted (el, binding) {
    el.addEventListener('click', function () {
      alert('You clicked me!');
    });
  }
}