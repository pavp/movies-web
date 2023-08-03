import { useContext } from 'react'
import { faker } from '@faker-js/faker'
import { fireEvent, render, screen } from '@testing-library/react'
import { createAppWrapper, getSessionMock, setSessionMock } from 'utils/createAppWrapper'
import SessionContext from 'context/SessionContext/SessionContext'

describe('createAppWrapper', () => {
  it('should renders correctly with createAppWrapper', () => {
    const value = faker.lorem.word()
    const CustomComponent = () => <div>{value}</div>

    render(<CustomComponent />, { wrapper: createAppWrapper })

    expect(screen.getByText(value)).toBeTruthy()
  })

  it('SessionContextProviderWrapper sets and gets session correctly', async () => {
    const sessionMock = faker.lorem.word()
    getSessionMock.mockReturnValueOnce(sessionMock)
    const CustomComponent = () => {
      const { setSession, getSession } = useContext(SessionContext)

      const handleClick = () => {
        const newSession = getSession(false)
        setSession(`New Session: ${newSession}`)
      }

      return (
        <button onClick={handleClick} data-testid="clock">
          Update Session
        </button>
      )
    }

    render(<CustomComponent />, { wrapper: createAppWrapper })
    const button = screen.getByText('Update Session')
    fireEvent.click(button)

    expect(setSessionMock).toHaveBeenCalledWith(`New Session: ${sessionMock}`)
  })
})
