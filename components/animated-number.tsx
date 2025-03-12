"use client"

import { useEffect, useRef, useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedNumberProps {
  value: number
  duration?: number
  className?: string
  suffix?: string
}

export function AnimatedNumber({ value, duration = 2000, className = "", suffix = "" }: AnimatedNumberProps) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.3 })
  const countRef = useRef({ start: 0, end: value, animationFrameId: 0 })

  useEffect(() => {
    if (!isInView) return

    const { start, end } = countRef.current
    const startTime = performance.now()
    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const easedProgress = easeOutQuad(progress)

      if (end >= 1000) {
        // For larger numbers, round to nearest 10 during animation
        const currentValue = Math.floor(start + easedProgress * (end - start))
        setCount(currentValue)
      } else {
        // For smaller numbers, allow decimals during animation
        const currentValue = Math.floor(start + easedProgress * (end - start))
        setCount(currentValue)
      }

      if (progress < 1) {
        countRef.current.animationFrameId = requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    countRef.current.animationFrameId = requestAnimationFrame(updateCount)

    return () => {
      cancelAnimationFrame(countRef.current.animationFrameId)
    }
  }, [isInView, duration])

  // Easing function for smoother animation
  const easeOutQuad = (t: number) => t * (2 - t)

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}

