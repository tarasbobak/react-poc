import HttpService from './httpService';

class UsersApiService {
  constructor() {
    this.http = new HttpService();
  }

  getPopularRepositories() {
    const url = 'https://api.github.com/users?since=135';

    return this.http.get(url)
      .then((result) => {
        console.log('???', result);
        console.log(result.data);
        return result.data;
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  }
}

export default UsersApiService;

