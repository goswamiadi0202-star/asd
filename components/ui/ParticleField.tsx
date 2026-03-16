'use client'
import { useState, useEffect } from 'react'

interface Particle {
  id: number
  left: string
  animationDuration: string
  animationDelay: string
  size: string
}

export default function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${8 + Math.random() * 12}s`,
        animationDelay: `${Math.random() * 10}s`,
        size: `${1 + Math.random() * 2}px`,
      }))
    )
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'var(--gold)',
            opacity: 0,
            animation: `float ${p.animationDuration} ${p.animationDelay} infinite`,
          }}
        />
      ))}
    </div>
  )
}
