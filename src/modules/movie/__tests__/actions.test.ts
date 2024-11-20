import {
  fetchMoviesAction,
  fetchSearchMoviesAction,
} from '@modules/movie/actions';
import {GetMovieOptions, GetMovieResponse, Movie} from '@modules/movie/types';
import MovieApis from '@modules/movie/apis';
import {store} from '@stateManager/store';

jest.mock('@modules/movie/apis', () => ({
  getMovies: jest.fn(() => Promise.resolve({})),
  searchMovies: jest.fn(() => Promise.reject({})),
}));

test('Test function fetchMoviesAction', async () => {
  const options: GetMovieOptions = {};
  const movies: Movie[] = [];

  const data: GetMovieResponse = {
    page: 1,
    total_pages: 1,
    total_results: 1,
    results: movies,
  };

  (MovieApis.getMovies as jest.Mock).mockResolvedValue(data);

  const result = await store.dispatch(fetchMoviesAction(options));

  expect(MovieApis.getMovies).toHaveBeenCalledWith(options);
  expect(result.meta.requestStatus).toEqual('fulfilled');
  expect(result.payload).toEqual(data);
});

test('Test function fetchSearchMoviesAction - success', async () => {
  const options: GetMovieOptions = {
    params: {
      query: 'search',
    },
  };
  const movies: Movie[] = [];

  const data: GetMovieResponse = {
    page: 1,
    total_pages: 1,
    total_results: 1,
    results: movies,
  };

  (MovieApis.searchMovies as jest.Mock).mockResolvedValue(data);

  const result = await store.dispatch(fetchSearchMoviesAction(options));

  expect(MovieApis.searchMovies).toHaveBeenCalledWith(options);
  expect(result.meta.requestStatus).toEqual('fulfilled');
  expect(result.payload).toEqual(data);
});

test('Test function fetchSearchMoviesAction - failed', async () => {
  const options: GetMovieOptions = {
    params: {
      query: 'search',
    },
  };

  (MovieApis.searchMovies as jest.Mock).mockImplementation(() => {
    return Promise.reject({});
  });

  const result = await store.dispatch(fetchSearchMoviesAction(options));

  expect(MovieApis.searchMovies).toHaveBeenCalledWith(options);
  expect(result.meta.requestStatus).toEqual('rejected');
});

// TODO: Do more unit tests here
