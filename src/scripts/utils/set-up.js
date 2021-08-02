import routes from '../api/api-routes.js';
import access from '../api/api-access.js';

export default class SetUp {
  template = document.querySelector('template');

  pokemonContainer = document.querySelector('.pokemons-section');

  pokemonList = [];

  getPokemons = async (i) => {
    console.log(i)
    const response = await access.requestApi(routes.POKEMON, i);
    const { id, name, sprites } = response;
    this.pokemonList = this.pokemonList.concat(i);
    console.log(this.pokemonList);
  }

  createPokemons = (list, target) => {
    Object.entries(list).forEach((pokemon) => {
      target.appendChild(this.createDomElement(pokemon));
    });
  }

  createDomElement = (element) => {
    const pokemon = this.template.content.firstElementChild.cloneNode(true);
    pokemon.querySelector('.pokemon-name').innerText = element.name;
    return pokemon;
  }

  fillArray = () => {
    for (let i = 1; i < 7; i += 1) {
      this.getPokemons(i);
    }
    this.createPokemons(this.pokemonList, this.pokemonContainer);
  }
}