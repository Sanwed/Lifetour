import Swiper from '../../vendor/swiper.js';

const initSliders = () => {
  const heroSlider = new Swiper('.hero__slider', {
    loading: 'lazy',
    loop: true,
    speed: 300,
    watchOverflow: true,
    allowTouchMove: false,
    slideClass: 'hero__slider-slide',
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
      bulletClass: 'hero__slider-bullet',
      bulletActiveClass: 'hero__slider-bullet--active',
    },
  });
};

export {initSliders};
