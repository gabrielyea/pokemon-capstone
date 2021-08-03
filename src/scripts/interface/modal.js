import access from '../api/api-access.js';
import routes from '../api/api-routes.js';

class Modal {
  modal = document.querySelector('.modal');

  title = document.querySelector('.modal__title');

  img = document.querySelector('.modal__img');

  commentsContainer = document.querySelector('.modal__comments-container');

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
      this.displayComments();
    });
  }

  openComments = async (pokemon) => {
    this.pokemon = pokemon;
    this.modal.classList.add('modal--active');
    this.title.innerHTML = pokemon.name;
    this.img.src = pokemon.img;
    this.displayComments();
  }

  displayComments = async () => {
    this.commentsContainer.innerHTML = '';
    const comments = await access.getApi(routes.COMMENTS, { item_id: this.pokemon.name });
    if (comments.length !== undefined) {
      comments.forEach((comment) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="comments__name">${comment.username}:</span>
          <span class="comments__comment">${comment.comment}</span>
          <span class="comment__date">${comment.creation_date}</span>`;
        this.commentsContainer.appendChild(li);
      });
    }
  }
}

const modal = new Modal();
export { modal as default };
