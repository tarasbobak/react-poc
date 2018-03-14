/**
 * Created by spaliichuk on 3/13/18.
 */
import axios from 'axios';

class DataService {
  getPopularRepositories() {
    const url = 'https://api.github.com/users?since=135';
    return axios.get(url)
      .then((result) => {
        console.log(result.data);
        return result.data;
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  }
}

export default DataService;

