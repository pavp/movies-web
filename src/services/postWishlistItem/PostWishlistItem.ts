import apiClient from 'api/ApiClient'
import { API_WISHLIST_ITEM } from 'config/app'

interface IPostWishListItem {
  mediaId: number | string
  session: string | undefined
  isWatchList: boolean
}

export const postWishListItem = async ({ isWatchList, session, mediaId }: IPostWishListItem) => {
  if (!session) return

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
