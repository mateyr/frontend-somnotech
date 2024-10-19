// TODO: Cuadno se implemente la authenticación
// import store from "Redux/store";

// const getHeaders = () => {
//   const apiKey = "api_key";

//   const getToken = () => {
//     const userData = store.getState()?.userData;
//     return userData.auth_token || null;
//   };

//   return {
//     "Content-Tyoe": "application/json",
//     Authorization: `Bearer ${getToken()}`
//     "App-key": apiKey
//   };
// };

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};

const BASE_URL = "http://192.168.195.248:8000/";

class ApiMethods {
  static apiRequest(method: string, url: string, body = {}) {
    url = `${BASE_URL}${url}`;
    const options = {
      method,
      headers: getHeaders(),
    };

    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  }
  static get(url: string) {
    return this.apiRequest("POST", url);
  }
}

export default ApiMethods;
