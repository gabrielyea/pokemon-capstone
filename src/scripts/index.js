import '../scss/main.scss';
import pokedex from './interface/pokedex';
import SetUp from './utils/set-up.js';

const setUp = new SetUp();

window.addEventListener('load', () => {
  setUp.init();
  pokedex.getData('charmander');
});
