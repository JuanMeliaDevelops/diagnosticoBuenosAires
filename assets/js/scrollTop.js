// ====== Scroll to top js

// Función para mostrar/ocultar el botón de volver al inicio según la posición de scroll
function handleBackToTopVisibility() {
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 50) {  // Usamos window.scrollY para manejar el scroll en todos los navegadores
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
}

// Función para desplazar suavemente al tope de la página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Agregar evento para mostrar/ocultar el botón al hacer scroll
window.addEventListener("scroll", handleBackToTopVisibility);

// Agregar evento click al botón para ejecutar la función de scroll
document.querySelector(".back-to-top").addEventListener("click", scrollToTop);

// ====== Scroll to top js END


