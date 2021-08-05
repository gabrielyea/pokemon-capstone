import display from './display.js';

class MobileMenu {
  pokemonsLink = document.querySelector('.pokemon-link');

  mobileMenuBtn = document.querySelector('.mobile-hamburger');

  menuContainer = document.querySelector('.nav-links');

  counter = document.querySelector('.pokemon-counter');

  constructor() {
    this.mobileMenuBtn.addEventListener('click', () => {
      display.toggleClass(this.menuContainer, 'd-none', 'show');
    });
  }
}

const mobileMenu = new MobileMenu();
export { mobileMenu as default };