import httpClient from './utils/httpClient';
import {store as stateManagerStore} from './stateManager/store';

export * from './modules/movie';

export {
  httpClient, // Allow app to use or custom http client
  stateManagerStore,
};
