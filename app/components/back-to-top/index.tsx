'use client'

import { useCallback, useEffect, useState } from 'react'
import { Button } from '../button'
import { TbArrowNarrowUp } from 'react-icons/tb'

export const BackTopTop = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (!show && window.screenY > 500) setShow(true)
    if (!show && window.screenY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return show ? (
    <div>
      <Button onClick={scrollToTop} className="shadow-lg shadow-fuchsia-400/20">
        <TbArrowNarrowUp size={20} />
      </Button>
    </div>
  ) : null
}
