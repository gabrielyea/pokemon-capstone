class ApiRoutes {
  STARTPOKEMON ='https://pokeapi.co/api/v2/pokemon/?limit=6&offset=0';

  POKEMON ='https://pokeapi.co/api/v2/pokemon/';

  MAIN = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/'

  MAINAPP = `${this.MAIN}apps/azUYOrcqyZjOBqrEjCpk/`;

  LIKES = `${this.MAINAPP}likes/`;

  COMMENTS = `${this.MAINAPP}comments/`
}

const routes = new ApiRoutes();
export { routes as default };