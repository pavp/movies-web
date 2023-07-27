import { useQuery } from '@tanstack/react-query'
import { GetMoviesType, MovieListResponse } from 'interfaces'
import { getMovies } from 'services'

export const useGetMovies = (type: GetMoviesType) => useQuery<MovieListResponse, Error>([type], () => getMovies(type))
