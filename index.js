const element = document.querySelector('.my-element');

element.addEventListener('animationend', () => {
  // First animation has finished, start the second animation
  element.classList.add('second-animation');
});