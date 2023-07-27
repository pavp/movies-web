import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RootLayout } from 'layout'
import { WishlistPage } from 'modules/wishlist/pages/WishlistPage'
import { HomePage } from 'modules/home/pages/HomePage'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { RedirectPage } from 'modules/redirect/pages/RedirectPage'
import { SessionGlobalState } from 'context/SessionContext/SessionGlobalState'

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
