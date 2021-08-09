import Actions from '../utils/actions.js';

export default class Pokemon {
  constructor(name, likes = 0, reference, img = '', types = [], source = '') {
    this.name = name;
    this.reference = reference;
    this.likes = likes;
    this.img = img;
    this.types = types;
    this.source = source;
  }

  onLike = new Actions();

  onLikeComplete = new Actions();

  onOpenComments = new Actions();

  setLike = (num) => {
    this.reference.querySelector('.like-text').innerText = num;
  }

  setImage = (img) => {
    this.reference.querySelector('img').src = img;
    this.img = img;
  }

  addLikes = (num = 1) => {
    this.likes += num;
    this.reference.querySelector('.like-text').innerText = this.likes;
  }

  getImage = () => {
    const id = this.source.url.charAt(34);
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return img;
  }

  getAnimation = () => {
    const id = this.source.url.charAt(34);
    const anim = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
    return anim;
  }

  getTypesUrl = () => {
    const id = this.source.url.charAt(34);
    const types = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return types;
  }

  resetAnimationState = () => {
  }
}