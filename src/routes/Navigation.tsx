import { Root } from 'layout/Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorScreen } from 'screens/errorScreen/ErrorScreen'

export const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorScreen />,
    },
  ])

  return <RouterProvider router={router} />
}
