import Swiper from 'swiper/bundle';

jQuery(document).ready(function () {

// Swiper

if (jQuery('.heroswiper').length) {
  // Site Banner
  new Swiper('.heroswiper', {
    direction:'horizontal',
    loop: true,
    watchOverflow: true,

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  });

}

if (jQuery('.listings-swiper').length) {
new Swiper(".listings-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

if (jQuery('.city-swiper').length) {
   new Swiper(".city-swiper", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
 }

if (jQuery('.review-swiper').length) {
   new Swiper(".review-swiper", {
        direction:'horizontal',
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

}
});