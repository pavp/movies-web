import { useMemo } from 'react'
import { ErrorMessage, HorizontalCarousel, ActivityIndicator } from 'components'
import { useGetMovies } from 'hooks'
import { GetMoviesType } from 'interfaces'
import { NavbarDetail } from '../components/NavbarDetail/NavbarDetail'
import { ModalDetail } from '../components/ModalDetail/ModalDetail'
import { useCurrentMovie } from '../hooks/useCurrentMovie/useCurrentMovie'

export const HomePage = () => {
  const { data: upcomingMovies, isLoading: isLoadingUpComingMovies } = useGetMovies(GetMoviesType.GET_MOVIES_UPCOMING)
  const { data: popularMovies, isLoading: isLoadingPopularMovies } = useGetMovies(GetMoviesType.GET_MOVIES_POPULAR)
  const { data: topRatedMovies, isLoading: isLoadingRatedMovies } = useGetMovies(GetMoviesType.GET_MOVIES_TOP_RATED)
  const { onPressMovie } = useCurrentMovie()

  const isLoading = useMemo(
    () => isLoadingPopularMovies && isLoadingPopularMovies && isLoadingRatedMovies,
    [isLoadingPopularMovies, isLoadingRatedMovies, isLoadingUpComingMovies]
  )

  const isError = useMemo(
    () => !upcomingMovies && !popularMovies && !topRatedMovies,
    [upcomingMovies, popularMovies, topRatedMovies]
  )

  if (isLoading) return <ActivityIndicator />

  if (isError) return <ErrorMessage />

  return (
    <div className="flex w-screen h-screen">
      <div className="overflow-y-auto w-full">
        <HorizontalCarousel
          data={popularMovies?.results}
          title={'Popular Movies'}
          isLoading={isLoadingPopularMovies}
          handlePressMovie={onPressMovie}
        />
        <HorizontalCarousel
          data={upcomingMovies?.results}
          title={'Upcoming Movies'}
          isLoading={isLoadingUpComingMovies}
          handlePressMovie={onPressMovie}
        />
        <HorizontalCarousel
          data={topRatedMovies?.results}
          title={'Top Rated Movies'}
          isLoading={isLoadingRatedMovies}
          handlePressMovie={onPressMovie}
        />
      </div>
      <NavbarDetail />
      <ModalDetail />
    </div>
  )
}
