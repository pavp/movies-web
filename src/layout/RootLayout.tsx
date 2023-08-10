import { ReactNode } from 'react'
import { Navbar } from './Navbar'

interface IRootLayout {
  children: ReactNode
}

export const RootLayout = ({ children }: IRootLayout) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-hidden bg-c-dark-purple w-full">{children}</div>
    </div>
  )
}
