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
};

export {initHero};
