import routes from '../api/api-routes.js';
import { access } from '../api/api-access.js';
import { cleanString } from '../utils/utils.js';

class Pokedex {
  getData = async (name) => {
    const response = await access.getApi(`${routes.POKEDEX}${name}`, {});
    return response;
  }

  getDesc = async (name) => {
    const response = await this.getData(name);
    const result = cleanString(response.flavor_text_entries[1].flavor_text);
    return result;
  }
}

const pokedex = new Pokedex();
export { pokedex as default };