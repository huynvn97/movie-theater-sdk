import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../stateManager/store';
import {fetchMoviesAction} from './actions';

export function useGetMovies() {
  const dispatch = useDispatch() as AppDispatch;
  const {movies, error, status} = useSelector(
    (state: RootState) => state.movie,
  );
  const fetchMovies = useCallback(async () => {
    dispatch(fetchMoviesAction());
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return {
    movies,
    isFetching: status === 'pending',
    status,
    error,
  };
}
