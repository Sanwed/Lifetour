import Swiper from '../../vendor/swiper.js';

const initSliders = () => {
  const heroSlider = new Swiper('.hero__slider', {
    loading: 'lazy',
    speed: 300,
    watchOverflow: true,
    watchSlidesProgress: true,
    slideVisibleClass: 'hero__slider-slide--visible',
    slideClass: 'hero__slider-slide',
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
      bulletClass: 'hero__slider-bullet',
      bulletActiveClass: 'hero__slider-bullet--active',
    },
    breakpoints: {
      320: {
        loop: true,
      },
      768: {
        loop: true,
        allowTouchMove: true,
      },
      1200: {
        loop: false,
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
        allowTouchMove: true,
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

  const studySlider = new Swiper('.study__slider', {
    loading: 'lazy',
    watchOverflow: true,
    slideClass: 'study__slide',
    slideVisibleClass: 'study__slide--visible',
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.study__slider-arrow--next',
      prevEl: '.study__slider-arrow--prev',
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  const reviewsSlider = new Swiper('.reviews__slider', {
    loading: 'lazy',
    watchOverflow: true,
    slideClass: 'reviews__slide',
    slideVisibleClass: 'reviews__slide--visible',
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.reviews__slider-arrow--next',
      prevEl: '.reviews__slider-arrow--prev',
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
        spaceBetween: 30,
      },
    },
  });

  if (window.innerWidth > 1199) {
    const advantagesSlider = new Swiper('.advantages__slider', {
      loop: true,
      loading: 'lazy',
      slideClass: 'advantages__slide',
      slideVisibleClass: 'advantages__slide--visible',
      watchSlidesProgress: true,
      allowTouchMove: false,
      spaceBetween: 30,
      slidesPerView: 3,
      navigation: {
        nextEl: '.advantages__slider-arrow--next',
        prevEl: '.advantages__slider-arrow--prev',
      },
    });
  }

  const gallerySlider = new Swiper('.gallery__slider', {
    loading: 'lazy',
    slideClass: 'gallery__slide',
    slideVisibleClass: 'gallery__slide--visible',
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.gallery__slider-arrow--next',
      prevEl: '.gallery__slider-arrow--prev',
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        allowTouchMove: true,
        spaceBetween: 3,
      },
      768: {
        allowTouchMove: true,
        spaceBetween: 5,
      },
      1200: {
        allowTouchMove: false,
        spaceBetween: 5,
      },
    },
  });
};

export {initSliders};
