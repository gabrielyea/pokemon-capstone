import Pokemon from './pokemon-class.js';

class PokemonList {
  pokemons = [];

  fill = (referenceList) => {
    referenceList.forEach((pokemon) => {
      const name = pokemon.querySelector('.pokemon-name').innerText;
      const newPoke = new Pokemon(name, pokemon);
      this.pokemons.push(newPoke);
    });
  }

  add = ({ pokmeon }) => {
    this.pokemons.push(pokmeon);
  }
}

const list = new PokemonList();
export { list as default };