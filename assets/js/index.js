  
  // ======= Sticky navbar
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelectorAll(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    if(logo.length) {
      // === logo change
      if (ud_header.classList.contains("sticky")) {
        document.querySelector(".header-logo").src =
        "assets/images/logo/logo_dba.png"
      } else {
        document.querySelector(".header-logo").src =
        "assets/images/logo/logo_dba_blanco.png"
      }
    }

    if (document.documentElement.classList.contains("dark")) {
      if(logo.length) {
        // === logo change
        if (ud_header.classList.contains("sticky")) {
          document.querySelector(".header-logo").src =
          "assets/images/logo/logo_dba_blanco.png"
        } 
      }
    }

      // ======= Sticky navbar END
      

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

/* Scroll Down a estudios  Animacion END*/

      // ====== scroll to top js
    
    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };


   function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };

  // ====== scroll to top js END



  

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
      const idEstudio = this.getAttribute('id');

  /*     window.location.href = `#${idEstudio}`; */

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

// Estudios Info desplegar END