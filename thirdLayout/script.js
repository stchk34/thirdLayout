  var mySwiper = new Swiper ('.swiper-container', {
  fadeEffect: { crossFade: true },
  loop:true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 1000,
  slidersPerView: 1,
  effect: "fade",
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',}


});