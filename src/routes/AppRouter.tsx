import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RootLayout } from 'layout'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { SessionGlobalState } from 'context/SessionContext/SessionGlobalState'
import { HomePage, WishlistPage, RedirectPage } from 'modules'

export const AppRouter = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SessionGlobalState>
        <BrowserRouter>
          <RootLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="wishlist" element={<WishlistPage />} />
              <Route path="redirect" element={<RedirectPage />} />
              <Route path="/*" element={<Navigate to={'/'} replace />} />
            </Routes>
          </RootLayout>
        </BrowserRouter>
      </SessionGlobalState>
    </QueryClientProvider>
  )
}
