// header
$(document).on("click", ".component-header .menu-button", function () {
  $(".component-header .right").toggleClass("active");
});

// page home
var swiper = new Swiper(".page-home .promotion-slider", {
  slidesPerView: 4,
  spaceBetween: 47,
  pagination: {
    el: ".page-home .promotion-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".page-home .promotion .swiper-button-next",
    prevEl: ".page-home .promotion .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 2,
    },

    1025: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

$(document).on("click", ".page-home .promotion .button-next", function () {
  $(".page-home .promotion .swiper-button-next").click();
});
$(document).on("click", ".page-home .promotion .button-prev", function () {
  $(".page-home .promotion .swiper-button-prev").click();
});
