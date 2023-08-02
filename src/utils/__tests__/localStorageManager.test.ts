import { faker } from '@faker-js/faker'
import { storeData, KEYS_STORAGE, getData } from 'utils/localStorageManager'

describe('localStorageManager', () => {
  it('should call setItem', async () => {
    const data = faker.lorem.word()
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')

    storeData(KEYS_STORAGE.SESSION_ID, data)

    expect(setItemSpy).toBeCalledWith(KEYS_STORAGE.SESSION_ID, data)
  })

  it('should call getItem and return data', async () => {
    const data = faker.lorem.word()
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(data)

    const response = getData(KEYS_STORAGE.SESSION_ID)

    expect(getItemSpy).toBeCalledWith(KEYS_STORAGE.SESSION_ID)
    expect(response).toEqual(data)
  })
})
