import {createAsyncThunk} from '@reduxjs/toolkit';
import MovieApis from './apis';
import {
  GetMovieActorsOptions,
  GetMovieDetailOptions,
  GetMovieKeywordsOptions,
  GetMovieOptions,
  GetMovieReviewOptions,
} from './types';

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

export const fetchMovieDetailAction = createAsyncThunk(
  'movie/fetchMovieDetail',
  async (options: GetMovieDetailOptions, thunkAPI) => {
    try {
      const detail = await MovieApis.getMovieDetail(options);
      return detail;
    } catch (e: any) {
      thunkAPI.rejectWithValue(e?.message || 'Something went wrong');
    }
  },
);

export const fetchMovieKeywordsAction = createAsyncThunk(
  'movie/fetchMovieKeywords',
  async (options: GetMovieKeywordsOptions, thunkAPI) => {
    try {
      const keywords = await MovieApis.getMovieKeywords(options);
      return keywords;
    } catch (e: any) {
      thunkAPI.rejectWithValue(e?.message || 'Something went wrong');
    }
  },
);

export const fetchMovieActorsAction = createAsyncThunk(
  'movie/fetchMovieActors',
  async (options: GetMovieActorsOptions, thunkAPI) => {
    try {
      const actors = await MovieApis.getMovieActors(options);
      return actors;
    } catch (e: any) {
      thunkAPI.rejectWithValue(e?.message || 'Something went wrong');
    }
  },
);
