import {initAudio, pauseAudio} from './audio.js';
import {disableVideo, initVideo} from './video.js';

const heroSliderPagination = document.querySelector('.hero__slider-pagination');

const initHero = () => {
  initAudio();
  initVideo();
  heroSliderPagination.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('hero__slider-bullet')) {
      disableVideo();
      pauseAudio();
    }
  });

  const heroOverlays = document.querySelectorAll('.hero__overlay');
  const breakpoints = {
    mobile: window.matchMedia(`(min-width:320px)`),
    tablet: window.matchMedia(`(min-width:768px)`),
    desktop: window.matchMedia(`(min-width:1200px)`),
  };
  setInterval(() => {
    const headerHeight = document.querySelector('[data-header]').clientHeight;
    heroOverlays.forEach((overlay) => {
      if (breakpoints.mobile.matches) {
        overlay.style.paddingTop = `${headerHeight + 68}px`;
      }
      if (breakpoints.tablet.matches) {
        overlay.style.paddingTop = `${headerHeight + 100}px`;
      }
      if (breakpoints.desktop.matches) {
        overlay.style.paddingTop = `${headerHeight + 80}px`;
      }

    });
  }, 1);
};

export {initHero};
