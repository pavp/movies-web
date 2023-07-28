import { ActivityIndicator, CloseButton } from 'components'
import { useGetMovieDetail, useGetResponsiveVariant } from 'hooks'
import { VariantsResponsiveType } from 'interfaces/responsive'
import { useEffect } from 'react'
import Modal from 'react-modal'
import { useMovieStore } from 'store/useMovieStore'

export const ModalDetail = () => {
  const { isVisibleDetailModal: isVisible, setIsVisibleDetailModal } = useMovieStore((state) => state)
  const { responsiveVariant } = useGetResponsiveVariant()
  const { data, isLoading } = useGetMovieDetail()
  const { poster_path, backdrop_path, title, overview, release_date, genres, homepage } = data ?? {}

  useEffect(() => {
    handleResizeScreen(responsiveVariant)
  }, [responsiveVariant])

  const handleResizeScreen = (variant: VariantsResponsiveType) => {
    if (variant !== 'sm' && variant !== 'md') onClose()
  }

  const onClose = () => {
    setIsVisibleDetailModal(false)
  }

  return (
    <Modal
      isOpen={isVisible}
      onRequestClose={onClose}
      style={{
        content: {
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          borderRadius: '8px',
          borderColor: '#83a0e9',
          padding: 0,
          backgroundColor: '#161523',
        },
        overlay: {
          backgroundColor: 'rgba(42, 41, 67, 0.9)',
        },
      }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-xs"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path ?? backdrop_path})`,
              minHeight: '100%',
            }}
          />

          <div className="relative h-full overflow-y-auto px-4 pt-9 pb-8 bg-black bg-opacity-50">
            <CloseButton onClose={() => setIsVisibleDetailModal(false)} />
            <div className="p-2 text-white font-bold text-3xl">{title}</div>
            <div className="p-2 text-white">{release_date ? new Date(release_date).getFullYear() : null}</div>
            <div className="flex flex-wrap flex-column">
              {genres?.map((genre) => (
                <div className="p-2 text-white" key={genre.id}>
                  {genre.name}
                </div>
              ))}
            </div>
            <div className="p-2 text-white">{overview}</div>
            <a className="p-2 text-cyan-400" href={homepage} target="_blank" rel="noopener noreferrer">
              {homepage}
            </a>
          </div>
        </div>
      )}
    </Modal>
  )
}
