import { useQuery } from '@tanstack/react-query'
import SessionContext from 'context/SessionContext/SessionContext'
import { MovieListResponse } from 'interfaces'
import { useContext } from 'react'
import { getWishListMovies } from 'services'

export const useGetWishListMovies = () => {
  const { session } = useContext(SessionContext)

  return useQuery<MovieListResponse, Error>(['wishlist-movies', session], () => getWishListMovies(session!), {
    enabled: !!session,
  })
}
