let swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 70,
  maxWidth: 470,

  breakpoints: {
    620: {
      width: 690,
    },
    1060: {
      width: 990,
    },
    1440: {
      width: 1350,
      slidesPerView: 2,
      spaceBetween: 155,
    },
  },
  loop: true,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
