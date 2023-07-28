import apiClient from 'api/ApiClient'
import { API_GET_WISHLIST_MOVIES } from 'config/app'

export const getWishListMovies = async (session: string) => {
  const { data } = await apiClient.get(API_GET_WISHLIST_MOVIES(), {
    params: { session_id: session },
  })

  return data
}
