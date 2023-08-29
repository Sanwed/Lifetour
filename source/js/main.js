import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initNav} from './modules/nav/nav.js';
import {initSliders} from './modules/sliders/sliders.js';
import {initForm} from './modules/forms/forms.js';
import {initMap} from './modules/map/map.js';
import {initHero} from './modules/hero/hero.js';
import {deferCss} from './utils/defer-css.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  deferCss();

  window.addEventListener('load', () => {
    initNav();
    initHero();
    initSliders();
    initForm();
    initMap();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
