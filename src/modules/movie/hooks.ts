import {useCallback, useEffect, useState} from 'react';
import {Movie} from './types';
import MovieApis from './apis';

export function useGetMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    setIsFetching(true);
    try {
      const movies = await MovieApis.getMovies();
      setMovies(movies);
    } catch (e) {
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return {
    movies,
    isFetching,
    error,
  };
}
