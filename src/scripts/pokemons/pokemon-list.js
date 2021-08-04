import Pokemon from './pokemon-class.js';
import apiMicroverse from '../api/api-microverse.js';
import access from '../api/api-access.js';
import routes from '../api/api-routes.js';
import modal from '../interface/modal.js';
import display from '../interface/display.js';

// Pokemon list no longer works as a list, this would probably be better called:
// pokemon controller, pokemon manager, page manager or something like that.
class PokemonList {
  pokemons = [];

  fill = (referenceList) => {
    referenceList.forEach((reference) => {
      const name = reference.querySelector('.pokemon-name').innerText;
      const newPoke = new Pokemon(name, 0, reference);
      this.add(newPoke);

      // all this should probably be on a decorator, maybe we can do something in the decorator
      // so id adds all extra callbacks?
      newPoke.onLike.addActions(
        () => access.postApi(
          routes.LIKES,
          { item_id: newPoke.name },
          () => newPoke.onLikeComplete.doActions({}),
        ),
        newPoke.addLikes,
        () => display.toggleLoadingState(reference.querySelector('.heart-icon')),
        () => display.toggleDisable(reference.querySelector('.like-btn')),
      );

      newPoke.onLikeComplete.addActions(() => display.toggleLoadingState(reference.querySelector('.heart-icon')),
        () => display.toggleDisable(reference.querySelector('.like-btn')));

      newPoke.onOpenComments.addActions(() => modal.openComments(newPoke));
    });
    this.loadData();
  }

  add = (pokemon) => {
    this.pokemons.push(pokemon);
  }

  // We need to fix this... super ugly, maybe a loading class?
  setLike = async (poke) => {
    const extLikes = await apiMicroverse.getLikes(poke.name);
    poke.addLikes(extLikes);
  }

  getData = async (name) => {
    const response = await access.getApi(`${routes.POKEMON}${name}`, {});
    return response;
  }

  setData = async (pokemon) => {
    const data = await this.getData(pokemon.name);
    pokemon.setImage(data.sprites.front_default);
    pokemon.types = data.types;
  }

  loadData = () => {
    this.pokemons.forEach((pokemon) => {
      this.setData(pokemon);
      this.setLike(pokemon);
    });
  }
}

const list = new PokemonList();
export { list as default };
