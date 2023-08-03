import { renderHook, waitFor } from '@testing-library/react'
import { Movie } from 'interfaces'
import { useGetWishListMovies } from '../useGetWishListMovies'
import * as GetWishListMovies from 'services/getWishlistMovies/GetWishlistMovies'
import { faker } from '@faker-js/faker'
import { createAppWrapper } from 'utils/createAppWrapper'

const movie: Movie = {
  id: faker.number.int(),
  title: faker.lorem.word(),
  poster_path: faker.internet.url(),
}

describe('useGetWishListMovies', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch wish list movies when session is available', async () => {
    jest.spyOn(GetWishListMovies, 'getWishListMovies').mockResolvedValueOnce([movie])

    const { result } = renderHook(useGetWishListMovies, { wrapper: createAppWrapper })
    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual([movie])
  })

  it('should not fetch wish list movies when session is unavailable', async () => {
    const { result } = renderHook(useGetWishListMovies, {
      wrapper: ({ children }) => createAppWrapper({ children, withSession: false }),
    })
    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toBeUndefined()
  })
})
