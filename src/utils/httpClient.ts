import axios from 'axios';

const httpClient = axios.create({
  baseURL: '',
  headers: {
    accept: 'application/json',
  },
});

export default httpClient;
