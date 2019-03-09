/* tslint:disable:no-console */
import axios from 'axios';

class HttpService {
  public get(url: string, options?: any): Promise<Response> {
    return axios
      .get(url, options)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);

        return Promise.reject(error);
      });
  }

  public post(url: string, data: any, options: any): Promise<Response> {
    return axios
      .post(url, data, options)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);

        return Promise.reject(error);
      });
  }

  public put(url: string, data: any, options: any): Promise<Response> {
    return axios.put(url, data, options).then(response => {
      return response.data;
    });
  }

  public delete(url: string, options: any): Promise<Response> {
    return axios.delete(url, options).then(response => {
      return response.data;
    });
  }
}

const httpService = new HttpService();

export default httpService;
