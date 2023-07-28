import { ReactNode } from 'react'
import { Navbar } from './Navbar'

interface IRootLayout {
  children: ReactNode
}

export const RootLayout = ({ children }: IRootLayout) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="bg-c-dark-purple min-h-screen">{children}</div>
    </div>
  )
}
