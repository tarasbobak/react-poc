import axios from 'axios';
import dependencies from '../../src/app/dependencies';

class UsersApiService {
  constructor() {
    this.logger = dependencies.get('loggerService');
  }

  getPopularRepositories() {
    const url = 'https://api.github.com/users?since=135';
    this.logger.info('Retrieving data - started');
    return axios.get(url)
      .then((result) => {
        this.logger.info(`Retrieving data - completed: 
        ${this.constructor.name} HTTP request executed`);
        return result.data;
      })
      .catch((error) => {
        this.logger.error(`Retrieving data - failed:
        ${this.constructor.name}${error}HTTP request rejected`);
        return Promise.reject(error);
      });
  }
}

export default UsersApiService;

