import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../stateManager/store';
import {
  fetchMovieActorsAction,
  fetchMovieDetailAction,
  fetchMovieKeywordsAction,
  fetchMovieReviewsAction,
  fetchMoviesAction,
  fetchSearchMoviesAction,
} from './actions';
import {
  GetMovieActorsOptions,
  GetMovieDetailOptions,
  GetMovieOptions,
  GetMovieReviewOptions,
} from './types';

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
    runFetchMovies: fetchMovies,
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

export const useMovieDetail = (options: GetMovieDetailOptions) => {
  const dispatch = useDispatch() as AppDispatch;
  const {data, error, status} = useSelector(
    (state: RootState) => state.movie.detail,
  );

  const fetchMovieDetail = useCallback(async () => {
    dispatch(fetchMovieDetailAction(options));
  }, [options]);

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return {
    data,
    loading: status === 'pending',
    status,
    error,
    runFetchMovieDetail: fetchMovieDetail,
  };
};

export function useMovieKeywords(options: GetMovieReviewOptions) {
  const dispatch = useDispatch() as AppDispatch;
  const {data, error, status} = useSelector(
    (state: RootState) => state.movie.keywords,
  );

  const fetchMovieKeywords = useCallback(async () => {
    dispatch(fetchMovieKeywordsAction(options));
  }, [options]);

  useEffect(() => {
    fetchMovieKeywords();
  }, []);

  return {
    data,
    loading: status === 'pending',
    status,
    error,
    runFetchMovieKeywords: fetchMovieKeywords,
  };
}

export function useMovieActors(options: GetMovieActorsOptions) {
  const dispatch = useDispatch() as AppDispatch;
  const {data, error, status} = useSelector(
    (state: RootState) => state.movie.actors,
  );

  const fetchMovieActors = useCallback(async () => {
    dispatch(fetchMovieActorsAction(options));
  }, [options]);

  useEffect(() => {
    fetchMovieActors();
  }, []);

  return {
    data,
    loading: status === 'pending',
    status,
    error,
    runFetchMovieActors: fetchMovieActors,
  };
}
