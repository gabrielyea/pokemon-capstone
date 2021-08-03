class ApiAccess {
  requestApi = (url, params = {}, method = 'GET') => {
    const options = {
      method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    if (method === 'GET') {
      url += `?${(new URLSearchParams(params)).toString()}`;
    } else {
      options.body = JSON.stringify(params);
    }

    return fetch(url, options);
  };

  getApi = async (url, params) => {
    const response = await this.requestApi(url, params, 'GET');
    return response.json();
  };

  postApi = async (url, params) => {
    const response = await this.requestApi(url, params, 'POST');
    return response;
  };
}

const access = new ApiAccess();
export { access as default };