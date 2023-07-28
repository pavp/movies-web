import apiClient from 'api/ApiClient'
import { API_CREATE_SESSION } from 'config/app'

export const postSession = async (requestToken: string) => {
  const { data } = await apiClient.post(API_CREATE_SESSION, {
    request_token: requestToken,
  })

  return data
}
