  
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

  