import { ReactNode } from 'react'
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
  const className = [
    variant === 'primary' ? styles.btnPrimary : styles.btnSecondary,
    size === 'large' ? styles.btnLarge : '',
    fullWidth ? styles.btnFull : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
