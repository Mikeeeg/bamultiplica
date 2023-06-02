// Carrusel
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

// Pantalla de carga
window.onload = function() {
  var pantallaCarga = document.getElementById("pantalla-carga");

  setTimeout(function() {
    pantallaCarga.style.display = "none";
  }, 500); // 2000 milisegundos = 2 segundos
};

// Boton no viene
function noViene() {
  alert("SIII VIENE!! MÁS INFO https://www.allaccess.com.ar/event/taylor-swift-the-eras-tour");
}

// Boton Compra
var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  
  var cardNumber = prompt("Ingrese el número de tarjeta:");
  var cardName = prompt("Ingrese el nombre en la tarjeta:");
  var expirationDate = prompt("Ingrese la fecha de vencimiento:");
  var cvv = prompt("Ingrese el CVV:");

  if (cardNumber === '' || cardName === '' || expirationDate === '' || cvv === '') {
    alert("Por favor, complete todos los campos de tarjeta de crédito.");
  } else {
    alert("¡Datos de tarjeta completados correctamente!");
  }
});

// Menu desplegable
var dropdown = document.querySelector(".dropdown");
var dropdownContent = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", function() {

  dropdownContent.classList.toggle("show");
});