import httpClient from './utils/httpClient';
import {store as stateManagerStore} from './stateManager/store';

export * from './modules/movie';
export * from './modules/shared/types';

export {
  httpClient, // Allow app to use or custom http client
  stateManagerStore,
};
