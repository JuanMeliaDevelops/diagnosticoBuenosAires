// ======= Sticky navbar

function handleStickyNavbar() {
  const ud_header = document.querySelector(".ud-header");
  if (!ud_header) return;

  const sticky = ud_header.offsetTop;
  const logo = document.querySelector(".header-logo");

  if (window.pageYOffset > sticky) {
    ud_header.classList.add("sticky");
  } else {
    ud_header.classList.remove("sticky");
  }

  if (logo) {
    if (ud_header.classList.contains("sticky")) {
      logo.src = "assets/images/logo/logo_dba.png";
    } else {
      logo.src = "assets/images/logo/logo_dba_blanco.png";
    }
  }

  if (document.documentElement.classList.contains("dark")) {
    if (logo) {
      if (ud_header.classList.contains("sticky")) {
        logo.src = "assets/images/logo/logo_dba_blanco.png";
      }
    }
  }
}
// ======= Sticky navbar END


/* Scroll Down a estudios Animacion */

const scrollDown = document.getElementById("scroll-down");

scrollDown.addEventListener("mouseenter", function (event) {
  scrollDown.classList.add("animate__animated", "animate__bounce");
});

scrollDown.addEventListener("mouseleave", function (event) {
  setTimeout(function () {
    scrollDown.classList.remove("animate__animated", "animate__bounce");
  }, 1200);
});

/* Scroll Down a estudios Animacion END */


window.onscroll = function () {
  handleStickyNavbar();
};