const axios = require("axios");
// const base_uel = "https://deltrix.herokuapp.com/"
//const base_uel = "http://66.70.215.18:8000/";
const base_uel = "http://localhost:8000/"; //  #=> #=> #=> LOCALHOST
// http://localhost:3000/admin/Products
export const post = (body, url) => {
  return new Promise((resolve, reject) => {
    axios
      .post(base_uel + url, body)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const get = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(base_uel + url)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const put = (body, url) => {
  return new Promise((resolve, reject) => {
    axios
      .put(base_uel + url, body)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const _delete = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(base_uel + url)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
