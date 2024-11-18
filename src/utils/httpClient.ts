import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTgyYzUwNWQ4MzI0MDQxN2Q0NzY2MzhmNmQ0NjY3NyIsIm5iZiI6MTczMTk0NzQ3MS43NTYyMDYsInN1YiI6IjY3M2I2YjAyNmEwMmEyNGQ3YjIxYWYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._4XRO-VNDh7zxzN6VCx2H1660ETzysgXKW3tMjCnbYk',
  },
});

export default httpClient;
