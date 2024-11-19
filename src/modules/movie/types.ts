import {APIResponse} from '../shared/types';

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type GetMovieOptions = {
  params?: {
    include_adult?: boolean;
    include_video?: boolean;
    language?: 'en-US'; // only support en for now
    page?: number;
    sort_by?: 'popularity.desc';
    query?: string; // use for search
  };
};
export type GetMovieResponse = APIResponse<Movie>;

export type MovieReview = {
  id: string;
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  created_at: string;
  updated_at: string;
  url: string;
};
export type GetMovieReviewOptions = {
  id: number;
};
export type GetMovieReviewResponse = APIResponse<MovieReview>;
