const KEYS_STORAGE = {
  SESSION_ID: 'session_id',
}

const storeData = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

const getData = (key: string) => {
  try {
    const value = localStorage.getItem(key)
    if (value !== null) {
      return value
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
}

export { storeData, getData, KEYS_STORAGE }
