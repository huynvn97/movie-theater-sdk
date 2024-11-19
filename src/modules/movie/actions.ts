import {createAsyncThunk} from '@reduxjs/toolkit';
import MovieApis from './apis';
import {GetMovieOptions, GetMovieReviewOptions} from './types';

export const fetchMoviesAction = createAsyncThunk(
  'movie/fetchMovies',
  async (options: GetMovieOptions | undefined = {}, thunkAPI) => {
    try {
      const movies = await MovieApis.getMovies(options);
      return movies;
    } catch (e: any) {
      thunkAPI.rejectWithValue(e?.message || 'Something went wrong');
    }
  },
);

export const fetchSearchMoviesAction = createAsyncThunk(
  'movie/fetchSearchMovies',
  async (options: GetMovieOptions | undefined = {}, thunkAPI) => {
    try {
      const movies = await MovieApis.searchMovies(options);
      return movies;
    } catch (e: any) {
      thunkAPI.rejectWithValue(e?.message || 'Something went wrong');
    }
  },
);

export const fetchMovieReviewsAction = createAsyncThunk(
  'movie/fetchMovieReviews',
  async (options: GetMovieReviewOptions, thunkAPI) => {
    try {
      const reviews = await MovieApis.getMovieReviews(options);
      return reviews;
    } catch (e: any) {
      thunkAPI.rejectWithValue(e?.message || 'Something went wrong');
    }
  },
);
