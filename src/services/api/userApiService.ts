import httpService from './genericHttpService';

class UserApiService {
  public static githubApiUrl = 'https://api.github.com/';

  public getPopularRepositories(): any {
    const requestUrl = `${UserApiService.githubApiUrl}users?since=135`;

    return httpService.get(requestUrl);
  }
}

const userApiService = new UserApiService();

export default userApiService;
