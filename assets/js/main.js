
  // ===== responsive navbar
(function () {
  "use strict";
  // ===== responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  
  // ===== Close navbar when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navbarCollapse.contains(event.target);
    const isClickOnToggler = navbarToggler.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggler) {
      navbarToggler.classList.remove("navbarTogglerActive");
      navbarCollapse.classList.add("hidden");
    }
  });

 
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };



})();

  // ===== responsive navbar END


  

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




