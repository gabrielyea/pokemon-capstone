import Pokemon from './pokemon-class.js';
import decorator from '../utils/decorator.js';
import { capital } from '../utils/utils.js';

// Pokemon list no longer works as a list, this would probably be better called:
// pokemon controller, pokemon manager, page manager or something like that.
class PokemonList {
  pokemons = [];

  fill = ({ domReference, dataList }, onListFilled) => {
    domReference.forEach((reference, index) => {
      const name = reference.querySelector('.pokemon-name').innerText;
      reference.querySelector('.pokemon-name').innerText = capital(name);
      const newPoke = new Pokemon(name, 0, reference, '', '', dataList[index]);
      this.add(newPoke);
      decorator.setActions(newPoke);
    });
    onListFilled(this.pokemons);
  }

  add = (pokemon) => {
    this.pokemons.push(pokemon);
  }
}

const list = new PokemonList();
export { list as default };
