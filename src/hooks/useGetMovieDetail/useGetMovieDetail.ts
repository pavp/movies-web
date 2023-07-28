import { useQuery } from '@tanstack/react-query'
import { Movie } from 'interfaces'
import { getMovieDetail } from 'services'
import { useMovieStore } from 'store/useMovieStore'

export const useGetMovieDetail = (id?: number | string) => {
  const { currentMovieId } = useMovieStore((state) => state)

  return useQuery<Movie, Error>(['movie-detail', currentMovieId, id], () => getMovieDetail(id ?? currentMovieId), {
    retry: 0,
    enabled: !!currentMovieId.toString().length,
  })
}
