import apiClient from 'api/ApiClient'
import { API_WISHLIST_ITEM } from 'services/constants'

export const postWishListItem = async (mediaId: number | string, session: string) => {
  const media = {
    media_type: 'movie',
    media_id: mediaId,
    watchlist: true,
  }
  const { data } = await apiClient.post(API_WISHLIST_ITEM(), media, {
    params: { session_id: session },
  })

  return data
}
