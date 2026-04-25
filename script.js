let currentSlide = 0;

function moveSlide(direction) {
  // Seleciona apenas os slides que NÃO estão escondidos pela cor
  const slides = document.querySelectorAll(".carousel-item:not(.hidden)");

  if (slides.length === 0) return;

  // Remove a classe ativa da imagem atual dentro do grupo visível
  slides[currentSlide].classList.remove("active");

  // Calcula o próximo índice
  currentSlide = (currentSlide + direction + slides.length) % slides.length;

  // Adiciona a classe ativa na nova imagem
  slides[currentSlide].classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const color = urlParams.get("color");

  const itemsRG = document.querySelectorAll(".content-rg");
  const itemsAM = document.querySelectorAll(".content-am");
  const colorText = document.getElementById("color-name");

  // Resetar todos primeiro
  document.querySelectorAll(".carousel-item").forEach((el) => {
    el.classList.remove("active");
    el.classList.remove("hidden");
  });

  if (color === "am") {
    itemsRG.forEach((el) => el.classList.add("hidden"));
    itemsAM[0].classList.add("active");
    if (colorText) colorText.innerText = "Amarelo Manteiga";
  } else {
    // Padrão Rosé Gold
    itemsAM.forEach((el) => el.classList.add("hidden"));
    itemsRG[0].classList.add("active");
    if (colorText) colorText.innerText = "Rosé Gold";
  }
});
