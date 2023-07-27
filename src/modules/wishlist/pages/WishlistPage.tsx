import SessionContext from 'context/SessionContext/SessionContext'
import { useContext } from 'react'

export const WishlistPage = () => {
  const { session, getSession } = useContext(SessionContext)

  if (!session) {
    return (
      <>
        <button onClick={() => getSession(true)}>Login</button>
      </>
    )
  }

  return (
    <>
      <div>Estos son los wishlist</div>
    </>
  )
}
