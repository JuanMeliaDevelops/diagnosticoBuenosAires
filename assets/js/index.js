
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
