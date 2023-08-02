import { ActivityIndicator, CloseButton, ErrorMessage, WishlistButton } from 'components'
import { useGetMovieDetail } from 'hooks'
import { useMovieStore } from 'store/useMovieStore'

export const NavbarDetail = () => {
  const { isVisibleDetailSection: isVisible, setIsVisibleDetailSection } = useMovieStore((state) => state)
  const { data, isLoading, isError } = useGetMovieDetail()
  const { poster_path, backdrop_path, title, overview, release_date, genres, homepage } = data ?? {}

  if (isLoading) {
    return (
      <div className={`w-[32rem] ${isVisible ? 'hidden md:block' : 'hidden'} h-full bg-black`}>
        <ActivityIndicator />
      </div>
    )
  }

  if (isError) {
    return (
      <div className={`w-[32rem] ${isVisible ? 'hidden md:block' : 'hidden'} h-full bg-black`}>
        <ErrorMessage />
      </div>
    )
  }

  return (
    <div className={`w-[24rem] ${isVisible ? 'hidden md:block' : 'hidden'} h-full bg-black relative`}>
      <div
        className={'absolute inset-0 bg-cover bg-center blur-xs w-full h-full'}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path ?? backdrop_path})`,
        }}
      />

      <div className="relative overflow-y-auto px-4 pt-9 pb-20 w-[24rem] h-full bg-black bg-opacity-50">
        <CloseButton onClose={() => setIsVisibleDetailSection(false)} />
        <div className="p-2 text-white font-bold text-3xl">{title}</div>
        <div className="p-2 text-white">{release_date ? new Date(release_date).getFullYear() : null}</div>
        <div className="flex flex-wrap flex-column">
          {genres?.map((genre) => (
            <div className="p-2 text-white" key={genre.id}>
              {genre.name}
            </div>
          ))}
        </div>
        <p className="p-2 text-white">{overview}</p>
        <a className="p-2 text-cyan-400" href={homepage} target="_blank" rel="noopener noreferrer">
          {homepage}
        </a>
        <div className="flex justify-center items-center my-8 space-x-8">
          <WishlistButton />
        </div>
      </div>
    </div>
  )
}
