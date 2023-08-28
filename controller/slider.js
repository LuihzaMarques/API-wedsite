const sliderContent = document.querySelector('.slider-content');
let currentIndex = 0;

function slideNext() {
  currentIndex = (currentIndex + 1) % sliderContent.children.length;
  updateSliderPosition();
}

function updateSliderPosition() {
  sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideNext, 3000); // Altere o valor para definir o intervalo de troca em milissegundos


