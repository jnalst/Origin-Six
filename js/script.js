/* SWIPPER JS  -- GALERIA -- */
const swiper = new Swiper('.swiper', {
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
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    }, 1100: {
      slidesPerView: 2,
      spaceBetween: 20}

  }
})