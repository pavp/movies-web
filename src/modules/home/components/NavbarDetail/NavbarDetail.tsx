import { CloseButton } from 'components'
import { useMovieStore } from 'store/useMovieStore'

export const NavbarDetail = () => {
  const {
    current: data,
    isVisibleDetailSection: isVisible,
    setIsVisibleDetailSection,
  } = useMovieStore((state) => state)
  const { poster_path, backdrop_path, title, overview, release_date, genres, homepage } = data ?? {}

  return (
    <div className={`w-[32rem] ${isVisible ? 'hidden md:block' : 'hidden'} h-screen bg-black`}>
      <div className="p-4 pt-9 absolute z-10 bg-black bg-opacity-50 bottom-0 top-[60px]">
        <CloseButton onClose={() => setIsVisibleDetailSection(false)} />
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
        className={'w-full bg-cover bg-center h-screen relative blur-xs'}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path ?? backdrop_path})`,
        }}
      />
    </div>
  )
}
