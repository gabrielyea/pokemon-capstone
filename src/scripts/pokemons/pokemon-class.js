import Actions from '../utils/actions.js';

export default class Pokemon {
  constructor(name, likes = 0, reference, img = '', types = []) {
    this.name = name;
    this.reference = reference;
    this.likes = likes;
    this.img = img;
    this.types = types;
  }

  onLike = new Actions();

  onOpenComments = new Actions();

  setLike = (num) => {
    this.reference.querySelector('.like-text').innerText = num;
  }

  setImage = (img) => {
    this.reference.querySelector('img').src = img;
    this.img = img;
  }
}