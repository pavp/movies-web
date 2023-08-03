import { PropsWithChildren } from 'react'
import { MemoryRouter } from 'react-router-dom'
import SessionContext from 'context/SessionContext/SessionContext'
import { ReactQueryWrapper } from './createReactQueryWrapper'

interface ICreateAppWrapper extends PropsWithChildren {
  session?: string
  withSession?: boolean
}

export const setSessionMock = jest.fn()
export const getSessionMock = jest.fn()

export const SessionContextProviderWrapper = ({ children, session }: ICreateAppWrapper) => (
  <SessionContext.Provider value={{ session, setSession: setSessionMock, getSession: getSessionMock }}>
    {children}
  </SessionContext.Provider>
)

export const createAppWrapper = ({ children, session = 'sessionTest', withSession = true }: ICreateAppWrapper) => {
  return (
    <ReactQueryWrapper>
      <SessionContextProviderWrapper session={withSession ? session : undefined}>
        <MemoryRouter>{children}</MemoryRouter>
      </SessionContextProviderWrapper>
    </ReactQueryWrapper>
  )
}
