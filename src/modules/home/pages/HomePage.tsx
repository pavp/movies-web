import { useMemo } from 'react'
import { ErrorMessage, HorizontalCarousel, ActivityIndicator, ModalDetail, NavbarDetail } from 'components'
import { useGetMovies, useCurrentMovie } from 'hooks'
import { GetMoviesType } from 'interfaces'

export const HomePage = () => {
  const { data: upcomingMovies, isLoading: isLoadingUpComingMovies } = useGetMovies(GetMoviesType.GET_MOVIES_UPCOMING)
  const { data: popularMovies, isLoading: isLoadingPopularMovies } = useGetMovies(GetMoviesType.GET_MOVIES_POPULAR)
  const { data: topRatedMovies, isLoading: isLoadingRatedMovies } = useGetMovies(GetMoviesType.GET_MOVIES_TOP_RATED)
  const { onPressMovie } = useCurrentMovie()

  const isLoading = useMemo(
    () => isLoadingPopularMovies && isLoadingUpComingMovies && isLoadingRatedMovies,
    [isLoadingPopularMovies, isLoadingRatedMovies, isLoadingUpComingMovies]
  )

  const isError = useMemo(
    () => !upcomingMovies && !popularMovies && !topRatedMovies,
    [upcomingMovies, popularMovies, topRatedMovies]
  )

  if (isLoading) return <ActivityIndicator />

  if (isError) return <ErrorMessage />

  return (
    <div className="flex w-screen h-screen overflow-hidden" data-testid="home-page-container">
      <div className="overflow-y-auto overscroll-none w-screen h-screen pb-20">
        <HorizontalCarousel data={popularMovies?.results} title={'Popular Movies'} handlePressMovie={onPressMovie} />
        <HorizontalCarousel data={upcomingMovies?.results} title={'Upcoming Movies'} handlePressMovie={onPressMovie} />
        <HorizontalCarousel data={topRatedMovies?.results} title={'Top Rated Movies'} handlePressMovie={onPressMovie} />
      </div>
      <NavbarDetail />
      <ModalDetail />
    </div>
  )
}
