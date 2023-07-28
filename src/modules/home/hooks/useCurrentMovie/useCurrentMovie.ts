import { useGetMovieDetail, useGetResponsiveVariant } from 'hooks'
import { useEffect, useState } from 'react'
import { useMovieStore } from 'store/useMovieStore'

export const useCurrentMovie = () => {
  const [currentMovieId, setCurrentMovieId] = useState<number | string>('')
  const { setIsVisibleDetailModal, setIsVisibleDetailSection, setCurrentMovie } = useMovieStore((state) => state)
  const { data, refetch } = useGetMovieDetail(currentMovieId)
  const { responsiveVariant } = useGetResponsiveVariant()

  const onPressMovie = (id: number | string) => {
    setCurrentMovieId(id)
    if (responsiveVariant === 'sm' || responsiveVariant === 'md') setIsVisibleDetailModal(true)
    else setIsVisibleDetailSection(true)
  }

  useEffect(() => {
    if (!!data) setCurrentMovie(data)
  }, [data])

  useEffect(() => {
    if (currentMovieId) refetch()
  }, [currentMovieId])

  return {
    onPressMovie,
  }
}
