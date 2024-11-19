import httpClient from '../../utils/httpClient';
import {
  GetMovieOptions,
  GetMovieResponse,
  GetMovieReviewOptions,
  GetMovieReviewResponse,
  Movie,
} from './types';

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

async function getMovieReviews(
  options: GetMovieReviewOptions,
): Promise<GetMovieReviewResponse> {
  const result = await httpClient.get(`/movie/${options.id}/reviews`, {
    params: {},
  });

  return result.data;
}

const MovieApis = {
  getMovies,
  searchMovies,
  getMovieReviews,
};

export default MovieApis;
