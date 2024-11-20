import httpClient from './utils/httpClient';
import {store as stateManagerStore} from './stateManager/store';

export * from './modules/movie';
export * from './modules/shared/types';

type InitOptions = {
  baseURL: string;
  appToken: string;
};
function init(options: InitOptions) {
  httpClient.defaults.baseURL = options.baseURL;

  httpClient.interceptors.request.use(config => {
    // TODO: in real project, we should get token from secure storage
    // TODO: in real project, BASE_URL should be from .env
    config.headers.Authorization = `Bearer ${options.appToken}`;
    return config;
  });
}

export {
  init,
  httpClient, // Allow app to use or custom http client
  stateManagerStore,
};
