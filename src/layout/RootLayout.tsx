import { ReactNode } from 'react'
import { Navbar } from './Navbar'

interface IRootLayout {
  children: ReactNode
}

export const RootLayout = ({ children }: IRootLayout) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  )
}
