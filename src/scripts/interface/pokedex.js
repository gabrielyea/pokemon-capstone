import routes from '../api/api-routes.js';
import access from '../api/api-access.js';

class Pokedex {
  getData = async (name) => {
    const response = await access.getApi(`${routes.POKEDEX}${name}`, {});
    return response;
  }

  transformDesc = (response) => {
    let pkmDesc = response.flavor_text_entries[1].flavor_text;
    pkmDesc = pkmDesc.replace('\n', ' ');
    pkmDesc = pkmDesc.replace('\f', ' ');
    return pkmDesc;
  }

  getDesc = async (name) => {
    const response = await this.getData(name);
    const pkmDesc = this.transformDesc(response);
    return pkmDesc;
  }
}

const pokedex = new Pokedex();
export { pokedex as default };