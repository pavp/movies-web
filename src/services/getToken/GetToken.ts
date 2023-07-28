import apiClient from 'api/ApiClient'
import { API_REQUEST_TOKEN } from 'config/app'

export const getToken = async () => {
  const { data } = await apiClient.get(API_REQUEST_TOKEN)

  return data
}
