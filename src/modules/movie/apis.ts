import httpClient from '../../utils/httpClient';
import {GetMovieOptions, GetMovieResponse, Movie} from './types';

/**
 * Get list of discover movies from themoviedb API
 * @returns list of movies
 */
async function getMovies(options?: GetMovieOptions): Promise<GetMovieResponse> {
  const result = await httpClient.get('/discover/movie', {
    params: options?.params,
  });
  return result.data;
}

/**
 * Search movies by query string
 * @param options
 * @returns list of movies
 */
async function searchMovies(
  options: GetMovieOptions,
): Promise<GetMovieResponse> {
  const result = await httpClient.get('/search/movie', {
    params: options.params,
  });
  return result.data;
}

const MovieApis = {
  getMovies,
  searchMovies,
};

export default MovieApis;
