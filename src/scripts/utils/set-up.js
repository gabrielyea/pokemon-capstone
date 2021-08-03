import routes from '../api/api-routes.js';
import access from '../api/api-access.js';

export default class SetUp {
  template = document.querySelector('template');

  pokemonContainer = document.querySelector('.pokemons-section');

  init = async () => {
    const list = await this.getPokemons();
    this.appendPokemons(list, this.pokemonContainer);
  }

  getPokemons = async () => {
    const response = await access.getApi(routes.POKEMON, { limit: 9, offest: 0 });
    const pokemonList = response.results;
    return pokemonList;
  }

  appendPokemons = async (list, target) => {
    list.forEach((pokemon) => {
      this.createDomElement(pokemon, target);
    });
  }

  createDomElement = async (element, target) => {
    const pokemon = this.template.content.firstElementChild.cloneNode(true);
    pokemon.querySelector('.pokemon-name').innerText = element.name;
    pokemon.querySelector('img').src = await this.getImage(element.name);
    target.appendChild(pokemon);
    return pokemon;
  }

  getImage = async (name) => {
    const response = await access.getApi(`${routes.POKEMON}${name}`, {});
    return response.sprites.front_default;
  }

  likeTest = () => {
    access.postApi(routes.LIKES, { item_id: 'pikachu' });
  }
}