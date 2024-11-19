import {createSlice} from '@reduxjs/toolkit';
import {Movie, MovieReview} from './types';
import {
  fetchMovieReviewsAction,
  fetchMoviesAction,
  fetchSearchMoviesAction,
} from './actions';
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

  reviews: {
    status: NetworkStatus;
    data: MovieReview[];
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

  reviews: {
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

    builder.addCase(fetchMovieReviewsAction.pending, state => {
      state.reviews.status = 'pending';
      state.reviews.error = null;
    });
    builder.addCase(fetchMovieReviewsAction.fulfilled, (state, action) => {
      state.reviews.status = 'fulfilled';
      state.reviews.data = action?.payload?.results || [];
    });
    builder.addCase(fetchMovieReviewsAction.rejected, (state, action) => {
      state.reviews.status = 'rejected';
      state.reviews.error = action.error.message || 'Something went wrong';
    });
  },
});

export const {} = movieSlice.actions;

const movieReducer = movieSlice.reducer;
export default movieReducer;
