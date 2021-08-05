import access from '../api/api-access.js';
import routes from '../api/api-routes.js';
import decorator from '../utils/decorator.js';
import display from './display.js';
import mobileMenu from './navigation-menu.js';

class HomePage {
  loadedLikes = [];

  start = async (dataList) => {
    this.setAnimations(dataList);
    this.loadedLikes = await this.getLikes();
    this.loadData(dataList);
  }

  loadData = (dataList) => {
    dataList.forEach((pokemon) => {
      this.setPokemonData(pokemon);
      this.setLikeData(pokemon);
    });
  }

  setLikeData = (poke) => {
    const found = this.loadedLikes.find((pokemon) => pokemon.item_id === poke.name);
    if (found) {
      poke.addLikes(found.likes);
    } else {
      poke.addLikes(0);
    }
  }

  getLikes = async () => {
    try {
      const list = await access.getApi(routes.LIKES, {});
      return list;
    } catch (error) {
      return [];
    }
  };

  getData = async (pokemon) => {
    const response = await access.getApi(`${routes.POKEMON}${pokemon.name}`, {});
    return response;
  }

  setPokemonData = async (pokemon) => {
    pokemon.setImage(pokemon.getImage());
    pokemon.types = pokemon.getTypes();
  }

  setAnimations = (dataList) => {
    const options = {
      mainQuery: '.overlay',
      animationName: 'blurOut',
      callback: display.toggleLoaded,
      toggleElement: '.pokemon-img',
    };
    dataList.forEach((pokemon) => {
      decorator.addCallbackOnAnimationEnd(pokemon.reference, options);
      mobileMenu.onPokemonDisplayClose.addActions(() => this.resetAnimation(pokemon));
    });
  }

  resetAnimation = (pokemon) => {
    pokemon.reference.querySelector('.pokemon-img').classList.remove('loaded');
  }
}

const homePage = new HomePage();
export { homePage as default };
