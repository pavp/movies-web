import axios from 'axios'
import { API_KEY, BASE_URL } from 'services/constants'

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    api_key: API_KEY,
  },
})
