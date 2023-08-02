import { PropsWithChildren, useEffect, useState } from 'react'
import SessionContext from './SessionContext'
import { useRequestSession } from 'hooks'
import { KEYS_STORAGE, getData } from 'utils/localStorageManager'

export const SessionGlobalState = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<string>('')
  const { requestSession } = useRequestSession()

  const getSession = (callRequestSession: boolean = false) => {
    const sessionId = getData(KEYS_STORAGE.SESSION_ID)

    if (sessionId) {
      setSession(sessionId)

      return
    }
    if (callRequestSession) requestSession()
  }

  useEffect(() => {
    getSession()
  }, [])

  return <SessionContext.Provider value={{ session, getSession, setSession }}>{children}</SessionContext.Provider>
}
