import { access } from '../api/api-access.js';
import routes from '../api/api-routes.js';
import pokedex from './pokedex.js';
import display from './display.js';
import { capital } from '../utils/utils.js';
import Actions from '../utils/actions.js';

class Modal {
  body = document.querySelector('body');

  modal = document.querySelector('.modal');

  title = document.querySelector('.modal__title');

  img = document.querySelector('.modal__img');

  pkmDescLi = document.querySelector('.modal__pkm-desc');

  pkmType1 = document.querySelector('.pkm-types__slot-1');

  pkmType2 = document.querySelector('.pkm-types__slot-2');

  commentsCounter = document.querySelector('.modal__comments-counter');

  commentsContainer = document.querySelector('.modal__comments-container');

  form = document.querySelector('.modal__form');

  close = document.querySelector('.modal__close');

  pokemon = {};

  onLoadingComplete = new Actions();

  constructor() {
    this.close.addEventListener('click', () => {
      this.body.classList.remove('overflow-none');
      this.modal.classList.remove('modal--active');
    });

    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const params = {
        item_id: this.pokemon.name,
        username: this.form.user_name.value,
        comment: this.form.user_message.value,
      };
      access.postApi(routes.COMMENTS, params);
      const comments = await this.getComments();
      this.displayComments(comments);
    });
  }

  openComments = async (pokemon) => {
    this.pokemon = pokemon;
    this.modal.classList.add('modal--active');
    this.title.innerHTML = capital(pokemon.name);
    this.img.src = pokemon.img;
    this.body.classList.add('overflow-none');
    const comments = await this.getComments();
    const types = await this.getType(pokemon);
    this.displayComments(comments);
    this.loadInfo(types);
  }

  displayComments = async (comments) => {
    this.commentsContainer.innerHTML = '';
    this.commentsCounter.textContent = '(0)';

    display.setElementCount(this.commentsCounter, comments.length);
    if (comments.length > 0) {
      comments.forEach((comment) => {
        const li = document.createElement('li');
        li.innerHTML = `<div>
              <span class="comments__name">${comment.username}:</span>
              <span class="comments__comment">${comment.comment}</span>
            </div>
            <span class="comments__date">${comment.creation_date}</span>`;
        this.commentsContainer.appendChild(li);
      });
    }
  }

  getComments = async () => {
    const comments = await access.getApi(routes.COMMENTS, { item_id: this.pokemon.name });
    if (comments !== '') {
      return comments;
    }
    return [];
  }

  getType = async (pokemon) => {
    const poke = await access.getApi(pokemon.getTypesUrl(), {});
    return poke.types;
  }

  loadInfo = async (types) => {
    this.pkmDescLi.textContent = '';
    this.pkmType1.textContent = '';
    this.pkmType2.textContent = '';
    const pkmDesc = await pokedex.getDesc(this.pokemon.name);
    this.pkmDescLi.textContent = pkmDesc;
    this.pkmType1.textContent = capital(types[0].type.name);
    if (types.length >= 2) {
      this.pkmType2.textContent = capital(types[1].type.name);
    }
  }
}

const modal = new Modal();
export { modal as default };
