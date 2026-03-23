'use client'

import { ReactNode, useRef, useCallback } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'large'
  fullWidth?: boolean
  href?: string
  children: ReactNode
  onClick?: () => void
}

export default function Button({
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  href,
  children,
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-3px) scale(1.02)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }, [])

  const className = [
    variant === 'primary' ? styles.btnPrimary : styles.btnSecondary,
    size === 'large' ? styles.btnLarge : '',
    fullWidth ? styles.btnFull : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={className}
      onClick={onClick}
      ref={ref as React.Ref<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
