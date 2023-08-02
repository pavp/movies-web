import { useGetResponsiveVariant } from 'hooks'
import { useEffect } from 'react'
import { useMovieStore } from 'store/useMovieStore'

export const useCurrentMovie = () => {
  const { setIsVisibleDetailModal, setIsVisibleDetailSection, setCurrentMovieId } = useMovieStore((state) => state)
  const { responsiveVariant } = useGetResponsiveVariant()

  const onPressMovie = (id: number | string) => {
    setCurrentMovieId(id)
    if (responsiveVariant === 'sm' || responsiveVariant === 'md') setIsVisibleDetailModal(true)
    else setIsVisibleDetailSection(true)
  }

  useEffect(() => {
    return () => {
      setIsVisibleDetailSection(false)
    }
  }, [])

  return {
    onPressMovie,
  }
}
