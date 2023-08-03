import { faker } from '@faker-js/faker'
import { Movie } from 'interfaces'
import { render, screen } from '@testing-library/react'
import { HomePage } from '../pages/HomePage'
import { createAppWrapper } from 'utils/createAppWrapper'
import * as UseGetMoviesHook from 'hooks/useGetMovies/useGetMovies'

const item: Movie = {
  id: faker.string.uuid(),
  title: faker.lorem.words(),
}

describe('HomePage', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render correctly', () => {
    const useGetMoviesMock = jest
      .spyOn(UseGetMoviesHook, 'useGetMovies')
      .mockReturnValue({ data: { results: [item] }, isLoading: false } as any)

    render(<HomePage />, { wrapper: createAppWrapper })

    expect(screen.getByTestId('home-page-container')).toBeTruthy()
    expect(screen.getAllByTestId('card').length).toEqual(6)
    expect(screen.getByText('Popular Movies')).toBeTruthy()
    expect(screen.getByText('Upcoming Movies')).toBeTruthy()
    expect(screen.getByText('Top Rated Movies')).toBeTruthy()

    useGetMoviesMock.mockRestore()
  })

  it('should render ActivityIndicator', () => {
    render(<HomePage />, { wrapper: createAppWrapper })

    expect(screen.getByTestId('activity-indicator-container')).toBeTruthy()
  })

  it('should render ErrorMessage', () => {
    const useGetMoviesMock = jest
      .spyOn(UseGetMoviesHook, 'useGetMovies')
      .mockReturnValue({ data: undefined, isLoading: false } as any)

    render(<HomePage />, { wrapper: createAppWrapper })

    expect(screen.getByTestId('error-message-container')).toBeTruthy()

    useGetMoviesMock.mockRestore()
  })
})
