import { access } from '../api/api-access.js';
import routes from '../api/api-routes.js';
import pokedex from './pokedex.js';
import display from './display.js';
import { capital } from '../utils/utils.js';

class Modal {
  body = document.querySelector('body');

  modal = document.querySelector('.modal');

  card = document.querySelector('.modal__card');

  title = document.querySelector('.modal__title');

  img = document.querySelector('.modal__img');

  loadingImg = document.querySelector('.psyduck-img');

  pkmDescLi = document.querySelector('.modal__pkm-desc');

  pkmType1 = document.querySelector('.pkm-types__slot-1');

  pkmType2 = document.querySelector('.pkm-types__slot-2');

  commentsCounter = document.querySelector('.modal__comments-counter');

  commentsContainer = document.querySelector('.modal__comments-container');

  form = document.querySelector('.modal__form');

  close = document.querySelector('.modal__close');

  submitBtn = document.querySelector('.submit-btn');

  pokemon = {};

  constructor() {
    this.close.addEventListener('click', () => {
      this.body.classList.remove('overflow-none');
      this.modal.classList.remove('modal--active');
      this.resetAnimationStates();
    });

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      display.toggleDisable(this.submitBtn);
      this.submitComment();
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

  displayComments = async () => {
    const comments = await this.getComments();
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
    const comments = await access.getApi(routes.COMMENTS,
      { item_id: this.pokemon.name });
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
    this.startLoadedAniamtion();
  }

  startLoadedAniamtion = () => {
    display.addClass(this.loadingImg, 'hide');
    display.toggleClass(this.card, 'd-none', 'loaded');
  }

  resetAnimationStates = () => {
    display.clearClass(this.loadingImg, 'hide');
    display.toggleClass(this.card, 'd-none', 'loaded');
  }

  disableComments = () => {
    display.toggleDisable(this.submitBtn);
  }

  submitComment = async () => {
    const params = {
      item_id: this.pokemon.name,
      username: this.form.user_name.value,
      comment: this.form.user_message.value,
    };
    await access.postApi(routes.COMMENTS, params, this.displayComments);
    display.toggleDisable(this.submitBtn);
    this.form.reset();
  }
}

const modal = new Modal();
export { modal as default };
