import React, { PropsWithChildren } from 'react'
import { MemoryRouter } from 'react-router-dom'
import SessionContext from 'context/SessionContext/SessionContext'
import { ReactQueryWrapper } from './createReactQueryWrapper'

export const setSessionMock = jest.fn()
export const getSessionMock = jest.fn()

export const SessionContextProviderWrapper = ({ children }: PropsWithChildren) => (
  <SessionContext.Provider value={{ session: 'sessionTest', setSession: setSessionMock, getSession: getSessionMock }}>
    {children}
  </SessionContext.Provider>
)

export const createAppWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryWrapper>
      <MemoryRouter>
        <SessionContextProviderWrapper>{children}</SessionContextProviderWrapper>
      </MemoryRouter>
    </ReactQueryWrapper>
  )
}
