
/* Scroll Down a estudios  Animacion */

const scrollDown = document.getElementById("scroll-down");

scrollDown.addEventListener('mouseenter', function(event){

scrollDown.classList.add("animate__animated", "animate__bounce");
} );

scrollDown.addEventListener('mouseleave', function(event) {

setTimeout(function() {
scrollDown.classList.remove("animate__animated", "animate__bounce");
}, 1200); 
});



/* Telefonos Desplegable */

document.addEventListener('DOMContentLoaded', function() {
    const phoneButton = document.querySelector('.phone-button');
    const phoneButtonContainer = document.querySelector('.phone-button-container');

    phoneButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el evento se propague
        phoneButtonContainer.classList.toggle('show-phone-numbers');
    });

    // Cerrar el div al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!phoneButtonContainer.contains(event.target)) {
            phoneButtonContainer.classList.remove('show-phone-numbers');
        }
    });
});



// Estudios Info desplegar


document.addEventListener('DOMContentLoaded', function () {
    const estudios = document.querySelectorAll('.estudio');
    const estudioInfo = document.getElementById('estudioInfo');
    const estudioTitle = document.getElementById('estudioTitle');
    const estudioContent = document.getElementById('estudioContent');
    const estudioImg = document.getElementById('estudioImg');
    const closeBtn = document.getElementById('closeBtn');

    estudios.forEach(estudio => {
      estudio.addEventListener('click', function () {
        const title = this.getAttribute('data-title');
        const info = this.getAttribute('data-info');
        const imgSrc = this.style.backgroundImage.slice(5, -2);

        estudioTitle.innerText = title;
        estudioContent.innerText = info;
        estudioImg.src = imgSrc;

        // Ocultar todos los estudios menos el seleccionado
        estudios.forEach(e => {
          if (e !== estudio) e.classList.add('hidden');
        });

        estudioInfo.classList.remove('hidden');
        estudioInfo.classList.add('animate__animated', 'animate__fadeIn');
      });
    });

    closeBtn.addEventListener('click', function () {
      estudioInfo.classList.add('hidden');
      estudios.forEach(e => e.classList.remove('hidden'));
    });

    // Cerrar al hacer clic fuera del elemento
    document.addEventListener('click', function (event) {
      const isClickInside = estudioInfo.contains(event.target) || Array.from(estudios).some(estudio => estudio.contains(event.target));

      if (!isClickInside) {
        estudioInfo.classList.add('hidden');
        estudios.forEach(e => e.classList.remove('hidden'));
      }
    });
  });