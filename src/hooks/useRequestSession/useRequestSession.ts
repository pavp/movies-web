import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { RequestToken } from 'interfaces'
import { getToken } from 'services'
import { BASE_REQUEST_TOKEN_URL } from 'config/app'

const useRequestToken = () =>
  useQuery<RequestToken, Error>(['request-token'], () => getToken(), {
    enabled: false,
  })

export const useRequestSession = () => {
  const { data, refetch: requestSession, isLoading } = useRequestToken()

  useEffect(() => {
    if (data?.success && data?.request_token) {
      const url = `${BASE_REQUEST_TOKEN_URL + data.request_token}?redirect_to=${window.location.origin}/redirect`
      window.location.replace(url)
    }
  }, [data])

  return { requestSession, isLoading }
}
