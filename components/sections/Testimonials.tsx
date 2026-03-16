'use client'

import { useState, useEffect, useCallback } from 'react'
import type { Testimonial } from '@/lib/types'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { Star } from '@/components/icons'
import styles from './Testimonials.module.css'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  return (
    <section id="reviews" className={styles.testimonials}>
      <div className="container">
        <RevealOnScroll>
          <SectionHeader
            tag="Reviews"
            title="What Our Clients Say"
            goldText="Clients"
            description="Don't just take our word for it. Here's what our clients have to say about working with us."
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <div
            className={styles.testimonialsSlider}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={styles.testimonialTrack}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial._id} className={styles.testimonialCard}>
                  <div className={styles.testimonialStars}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className={styles.starIcon} />
                    ))}
                  </div>
                  <p className={styles.testimonialText}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className={styles.authorName}>{testimonial.name}</div>
                      <div className={styles.authorRole}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.sliderControls}>
              <button
                className={styles.sliderBtn}
                onClick={prevSlide}
                aria-label="Previous testimonial"
              >
                &#8592;
              </button>
              <div className={styles.sliderDots}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.sliderDot} ${index === currentSlide ? styles.sliderDotActive : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                className={styles.sliderBtn}
                onClick={nextSlide}
                aria-label="Next testimonial"
              >
                &#8594;
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
