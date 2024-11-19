import {createSlice} from '@reduxjs/toolkit';
import {
  Movie,
  MovieActor,
  MovieDetails,
  MovieKeyword,
  MovieReview,
} from './types';
import {
  fetchMovieActorsAction,
  fetchMovieDetailAction,
  fetchMovieKeywordsAction,
  fetchMovieReviewsAction,
  fetchMoviesAction,
  fetchSearchMoviesAction,
} from './actions';
import {BaseState, NetworkStatus} from '../shared/types';

export interface MovieState {
  status: NetworkStatus;
  movies: Movie[];
  error: string | null;

  search: BaseState<Movie[]>;

  reviews: BaseState<MovieReview[]>;

  detail: BaseState<MovieDetails>;

  keywords: BaseState<MovieKeyword[]>;

  actors: BaseState<MovieActor[]>;
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

  detail: {
    data: {} as MovieDetails,
    status: 'idle',
    error: null,
  },

  keywords: {
    data: [],
    status: 'idle',
    error: null,
  },

  actors: {
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

    builder.addCase(fetchMovieDetailAction.pending, state => {
      state.detail.status = 'pending';
      state.detail.error = null;
    });
    builder.addCase(fetchMovieDetailAction.fulfilled, (state, action) => {
      state.detail.status = 'fulfilled';
      state.detail.data = action?.payload || ({} as MovieDetails);
    });
    builder.addCase(fetchMovieDetailAction.rejected, (state, action) => {
      state.detail.status = 'rejected';
      state.detail.error = action.error.message || 'Something went wrong';
    });

    builder.addCase(fetchMovieKeywordsAction.pending, state => {
      state.keywords.status = 'pending';
      state.keywords.error = null;
    });
    builder.addCase(fetchMovieKeywordsAction.fulfilled, (state, action) => {
      state.keywords.status = 'fulfilled';
      state.keywords.data = action.payload?.keywords || [];
    });
    builder.addCase(fetchMovieKeywordsAction.rejected, (state, action) => {
      state.keywords.status = 'rejected';
      state.keywords.error = action.error.message || 'Something went wrong';
    });

    builder.addCase(fetchMovieActorsAction.pending, state => {
      state.actors.status = 'pending';
      state.actors.error = null;
    });
    builder.addCase(fetchMovieActorsAction.fulfilled, (state, action) => {
      state.actors.status = 'fulfilled';
      state.actors.data = action.payload?.cast || [];
    });
    builder.addCase(fetchMovieActorsAction.rejected, (state, action) => {
      state.actors.status = 'rejected';
      state.actors.error = action.error.message || 'Something went wrong';
    });
  },
});

export const {} = movieSlice.actions;

const movieReducer = movieSlice.reducer;
export default movieReducer;
