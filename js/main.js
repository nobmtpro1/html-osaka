AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

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

var swiper2 = new Swiper(".page-home .banner-slider", {
  slidesPerView: 1,
  spaceBetween: 47,
  pagination: {
    el: ".page-home .banner-slider .swiper-pagination",
    clickable: true,
  },
});

$(document).on("click", ".page-home .promotion .button-next", function () {
  $(".page-home .promotion .swiper-button-next").click();
});
$(document).on("click", ".page-home .promotion .button-prev", function () {
  $(".page-home .promotion .swiper-button-prev").click();
});
