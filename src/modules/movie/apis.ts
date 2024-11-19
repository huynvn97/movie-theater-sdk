import httpClient from '../../utils/httpClient';
import {
  GetMovieDetailOptions,
  GetMovieDetailResponse,
  GetMovieKeywordsOptions,
  GetMovieKeywordsResponse,
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

async function getMovieDetail(
  options: GetMovieDetailOptions,
): Promise<GetMovieDetailResponse> {
  const result = await httpClient.get(`/movie/${options.id}`, {
    params: {},
  });

  return result.data;
}

async function getMovieKeywords(
  options: GetMovieKeywordsOptions,
): Promise<GetMovieKeywordsResponse> {
  const result = await httpClient.get(`/movie/${options.id}/keywords`, {
    params: {},
  });
  return result.data;
}

const MovieApis = {
  getMovies,
  searchMovies,
  getMovieReviews,
  getMovieDetail,
  getMovieKeywords,
};

export default MovieApis;
