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

  getData = async (pokemon) => {
    const response = await access.getApi(`${routes.POKEMON}${pokemon.name}`, {});
    return response;
  }

  setPokemonData = async (pokemon) => {
    pokemon.setImage(pokemon.getImage());
    pokemon.types = pokemon.getTypes();
  }
}

const homePage = new HomePage();
export { homePage as default };
