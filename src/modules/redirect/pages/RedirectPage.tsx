import useCreateSession from 'hooks/useCreateSession/useCreateSession'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const RedirectPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { createSession } = useCreateSession()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const requestToken = searchParams.get('request_token')
    const approved = searchParams.get('approved')

    if (approved === 'true' && requestToken) {
      createSession(requestToken)

      return
    }
    navigate('/')
  }, [location.search])

  return (
    <>
      <div>Wait a moment please...</div>
    </>
  )
}
