import { useContext } from 'react'
import { ActivityIndicator, ErrorMessage, VerticalCarousel } from 'components'
import SessionContext from 'context/SessionContext/SessionContext'
import { useGetWishListMovies } from 'hooks'
import { ModalDetail } from 'modules/home/components/ModalDetail/ModalDetail'
import { NavbarDetail } from 'modules/home/components/NavbarDetail/NavbarDetail'
import { useCurrentMovie } from 'modules/home/hooks/useCurrentMovie/useCurrentMovie'
import { RequestSessionPage } from '../components/RequestSessionPage/RequestSessionPage'

export const WishlistPage = () => {
  const { session, getSession } = useContext(SessionContext)
  const { data, isLoading, isError } = useGetWishListMovies()
  const { onPressMovie } = useCurrentMovie()

  if (!session) return <RequestSessionPage getSession={getSession} />

  if (isLoading) return <ActivityIndicator />

  if (isError) return <ErrorMessage />

  return (
    <div className="flex w-screen h-screen">
      <div className="overflow-y-auto w-full">
        <VerticalCarousel data={data?.results} isLoading={isLoading} handlePressMovie={onPressMovie} />
      </div>
      <NavbarDetail />
      <ModalDetail />
    </div>
  )
}
