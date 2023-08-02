import { useQueryClient, useMutation } from '@tanstack/react-query'
import SessionContext from 'context/SessionContext/SessionContext'
import { AddWishListItemResponse } from 'interfaces'
import { useCallback, useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { postWishListItem } from 'services'
import { useMovieStore } from 'store/useMovieStore'
import Swal from 'sweetalert2'

export const useWishListItem = () => {
  const { session, getSession } = useContext(SessionContext)
  const { currentMovieId } = useMovieStore((state) => state)
  const queryClient = useQueryClient()
  const { pathname } = useLocation()
  const { setIsVisibleDetailModal, setIsVisibleDetailSection, isVisibleDetailModal, isVisibleDetailSection } =
    useMovieStore((state) => state)

  const isWatchList = useMemo(() => !pathname.includes('wishlist'), [pathname])

  const handleOpenErrorAlert = () => {
    Swal.fire({
      title: 'Wait!',
      text: 'You have to authenticate before addding a movie to wish list',
      icon: 'warning',
      confirmButtonText: 'Ok',
    }).then(({ isConfirmed }) => {
      if (isConfirmed) getSession(true)
    })
  }

  const handleOpenSucessAlert = (message: string) => {
    Swal.fire({
      title: 'Good!',
      text: message,
      icon: 'success',
      confirmButtonText: 'Ok',
    })
    queryClient.refetchQueries(['wishlist-movies'])
  }

  const handleCloseDetail = useCallback(() => {
    if (!isWatchList) {
      if (isVisibleDetailSection) setIsVisibleDetailSection(false)
      if (isVisibleDetailModal) setIsVisibleDetailModal(false)
    }
  }, [isVisibleDetailModal, isVisibleDetailSection, isWatchList])

  const { mutate: addWishListItem } = useMutation<AddWishListItemResponse, Error>(
    () => postWishListItem({ mediaId: currentMovieId, session, isWatchList }),
    {
      onSuccess: (data) => {
        handleOpenSucessAlert(data.status_message)
        handleCloseDetail()
      },
      onError: () => {
        handleOpenErrorAlert()
      },
    }
  )

  return { isWatchList, addWishListItem }
}
