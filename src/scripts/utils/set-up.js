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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of a742699 (Revert "Get and set likes from api")

    const domList = this.pokemonContainer.querySelectorAll('.pokemon-card');
    pokemonList.fill(domList);
    decorator.makeLike(pokemonList.pokemons);
<<<<<<< HEAD
=======
>>>>>>> dev
=======
    // this.loadImages(domList);
>>>>>>> parent of a742699 (Revert "Get and set likes from api")
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
  getImage = async (name) => {
    const response = await access.requestApi(routes.POKEMON, name);
    return response.sprites.front_default;
  }
>>>>>>> dev
=======
  // getImage = async (name) => {
  //   const response = await access.getApi(`${routes.POKEMON}${name}`, {});
  //   return response.sprites.front_default;
  // }

  // setImage = async (element) => {
  //   element.querySelector('img').src = await this.getImage(element.querySelector('.pokemon-name').innerText);
  // }

  // loadImages = (list) => {
  //   list.forEach((pokemon) => {
  //     this.setImage(pokemon);
  //   });
  // }
>>>>>>> parent of a742699 (Revert "Get and set likes from api")
}