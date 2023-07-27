import { GetMoviesType } from 'interfaces'
import apiClient from 'api/ApiClient'

export const getMovies = async (type: GetMoviesType) => {
  const { data } = await apiClient.get(type)

  return data
}
