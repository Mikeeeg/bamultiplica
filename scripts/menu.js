const menuToggle = document.querySelector('.menu-toggle input');
const menu = document.querySelector('.menu-items');

menuToggle.addEventListener('click', function() {
  if (this.checked) {
    menu.classList.add('open');
  } else {
    menu.classList.remove('open');
  }
});
