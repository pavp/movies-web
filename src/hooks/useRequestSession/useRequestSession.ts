import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { RequestToken } from 'interfaces'
import { getToken } from 'services'
import { BASE_REQUEST_TOKEN_URL } from 'config/app'

const REDIRECT_URL = `${window.location.href}redirect`

const useRequestToken = () =>
  useQuery<RequestToken, Error>(['request-token'], () => getToken(), {
    enabled: false,
  })

export const useRequestSession = () => {
  const { data, refetch: requestSession, isLoading } = useRequestToken()

  useEffect(() => {
    if (data?.success && data?.request_token) {
      window.location.replace(`${BASE_REQUEST_TOKEN_URL + data.request_token}?redirect_to=${REDIRECT_URL}`)
    }
  }, [data])

  return { requestSession, isLoading }
}
