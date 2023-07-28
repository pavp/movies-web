import { useMutation } from '@tanstack/react-query'
import SessionContext from 'context/SessionContext/SessionContext'
import { Session } from 'interfaces'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { postSession } from 'services'
import { KEYS_STORAGE, storeData } from 'utils/asyncStorageManager'

export const useCreateSession = () => {
  const { setSession } = useContext(SessionContext)
  const navigate = useNavigate()

  const { mutate: createSession } = useMutation<Session, Error, string>((requestToken) => postSession(requestToken), {
    onSuccess: (data) => {
      if (data.success && data.session_id) {
        storeData(KEYS_STORAGE.SESSION_ID, data.session_id)
        setSession(data.session_id)
        navigate('/wishlist')
      }
    },
  })

  return { createSession }
}
