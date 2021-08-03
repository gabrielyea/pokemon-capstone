import Actions from '../utils/actions.js';

export default class Pokemon {
  constructor(name, likes = 0, reference) {
    this.name = name;
    this.reference = reference;
    this.likes = likes;
  }

  onLike = new Actions();

  onOpenComments = new Actions();

  setLike = (num) => {
    this.reference.querySelector('.like-text').innerText = num;
  }

  setImage = (img) => {
    this.reference.querySelector('img').src = img;
  }
}