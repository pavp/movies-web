import { faker } from '@faker-js/faker'
import { Movie } from 'interfaces'
import { render, screen } from '@testing-library/react'
import { WishlistPage } from '../pages/WishlistPage'
import { createAppWrapper } from 'utils/createAppWrapper'
import * as UseGetWishListMoviesHook from 'hooks/useGetWishListMovies/useGetWishListMovies'

const item: Movie = {
  id: faker.string.uuid(),
  title: faker.lorem.words(),
}

describe('WishlistPage', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should render correctly', () => {
    const useGetWishListMoviesMock = jest
      .spyOn(UseGetWishListMoviesHook, 'useGetWishListMovies')
      .mockReturnValue({ data: { results: [item] }, isLoading: false, isError: false } as any)

    render(<WishlistPage />, { wrapper: createAppWrapper })

    expect(screen.getByTestId('wishlist-page-container')).toBeTruthy()
    expect(screen.getAllByTestId('card').length).toEqual(1)

    useGetWishListMoviesMock.mockRestore()
  })

  it('should render RequestSessionPage', () => {
    render(<WishlistPage />, { wrapper: ({ children }) => createAppWrapper({ children, withSession: false }) })

    expect(screen.getByTestId('request-session-page-container')).toBeTruthy()
  })

  it('should render ActivityIndicator', () => {
    render(<WishlistPage />, { wrapper: createAppWrapper })

    expect(screen.getByTestId('activity-indicator-container')).toBeTruthy()
  })

  it('should render ErrorMessage', () => {
    const useGetWishListMoviesMock = jest
      .spyOn(UseGetWishListMoviesHook, 'useGetWishListMovies')
      .mockReturnValue({ data: { results: [item] }, isLoading: false, isError: true } as any)

    render(<WishlistPage />, { wrapper: createAppWrapper })

    expect(screen.getByTestId('error-message-container')).toBeTruthy()

    useGetWishListMoviesMock.mockRestore()
  })
})
