/* SWIPPER JS  -- GALERIA -- */
const swiper = new Swiper(".swiper", {
  // Default parameters
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

// -----------------------------------------------

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", "true");
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
