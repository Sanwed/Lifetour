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
  setInterval(() => {
    const headerHeight = document.querySelector('[data-header]').clientHeight;
    heroOverlays.forEach((overlay) => {
      overlay.style.paddingTop = `${headerHeight + 80}px`;
    });
  }, 1);
};

export {initHero};
