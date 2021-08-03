import routes from '../api/api-routes.js';
import access from '../api/api-access.js';
import pokemonList from '../pokemons/pokemon-list.js';

export default class SetUp {
  template = document.querySelector('template');

  pokemonContainer = document.querySelector('.pokemons-section');

  init = async () => {
    const list = await this.getPokemons();
    this.appendPokemons(list, this.pokemonContainer);

    const domList = this.pokemonContainer.querySelectorAll('.pokemon-card');
    pokemonList.fill(domList);
    this.loadImages(domList);
  }

  getPokemons = async () => {
    const response = await access.getApi(routes.POKEMON, { limit: 9, offest: 0 });
    const pokemonList = response.results;
    return pokemonList;
  }

  appendPokemons = (list, target) => {
    list.forEach((pokemon) => {
      target.appendChild(this.createDomElement(pokemon, target));
    });
  }

  createDomElement = (element, target) => {
    const pokemon = this.template.content.firstElementChild.cloneNode(true);
    pokemon.querySelector('.pokemon-name').innerText = element.name;
    target.appendChild(pokemon);
    return pokemon;
  }

  getImage = async (name) => {
    const response = await access.getApi(`${routes.POKEMON}${name}`, {});
    return response.sprites.front_default;
  }

  setImage = async (element) => {
    element.querySelector('img').src = await this.getImage(element.querySelector('.pokemon-name').innerText);
  }

  loadImages = async (list) => {
    list.forEach((pokemon) => {
      this.setImage(pokemon);
    });
  }

  likeTest = () => {
    access.postApi(routes.LIKES, { item_id: 'pikachu' });
  }
}