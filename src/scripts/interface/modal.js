import access from '../api/api-access.js';
import routes from '../api/api-routes.js';

class Modal {
  modal = document.querySelector('.modal');

  title = document.querySelector('.modal__title');

  img = document.querySelector('.modal__img');

  form = document.querySelector('.modal__form');

  close = document.querySelector('.modal__close');

  pokemon = {};

  constructor() {
    this.close.addEventListener('click', () => {
      this.modal.classList.remove('modal--active');
    });

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const params = {
        item_id: this.pokemon.name,
        username: this.form.user_name.value,
        comment: this.form.user_message.value,
      };
      access.postApi(routes.COMMENTS, params);
    });
  }

  openComments = (pokemon) => {
    this.pokemon = pokemon;
    this.modal.classList.add('modal--active');
    this.title.innerHTML = pokemon.name;
    this.img.src = pokemon.img;
  }
}

const modal = new Modal();
export { modal as default };
