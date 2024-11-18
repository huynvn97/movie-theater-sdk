import {createAsyncThunk} from '@reduxjs/toolkit';
import MovieApis from './apis';

export const fetchMoviesAction = createAsyncThunk(
  'movie/fetchMovies',
  async (_, thunkAPI) => {
    try {
      const movies = await MovieApis.getMovies();
      return movies;
    } catch (e: any) {
      thunkAPI.rejectWithValue(e?.message || 'Something went wrong');
    }
  },
);
