class ApiAccess {
  requestApi = async (url, id) => {
    const response = await fetch(`${url}/${id}`);
    return response.json();
  }
}

const access = new ApiAccess();
export { access as default };
