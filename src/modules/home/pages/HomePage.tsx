import { HorizontalCarrousel } from 'components/horizontalCarrousel/HorizontalCarrousel'
import { useGetMovies } from 'hooks/useGetMovies/useGetMovies'
import { GetMoviesType } from 'interfaces'
import { NavbarDetail } from '../components/NavbarDetail/NavbarDetail'
import { ModalDetail } from '../components/ModalDetail/ModalDetail'
import { useCurrentMovie } from '../hooks/useCurrentMovie/useCurrentMovie'

export const HomePage = () => {
  const { data: upcomingMovies, isLoading: isLoadingUpComingMovies } = useGetMovies(GetMoviesType.GET_MOVIES_UPCOMING)
  const { data: popularMovies, isLoading: isLoadingPopularMovies } = useGetMovies(GetMoviesType.GET_MOVIES_POPULAR)
  const { data: topRatedMovies, isLoading: isLoadingRatedMovies } = useGetMovies(GetMoviesType.GET_MOVIES_TOP_RATED)
  const { onPressMovie } = useCurrentMovie()

  return (
    <div className="flex w-screen h-screen">
      <div className="overflow-y-auto w-full">
        <HorizontalCarrousel
          data={popularMovies?.results}
          title={'Popular Movies'}
          isLoading={isLoadingPopularMovies}
          type={GetMoviesType.GET_MOVIES_POPULAR}
          handlePressMovie={onPressMovie}
        />
        <HorizontalCarrousel
          data={upcomingMovies?.results}
          title={'Upcoming Movies'}
          isLoading={isLoadingUpComingMovies}
          type={GetMoviesType.GET_MOVIES_POPULAR}
          handlePressMovie={onPressMovie}
        />
        <HorizontalCarrousel
          data={topRatedMovies?.results}
          title={'Top Rated Movies'}
          isLoading={isLoadingRatedMovies}
          type={GetMoviesType.GET_MOVIES_POPULAR}
          handlePressMovie={onPressMovie}
        />
      </div>
      <NavbarDetail />
      <ModalDetail />
    </div>
  )
}
