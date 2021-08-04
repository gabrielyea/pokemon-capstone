import access from './api-access.js';
import routes from './api-routes.js';

class ApiMicroverse {
  setLike = (id) => {
    access.postApi(routes.LIKES, { item_id: id });
  }

  getLikes = async (id) => {
    const list = await access.getApi(routes.LIKES, {});
    return list.find((element) => element.item_id === id).likes;
  };
}

const apiMicroverse = new ApiMicroverse();
export { apiMicroverse as default };