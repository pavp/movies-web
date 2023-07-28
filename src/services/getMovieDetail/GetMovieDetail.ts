import apiClient from 'api/ApiClient'
import { API_GET_DETAIL } from 'config/app'

export const getMovieDetail = async (id: number | string) => {
  const { data } = await apiClient.get(`${API_GET_DETAIL}${id}`)

  return data
}
