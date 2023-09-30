var swiper = new Swiper(".promotion-slider", {
  slidesPerView: 4,
  spaceBetween: 47,
  pagination: {
    el: ".promotion-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".promotion .swiper-button-next",
    prevEl: ".promotion .swiper-button-prev",
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

$(document).on("click", ".promotion .button-next", function () {
  $(".promotion .swiper-button-next").click();
});
$(document).on("click", ".promotion .button-prev", function () {
  $(".promotion .swiper-button-prev").click();
});
