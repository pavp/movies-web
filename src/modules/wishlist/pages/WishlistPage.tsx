import { useContext } from 'react'
import { ActivityIndicator, ErrorMessage, ModalDetail, NavbarDetail, VerticalCarousel } from 'components'
import SessionContext from 'context/SessionContext/SessionContext'
import { useGetWishListMovies, useCurrentMovie } from 'hooks'
import { RequestSessionPage } from '../components/RequestSessionPage/RequestSessionPage'

export const WishlistPage = () => {
  const { session, getSession } = useContext(SessionContext)
  const { data, isLoading, isError } = useGetWishListMovies()
  const { onPressMovie } = useCurrentMovie()

  if (!session) return <RequestSessionPage getSession={getSession} />

  if (isLoading) return <ActivityIndicator />

  if (isError) return <ErrorMessage />

  return (
    <div className="flex w-screen h-screen" data-testid="wishlist-page-container">
      <div className="overflow-y-auto w-screen">
        <VerticalCarousel data={data?.results} handlePressMovie={onPressMovie} />
      </div>
      <NavbarDetail />
      <ModalDetail />
    </div>
  )
}
