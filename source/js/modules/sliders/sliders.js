import Swiper from '../../vendor/swiper.js';

const initSliders = () => {
  const heroSlider = new Swiper('.hero__slider', {
    loading: 'lazy',
    loop: true,
    speed: 300,
    watchOverflow: true,
    slideClass: 'hero__slider-slide',
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
      bulletClass: 'hero__slider-bullet',
      bulletActiveClass: 'hero__slider-bullet--active',
    },
    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });

  const toursSlider = new Swiper('.tours__slider', {
    loading: 'lazy',
    watchOverflow: true,
    slideClass: 'tours__slide',
    navigation: {
      nextEl: '.tours__slider-arrow--next',
      prevEl: '.tours__slider-arrow--prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};

export {initSliders};
