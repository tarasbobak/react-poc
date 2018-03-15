/**
 * Created by spaliichuk on 3/13/18.
 * Promise based HTTP client for the browser and node.js
 * This example demonstrate how use custom httpService
 */

import axios from 'axios';

class HttpService {
  get(url, options) {
    return axios.get(url, options)
      .catch((error) => {
        console.log(error);
      });
  }

  post(url, data, options) {
    return axios.post(url, data, options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  put(url, data, options) {
    axios.put(url, data, options)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  delete(url, options) {
    axios.delete(url, options)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  create(options) {
    axios.create(options);
  }
}

const config = {
  headers: {
    'X-My-Custom-Header': 'Header-Value',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
};

const user = {
  firstName: 'Eduard',
  lastName: 'Petrovich',
  birthday: new Date()
};

const httpService = new HttpService();

httpService.get('https://api.github.com/users/codeheaven-io', config);
httpService.post('/save', user, config);
httpService.put('https://api.github.com/users', user);
httpService.delete('https://api.github.com/users/users/3');

// You can create a new instance of httpService with a custom config.

const instanceConfig = {
  baseURL: 'https://api.github.com/api/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'Header-Value' }
};

httpService.create(instanceConfig);


export default HttpService;
