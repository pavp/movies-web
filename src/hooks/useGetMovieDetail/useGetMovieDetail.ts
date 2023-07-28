import { useQuery } from '@tanstack/react-query'
import { Movie } from 'interfaces'
import { getMovieDetail } from 'services'

export const useGetMovieDetail = (id: number | string) =>
  useQuery<Movie, Error>(['movie-detail'], () => getMovieDetail(id), {
    retry: 0,
    enabled: false,
  })
