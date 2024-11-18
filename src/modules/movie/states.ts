import {createSlice} from '@reduxjs/toolkit';
import {Movie} from './types';
import {fetchMoviesAction, fetchSearchMoviesAction} from './actions';
import {NetworkStatus} from '../shared/types';

export interface MovieState {
  status: NetworkStatus;
  movies: Movie[];
  error: string | null;

  search: {
    status: NetworkStatus;
    data: Movie[];
    error: string | null;
  };
}

const initialState: MovieState = {
  status: 'idle',
  movies: [],
  error: null,

  search: {
    data: [],
    status: 'idle',
    error: null,
  },
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchMoviesAction.pending, state => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchMoviesAction.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.movies = action?.payload?.results || [];
    });
    builder.addCase(fetchMoviesAction.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message || 'Something went wrong';
    });

    builder.addCase(fetchSearchMoviesAction.pending, state => {
      state.search.status = 'pending';
      state.search.error = null;
    });
    builder.addCase(fetchSearchMoviesAction.fulfilled, (state, action) => {
      state.search.status = 'fulfilled';
      state.search.data = action?.payload?.results || [];
    });
    builder.addCase(fetchSearchMoviesAction.rejected, (state, action) => {
      state.search.status = 'rejected';
      state.search.error = action.error.message || 'Something went wrong';
    });
  },
});

export const {} = movieSlice.actions;

const movieReducer = movieSlice.reducer;
export default movieReducer;
