import { useState, useEffect } from 'react'

export const useScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header at the top of the page
      if (currentScrollY < 100) {
        setIsVisible(true)
        setLastScrollY(currentScrollY)
        return
      }

      // Hide/show based on scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false)
      } else {
        // Scrolling up - show header
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return { isVisible }
}
