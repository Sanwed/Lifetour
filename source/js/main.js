import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initNav} from './modules/nav/nav.js';
import {initSliders} from './modules/sliders/sliders.js';
import {initVideo} from './modules/video/video.js';
import {initAudio} from './modules/audio/audio.js';
import {initForm} from './modules/forms/forms.js';
import {initMap} from './modules/map/map.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  initNav();
  initSliders();
  initVideo();
  initAudio();

  window.addEventListener('load', () => {
    initForm();
    initMap();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
