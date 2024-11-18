import {createSlice} from '@reduxjs/toolkit';
import {Movie} from './types';
import {fetchMoviesAction} from './actions';
import {NetworkStatus} from '../shared/types';

export interface MovieState {
  status: NetworkStatus;
  movies: Movie[];
  error: string | null;
}

const initialState: MovieState = {
  status: 'idle',
  movies: [],
  error: null,
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
  },
});

export const {} = movieSlice.actions;

const movieReducer = movieSlice.reducer;
export default movieReducer;
