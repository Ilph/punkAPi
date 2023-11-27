import { useEffect, useState } from 'react'

import { throttle } from '../utils/throttle'

export const useScroll = (pageNumber: number) => {
  const [page, setPage] = useState(pageNumber)

  const scrollHandler = () => {
    const height = document.body.offsetHeight
    const screenHeight = window.innerHeight
    const scrolled = window.scrollY
    const threshold = height - screenHeight / 4
    const position = scrolled + screenHeight

    if (position >= threshold) {
      setPage((page) => page + 1)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', throttle(scrollHandler, 500))
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return page
}
