/**
 * Created by spaliichuk on 3/15/18.
 * Promise based HTTP client for the browser and node.js
 * This example demonstrate how use custom httpService
 */

import loggly from 'loggly';

class LoggerService {
  constructor() {
    this.logger = this.init();
  }

  info(msg) {
    this.logger.log({
      time: new Date().toISOString(),
      level: 'INFO',
      message: `${msg}`,
      location: window.location.href,
      url_params: this.getURLParams(window.location.search),
      context: navigator.userAgent
    });
  }

  error(msg) {
    this.logger.log({
      time: new Date().toISOString(),
      level: 'ERROR',
      message: `${msg}`,
      location: window.location.href,
      url_params: this.getURLParams(window.location.search),
      context: navigator.userAgent
    });
  }
  init() {
    return loggly.createClient({
      token: '947c2d0b-29c9-4cbb-b168-b779a0de3a2e',
      subdomain: 'react57',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers,' +
        'Origin,Accept, X-Requested-With,' +
        'Content-Type, Access-Control-Request-Method,' +
        'Access-Control-Request-Headers'
      }
    });
  }
  getURLParams(url) {
    const urlParams = {};
    url.replace(
      new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
      ($0, $1, $2, $3) => {
        urlParams[$1] = $3;
      }
    );

    return urlParams.length !== 'undefined' || '' || {}
      ? urlParams
      : 'params not passed';
  }
}

export default LoggerService;
