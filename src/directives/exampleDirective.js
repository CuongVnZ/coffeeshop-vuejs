// exampleDirective.js

export default function (el, binding) {
  el.addEventListener('click', function () {
    alert('You clicked me!');
  });
}