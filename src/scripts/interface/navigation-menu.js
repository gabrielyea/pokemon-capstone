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
    this.setCurrentPage(this.portalLink);

    this.mobileMenuBtn.addEventListener('click', () => {
      display.toggleClass(this.menuContainer, 'd-none', 'show');
    });

    this.pokemonsLink.addEventListener('click', (e) => {
      this.setCurrentPage(this.pokemonsLink);
      this.goToSection(this.currentPage, e.target);
    });

    this.portalLink.addEventListener('click', (e) => {
      this.setCurrentPage(this.portalLink);
      this.goToSection(this.currentPage, e.target);
      this.onPokemonDisplayClose.doActions({});
    });
  }

  setCurrentPage = (current) => {
    Object.entries(this.navLinks).forEach((link) => {
      display.clearClass(link[1], 'selected');
      if (current === link[1]) {
        display.toggleClass(link[1], 'selected');
      }
    });
  }

  goToSection = (current, target) => {
    if (current === target) {
      display.toggleClass(this.menuContainer, 'd-none', 'show');
      this.currentPage = target;
      return;
    }
    display.toggleClass(this.menuContainer, 'd-none', 'show');
    display.toggleClass(this.portal, 'd-none');
    display.toggleClass(this.pokemonPage, 'd-none');
    this.currentPage = target;
  }
}

const mobileMenu = new MobileMenu();
export { mobileMenu as default };
