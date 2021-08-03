import Pokemon from './pokemon-class.js';

class PokemonList {
  pokemons = [];

  fill = (referenceList) => {
    referenceList.forEach((reference) => {
      const name = reference.querySelector('.pokemon-name').innerText;
      const newPoke = new Pokemon(name, reference);
      this.add(newPoke);
    });
  }

  add = (pokemon) => {
    this.pokemons.push(pokemon);
  }
}

const list = new PokemonList();
export { list as default };