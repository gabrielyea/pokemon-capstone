import access from './api-access.js';
import routes from './api-routes.js';

class ApiMicroverse {
  setLike = (id) => {
    access.postApi(routes.LIKES, { item_id: id });
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
}

const apiMicroverse = new ApiMicroverse();
export { apiMicroverse as default };
