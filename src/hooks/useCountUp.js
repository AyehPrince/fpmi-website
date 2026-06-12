"use client"
import { useState, useEffect, useRef } from "react"

export function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!startOnView) {
      startCounting()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
  setCount(0)
  startCounting()
}
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  function startCounting() {
    const startTime = Date.now()
    const endValue = parseInt(end.toString().replace(/[^0-9]/g, ""))

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * endValue))

      if (progress >= 1) {
        setCount(endValue)
        clearInterval(timer)
      }
    }, 16)
  }

  return { count, ref }
}