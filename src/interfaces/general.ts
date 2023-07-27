import { Movie } from './movie'

enum GetMoviesType {
  GET_MOVIES_UPCOMING = '/movie/upcoming',
  GET_MOVIES_TOP_RATED = '/movie/top_rated',
  GET_MOVIES_POPULAR = '/movie/popular',
}

type MovieListResponse = {
  results: Movie[]
}

export { GetMoviesType }
export type { MovieListResponse }
