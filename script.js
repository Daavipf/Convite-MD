let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".carousel-item");

  // Remove a classe ativa da imagem atual
  slides[currentSlide].classList.remove("active");

  // Calcula o próximo índice
  currentSlide += direction;

  // Loop do carrossel (se chegar no fim, volta ao início)
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  // Adiciona a classe ativa na nova imagem
  slides[currentSlide].classList.add("active");
}
