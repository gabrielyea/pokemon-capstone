class Modal {
  modal = document.querySelector('.modal');
  title = document.querySelector('.modal__title');

  openComments = (name) => {
    this.modal.classList.add('modal--active');
    this.title.innerHTML = name;
  }
}

const modal = new Modal();
export { modal as default };
