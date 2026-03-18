'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

export default function RevealOnScroll({ children, delay = 0, className }: Props) {
  return (
    <div style={{ perspective: '1200px' }}>
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
        transition={{
          duration: 0.9,
          delay: delay / 1000,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ transformOrigin: 'center bottom', willChange: 'transform, opacity' }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
