import routes from '../api/api-routes.js';
import access from '../api/api-access.js';
import pokemonList from '../pokemons/pokemon-list.js';
import decorator from './decorator.js';

export default class SetUp {
  template = document.querySelector('template');

  pokemonContainer = document.querySelector('.pokemons-section');

  init = async () => {
    const list = await this.getPokemons();
    this.appendPokemons(list, this.pokemonContainer);

    const domList = this.pokemonContainer.querySelectorAll('.pokemon-card');
    pokemonList.fill(domList);
    decorator.makeLike(pokemonList.pokemons);
  }

  getPokemons = async () => {
    const response = await access.getApi(routes.POKEMON, { limit: 6, offset: 0 });
    return response.results;
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
}