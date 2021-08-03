class Modal {
  modal = document.querySelector('.modal');

  title = document.querySelector('.modal__title');

  img = document.querySelector('.modal__img');

  close = document.querySelector('.modal__close');

  constructor() {
    this.close.addEventListener('click', () => {
      this.modal.classList.remove('modal--active');
    });
  }

  openComments = (pokemon) => {
    this.modal.classList.add('modal--active');
    this.title.innerHTML = pokemon.name;
    this.img.src = pokemon.img;
  }
}

const modal = new Modal();
export { modal as default };
