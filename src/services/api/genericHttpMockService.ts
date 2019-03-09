class HttpMockService {
  public get(url: string): Promise<any> {
    switch (url) {
      // case 1:
      //   return mockResponse
      // case 2:
      // ...
      default:
        return Promise.resolve({});
    }
  }
}

const httpMockService = new HttpMockService();

export default httpMockService;
