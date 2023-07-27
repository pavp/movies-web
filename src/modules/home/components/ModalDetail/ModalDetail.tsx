import { useGetResponsiveVariant } from 'hooks/useGetResponsiveVariant/useGetResponsiveVariant'
import { VariantsResponsiveType } from 'interfaces/responsive'
import { useEffect } from 'react'
import Modal from 'react-modal'
import { useMovieStore } from 'store/useMovieStore'

export const ModalDetail = () => {
  const { current: data, isVisibleDetailModal: isVisible, setIsVisibleDetailModal } = useMovieStore((state) => state)
  const { poster_path, backdrop_path, title, overview, release_date, genres, homepage } = data ?? {}
  const { responsiveVariant } = useGetResponsiveVariant()

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
          padding: 0,
        },
      }}>
      <div className={'w-full h-full'}>
        <div className="p-4 absolute z-10 bg-black bg-opacity-50 bottom-0 top-0 left-0 right-0">
          <div className="p-2 text-white font-bold text-3xl">{title}</div>
          <div className="p-2 text-white">{release_date ? new Date(release_date).getFullYear() : null}</div>
          <div className="flex flex-column">
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
        <div
          className={'w-full bg-cover bg-center h-full relative blur-xs'}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path ?? backdrop_path})`,
          }}
        />
      </div>
    </Modal>
  )
}
