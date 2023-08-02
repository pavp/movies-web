import { useWishListItem } from 'hooks'

export const WishlistButton = () => {
  const { isWatchList, addWishListItem } = useWishListItem()

  return (
    <button className="p-2 hover:bg-c-light-blue" onClick={() => addWishListItem()}>
      <span style={{ color: 'white', fontSize: 16 }} className="">
        <i className="fa-solid fa-bookmark"></i>
      </span>
      <div className="text-white mt-2">{isWatchList ? 'Add Wishlist' : 'Remove Wishlist'}</div>
    </button>
  )
}
