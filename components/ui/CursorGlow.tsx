'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hasPointer = window.matchMedia('(pointer: fine)').matches
    if (!hasPointer) return

    const dot = dotRef.current
    const circle = circleRef.current
    if (!dot || !circle) return

    dot.style.display = 'block'
    circle.style.display = 'block'
    document.body.style.cursor = 'none'

    let mouseX = 0
    let mouseY = 0
    let dotX = 0
    let dotY = 0
    let circleX = 0
    let circleY = 0
    let isHovering = false
    let animationId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, label')
      if (isInteractive) {
        isHovering = true
        circle.style.width = '56px'
        circle.style.height = '56px'
        circle.style.borderColor = 'rgba(201, 168, 76, 0.6)'
        dot.style.opacity = '0'
        dot.style.transform = 'translate(-50%, -50%) scale(0)'
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, label')
      if (isInteractive) {
        isHovering = false
        circle.style.width = '40px'
        circle.style.height = '40px'
        circle.style.borderColor = 'rgba(201, 168, 76, 0.3)'
        dot.style.opacity = '1'
        dot.style.transform = 'translate(-50%, -50%) scale(1)'
      }
    }

    const animate = () => {
      dotX += (mouseX - dotX) * 0.2
      dotY += (mouseY - dotY) * 0.2
      circleX += (mouseX - circleX) * 0.08
      circleY += (mouseY - circleY) * 0.08

      dot.style.left = `${dotX}px`
      dot.style.top = `${dotY}px`
      circle.style.left = `${circleX}px`
      circle.style.top = `${circleY}px`

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(animationId)
      document.body.style.cursor = ''
    }
  }, [])

  const baseStyle = {
    display: 'none' as const,
    position: 'fixed' as const,
    pointerEvents: 'none' as const,
    transform: 'translate(-50%, -50%)',
    zIndex: 99999,
    borderRadius: '50%',
    transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, border-color 0.3s ease, transform 0.2s ease',
  }

  return (
    <>
      {/* Small gold dot */}
      <div
        ref={dotRef}
        style={{
          ...baseStyle,
          width: '8px',
          height: '8px',
          background: 'var(--gold)',
        }}
      />
      {/* Large circle outline */}
      <div
        ref={circleRef}
        style={{
          ...baseStyle,
          width: '40px',
          height: '40px',
          background: 'transparent',
          border: '1.5px solid rgba(201, 168, 76, 0.3)',
        }}
      />
    </>
  )
}
