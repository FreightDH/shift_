import '../scss/style.scss';
import { isWebp } from './files/helpers.js';
import { initMenu } from './files/burger.js';

window.addEventListener('load', () => {
  isWebp();
  initMenu();
});
