import display from './display.js';
import Actions from '../utils/actions.js';

class MobileMenu {
  pokemonsLink = document.querySelector('.pokemon-link');

  mobileMenuBtn = document.querySelector('.mobile-hamburger');

  pokeBall = document.querySelector('.pokeball-icon')

  menuContainer = document.querySelector('.nav-links');

  counter = document.querySelector('.pokemon-counter');

  portal = document.querySelector('.home');

  pokemonPage = document.querySelector('.pokemons-section');

  portalLink = document.querySelector('.portal-link');

  onPokemonDisplayClose = new Actions();

  currentPage = this.portalLink;

  navLinks = this.menuContainer.getElementsByTagName('a');

  isMenuOpen = false;

  constructor() {
    this.setCurrentPage(this.portalLink);

    this.mobileMenuBtn.addEventListener('click', () => {
      this.displayMenu();
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
      this.displayMenu();
      this.currentPage = target;
      return;
    }
    this.displayMenu();
    display.toggleClass(this.portal, 'd-none');
    display.toggleClass(this.pokemonPage, 'd-none');
    this.currentPage = target;
  }

  animatePokeball = () => {
    if (this.isMenuOpen) {
      display.clearClass(this.pokeBall, 'open');
      display.addClass(this.pokeBall, 'close');
      return;
    }
    display.clearClass(this.pokeBall, 'close');
    display.addClass(this.pokeBall, 'open');
  }

  displayMenu = () => {
    display.toggleClass(this.menuContainer, 'd-none', 'show');
    this.animatePokeball();
    this.isMenuOpen = !this.isMenuOpen;
  }
}

const mobileMenu = new MobileMenu();
export { mobileMenu as default };
