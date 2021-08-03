import Pokemon from './pokemon-class.js';
import apiMicroverse from '../api/api-microverse.js';
import access from '../api/api-access.js';
import routes from '../api/api-routes.js';

class PokemonList {
  pokemons = [];

  fill = (referenceList) => {
    referenceList.forEach((reference) => {
      const name = reference.querySelector('.pokemon-name').innerText;
      const newPoke = new Pokemon(name, 0, reference);
      this.add(newPoke);
      newPoke.onLike.addActions(() => apiMicroverse.setLike(name));
    });
    this.loadLikes();
    this.loadImages();
  }

  add = (pokemon) => {
    this.pokemons.push(pokemon);
  }

  loadLikes = () => {
    this.pokemons.forEach((poke) => {
      this.setLike(poke);
    });
  }

  setLike = async (poke) => {
    const extLikes = await apiMicroverse.getLikes(poke.name);
    poke.setLike(extLikes);
  }

  getImage = async (name) => {
    const response = await access.getApi(`${routes.POKEMON}${name}`, {});
    return response.sprites.front_default;
  }

  setImage = async (element) => {
    const img = await this.getImage(element.reference.querySelector('.pokemon-name').innerText);
    element.setImage(img);
  }

  loadImages = () => {
    this.pokemons.forEach((pokemon) => {
      this.setImage(pokemon);
    });
  }
}

const list = new PokemonList();
export { list as default };
