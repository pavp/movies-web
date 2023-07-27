import { VariantsResponsiveType } from 'interfaces/responsive'
import { useEffect, useState } from 'react'

export const useGetResponsiveVariant = () => {
  const [responsiveVariant, setResponsiveVariant] = useState<VariantsResponsiveType>('2xl')

  const updateResponsiveVariant = () => {
    const screenWidth = window.innerWidth

    if (screenWidth < 640) setResponsiveVariant('sm')
    else if (screenWidth < 768) setResponsiveVariant('md')
    else if (screenWidth < 1024) setResponsiveVariant('lg')
    else if (screenWidth < 1280) setResponsiveVariant('xl')
    else setResponsiveVariant('2xl')
  }

  useEffect(() => {
    updateResponsiveVariant()
    window.addEventListener('resize', updateResponsiveVariant)

    return () => {
      window.removeEventListener('resize', updateResponsiveVariant)
    }
  }, [])

  return { responsiveVariant }
}
