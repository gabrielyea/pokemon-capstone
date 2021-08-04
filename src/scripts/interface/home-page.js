import access from '../api/api-access.js';
import routes from '../api/api-routes.js';

class HomePage {
  start = (data) => {
    this.loadData(data);
  }

  loadData = (data) => {
    data.forEach((pokemon) => {
      this.setPokemonData(pokemon);
      this.setLikeData(pokemon);
    });
  }

  setLikeData = async (poke) => {
    const extLikes = await this.getLikes(poke.name);
    poke.addLikes(extLikes);
  }

  getLikes = async (id) => {
    try {
      const list = await access.getApi(routes.LIKES, {});
      const found = list.find((element) => element.item_id === id).likes;
      return found;
    } catch (error) {
      return 0;
    }
  };

  getData = async (name) => {
    const response = await access.getApi(`${routes.POKEMON}${name}`, {});
    return response;
  }

  setPokemonData = async (pokemon) => {
    const data = await this.getData(pokemon.name);
    pokemon.setImage(data.sprites.front_default);
    pokemon.types = data.types;
  }
}

const homePage = new HomePage();
export { homePage as default };
