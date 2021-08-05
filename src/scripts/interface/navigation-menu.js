import display from './display.js';
import Actions from '../utils/actions.js';

class MobileMenu {
  pokemonsLink = document.querySelector('.pokemon-link');

  mobileMenuBtn = document.querySelector('.mobile-hamburger');

  menuContainer = document.querySelector('.nav-links');

  counter = document.querySelector('.pokemon-counter');

  portal = document.querySelector('.home');

  pokemonPage = document.querySelector('.pokemons-section');

  portalLink = document.querySelector('.portal-link');

  onPokemonDisplayClose = new Actions();

  currentPage = this.portalLink;

  navLinks = this.menuContainer.getElementsByTagName('a');

  constructor() {
    this.mobileMenuBtn.addEventListener('click', () => {
      display.toggleClass(this.menuContainer, 'd-none', 'show');
    });

    this.pokemonsLink.addEventListener('click', () => {
      this.setCurrentPage(this.pokemonsLink);
      display.toggleClass(this.menuContainer, 'd-none', 'show');
      display.toggleClass(this.portal, 'd-none');
      display.toggleClass(this.pokemonPage, 'd-none');
    });

    this.portalLink.addEventListener('click', () => {
      this.setCurrentPage(this.portalLink);
      display.toggleClass(this.menuContainer, 'd-none', 'show');
      display.toggleClass(this.portal, 'd-none');
      display.toggleClass(this.pokemonPage, 'd-none');
      this.onPokemonDisplayClose.doActions({});
    });
  }

  setCurrentPage = (current) => {
    Object.entries(this.navLinks).forEach((link) => {
      if (current === link[1]) {
        display.toggleClass(link[1], 'd-none');
      }
    });
  }
}

const mobileMenu = new MobileMenu();
export { mobileMenu as default };