import apiClient from 'api/ApiClient'
import { API_WISHLIST_ITEM } from 'config/app'

interface IPostWishListItem {
  mediaId: number | string
  session: string
  isWatchList: boolean
}

export const postWishListItem = async ({ isWatchList, session, mediaId }: IPostWishListItem) => {
  const media = {
    media_type: 'movie',
    media_id: mediaId,
    watchlist: isWatchList,
  }
  const { data } = await apiClient.post(API_WISHLIST_ITEM(), media, {
    params: { session_id: session },
  })

  return data
}
