import { fireEvent, render, screen } from '@testing-library/react'
import { WishlistButton } from 'components'
import * as UseWishListItemHook from 'hooks/useAddWishListItem/useWishListItem'

describe('WishlistButton', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should call addWishListItem and render text Add Wishlist', () => {
    const addWishListItemMock = jest.fn()
    jest
      .spyOn(UseWishListItemHook, 'useWishListItem')
      .mockReturnValueOnce({ isWatchList: true, addWishListItem: addWishListItemMock })

    render(<WishlistButton />)
    fireEvent.click(screen.getByRole('button'))

    expect(addWishListItemMock).toBeCalled()
    expect(screen.getByText('Add Wishlist')).toBeInTheDocument()
  })

  it('should render text Remove Wishlist', () => {
    jest
      .spyOn(UseWishListItemHook, 'useWishListItem')
      .mockReturnValueOnce({ isWatchList: false, addWishListItem: jest.fn() })

    render(<WishlistButton />)

    expect(screen.getByText('Remove Wishlist')).toBeInTheDocument()
  })
})
