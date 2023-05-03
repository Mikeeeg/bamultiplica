/* Carrusel */
const carousel = document.querySelector('#carouselExample');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const carouselInner = carousel.querySelector('.carousel-inner');
const items = carouselInner.querySelectorAll('.carousel-item');
const itemCount = items.length;
let currentItem = 0;

function showCurrentItem() {
  items.forEach((item, index) => {
    if (index === currentItem) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function movePrev() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = itemCount - 1;
  }
  showCurrentItem();
}

function moveNext() {
  currentItem++;
  if (currentItem >= itemCount) {
    currentItem = 0;
  }
  showCurrentItem();
}

prevButton.addEventListener('click', movePrev);
nextButton.addEventListener('click', moveNext);

showCurrentItem();

/* Pantalla de carga */
window.onload = function() {
  var pantallaCarga = document.getElementById("pantalla-carga");

  setTimeout(function() {
    pantallaCarga.style.display = "none";
  }, 500); // 2000 milisegundos = 2 segundos
};

/* Boton no viene */
function noViene() {
  alert("No 😭");
}

