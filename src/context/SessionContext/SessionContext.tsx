import { createContext } from 'react'

interface ISessionContext {
  session: string | undefined
  setSession: (id: string) => void
  getSession: (callRequestSession: boolean) => void
}

export default createContext<ISessionContext>({
  session: '',
  setSession: () => {},
  getSession: () => {},
})
