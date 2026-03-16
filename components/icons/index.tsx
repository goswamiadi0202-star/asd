import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

export function ArrowRight({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Star({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 1.5l2.47 5.01L18 7.26l-4 3.9.94 5.49L10 13.77l-4.94 2.88L6 11.16l-4-3.9 5.53-.75L10 1.5z" />
    </svg>
  )
}

export function Mail({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Phone({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M3 4.5C3 3.67 3.67 3 4.5 3h2.59c.4 0 .76.27.88.66l.96 3.2a.91.91 0 01-.27.92L7.22 9.22a10.48 10.48 0 004.56 4.56l1.44-1.44a.91.91 0 01.92-.27l3.2.96c.39.12.66.48.66.88V16.5c0 .83-.67 1.5-1.5 1.5A14.5 14.5 0 013 4.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Instagram({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
    </svg>
  )
}

export function LinkedIn({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4.94 6.73H2.1v9.54h2.84V6.73zM3.52 5.52c.93 0 1.52-.63 1.52-1.42C5.02 3.27 4.45 2.67 3.54 2.67S2 3.27 2 4.1c0 .79.59 1.42 1.5 1.42h.02zM7.57 6.73h2.72v1.3h.04c.38-.71 1.3-1.46 2.68-1.46 2.86 0 3.39 1.89 3.39 4.34v5.36h-2.83v-4.75c0-1.13-.02-2.59-1.58-2.59-1.58 0-1.82 1.23-1.82 2.5v4.84H7.57V6.73z" />
    </svg>
  )
}

export function TwitterX({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M14.28 2.5h2.44l-5.33 6.1L17.5 17.5h-4.91l-3.85-5.03-4.4 5.03H1.9l5.7-6.52L1.5 2.5h5.04l3.48 4.6 4.26-4.6zm-.86 13.5h1.35L6.68 3.88H5.22l8.2 12.12z" />
    </svg>
  )
}

export function WebsiteIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="2" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="4.5" cy="5" r="0.75" fill="currentColor" />
      <circle cx="6.5" cy="5" r="0.75" fill="currentColor" />
      <circle cx="8.5" cy="5" r="0.75" fill="currentColor" />
      <rect x="4" y="9" width="5" height="6" rx="0.5" stroke="currentColor" strokeWidth="1" />
      <line x1="11" y1="9.5" x2="16" y2="9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="11" y1="11.5" x2="16" y2="11.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="11" y1="13.5" x2="14" y2="13.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

export function AdvertisingIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 2l1.5 3.5L15 7l-3.5 1.5L10 12 8.5 8.5 5 7l3.5-1.5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 12l.75 1.75L17.5 14.5l-1.75.75L15 17l-.75-1.75-1.75-.75 1.75-.75L15 12z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <path d="M4 11l.5 1.25L5.75 12.75l-1.25.5L4 14.5l-.5-1.25L2.25 12.75l1.25-.5L4 11z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  )
}

export function ScalingIcon({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <line x1="3" y1="17" x2="3" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="17" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="5" y="12" width="2.5" height="5" rx="0.5" fill="currentColor" opacity="0.6" />
      <rect x="9" y="9" width="2.5" height="8" rx="0.5" fill="currentColor" opacity="0.8" />
      <rect x="13" y="5" width="2.5" height="12" rx="0.5" fill="currentColor" />
      <circle cx="6.25" cy="11" r="1.25" fill="currentColor" />
      <circle cx="10.25" cy="8" r="1.25" fill="currentColor" />
      <circle cx="14.25" cy="4" r="1.25" fill="currentColor" />
      <line x1="6.25" y1="11" x2="10.25" y2="8" stroke="currentColor" strokeWidth="1" />
      <line x1="10.25" y1="8" x2="14.25" y2="4" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function Send({ className, size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2.5 10L17.5 3 12.5 17.5 10 11.5 2.5 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="10" y1="11.5" x2="17.5" y2="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
