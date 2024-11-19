import {APIResponse} from '../shared/types';

// ** LIST MOVIE **
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
export type GetMovieResponse = APIResponse<Movie[]>;

// ** REVIEWS **
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
export type GetMovieReviewResponse = APIResponse<MovieReview[]>;

// ** DETAIl **
export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  } | null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string; // ISO 8601 date string
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string; // e.g., "Released", "In Production"
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type GetMovieDetailOptions = {
  id: number;
};
export type GetMovieDetailResponse = MovieDetails;

// ** KEYWORDS **
export type MovieKeyword = {
  id: number;
  name: string;
};
export type GetMovieKeywordsOptions = {
  id: number;
};
export type GetMovieKeywordsResponse = {
  id: number;
  keywords: MovieKeyword[];
};
