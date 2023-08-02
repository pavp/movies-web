import { renderHook, waitFor } from '@testing-library/react'
import { useCreateSession } from '../useCreateSession'
import { Session } from 'interfaces'
import * as PostSession from 'services/postSession/PostSession'
import { createAppWrapper, setSessionMock } from 'utils/createAppWrapper'
import { faker } from '@faker-js/faker'
import * as ReactRouterDOM from 'react-router'
import * as LocalStoreManager from 'utils/localStorageManager'

const requestToken = faker.string.uuid()

const session: Session = {
  session_id: faker.string.uuid(),
  success: true,
}

describe('useCreateSession', () => {
  beforeEach(() => jest.clearAllMocks())

  it('should set session', async () => {
    const navigateMock = jest.fn()
    jest.spyOn(PostSession, 'postSession').mockResolvedValueOnce(session)
    jest.spyOn(ReactRouterDOM, 'useNavigate').mockImplementation(() => navigateMock)
    const storeDataSpy = jest.spyOn(LocalStoreManager, 'storeData')

    const { result } = renderHook(useCreateSession, {
      wrapper: createAppWrapper,
    })
    await waitFor(() => result.current.createSession(requestToken))

    expect(setSessionMock).toBeCalledWith(session.session_id)
    expect(navigateMock).toBeCalledWith('/wishlist')
    expect(storeDataSpy).toBeCalledWith(LocalStoreManager.KEYS_STORAGE.SESSION_ID, session.session_id)
  })

  it('should not set session when session_id is undefined', async () => {
    session.session_id = undefined

    const { result } = renderHook(useCreateSession, {
      wrapper: createAppWrapper,
    })
    await waitFor(() => result.current.createSession(requestToken))

    expect(setSessionMock).not.toBeCalled()
  })
})
