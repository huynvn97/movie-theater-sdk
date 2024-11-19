import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../stateManager/store';
import {
  fetchMovieReviewsAction,
  fetchMoviesAction,
  fetchSearchMoviesAction,
} from './actions';
import {GetMovieOptions, GetMovieReviewOptions} from './types';

export function useGetMovies(options?: GetMovieOptions) {
  const dispatch = useDispatch() as AppDispatch;
  const {movies, error, status} = useSelector(
    (state: RootState) => state.movie,
  );
  const fetchMovies = useCallback(async () => {
    dispatch(fetchMoviesAction(options));
  }, [options]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return {
    movies,
    loading: status === 'pending',
    status,
    error,
  };
}

export function useSearchMovies(options?: GetMovieOptions) {
  const dispatch = useDispatch() as AppDispatch;
  const {data, error, status} = useSelector(
    (state: RootState) => state.movie.search,
  );
  const runSearchMovie = useCallback(
    async (searchText: string) => {
      dispatch(fetchSearchMoviesAction({params: {query: searchText}}));
    },
    [options],
  );

  return {
    searchData: data,
    loading: status === 'pending',
    status,
    error,
    runSearchMovie,
  };
}

export function useMovieReviews(options: GetMovieReviewOptions) {
  const dispatch = useDispatch() as AppDispatch;
  const {data, error, status} = useSelector(
    (state: RootState) => state.movie.reviews,
  );

  const fetchMovieReviews = useCallback(async () => {
    dispatch(fetchMovieReviewsAction(options));
  }, [options]);

  useEffect(() => {
    fetchMovieReviews();
  }, []);

  return {
    data,
    loading: status === 'pending',
    status,
    error,
    runFetchMovieReviews: fetchMovieReviews,
  };
}
