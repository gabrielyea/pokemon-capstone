import '../scss/main.scss';
import SetUp from './utils/set-up.js';

const setUp = new SetUp();

window.addEventListener('load', () => {
  setUp.fillArray();
});
