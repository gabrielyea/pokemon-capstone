class ApiAccess {
  request = (url, params = {}, method = 'GET') => {
    let options = {
      method,
    };
    if ('GET' === method) {
      url += '?' + (new URLSearchParams(params)).toString();
    } else {
      options.body = JSON.stringify(params);
    }

    return fetch(url, options);
  };

  get = async (url, params) => {
    const response = await this.request(url, params, 'GET');
    return response.json();
  };

  post = async (url, params) => {
    const response = await this.request(url, params, 'POST');
    return response.json();
  };

  requestApi = async (url, id) => {
    const response = await fetch(`${url}/${id}`);
    return response.json();
  }
}

const access = new ApiAccess();
export { access as default };
