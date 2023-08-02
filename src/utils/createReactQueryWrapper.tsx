import React, { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  logger: {
    log: () => {},
    warn: () => {},
    error: () => {},
  },
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export const ReactQueryWrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export const createReactQueryWrapper = ({ children }: PropsWithChildren) => {
  return <ReactQueryWrapper>{children}</ReactQueryWrapper>
}
