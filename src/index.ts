import httpClient from './utils/httpClient';
import {store as stateManagerStore} from './stateManager/store';

export * from './modules/movie';
export * from './modules/shared/types';

type InitOptions = {
  baseURL: string;
};
function init(options: InitOptions) {
  httpClient.defaults.baseURL = options.baseURL;
}

export {
  init,
  httpClient, // Allow app to use or custom http client
  stateManagerStore,
};
