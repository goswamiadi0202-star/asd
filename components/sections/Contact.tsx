'use client'

import { useState } from 'react'
import type { SiteSettings } from '@/lib/types'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { Mail, Phone, Instagram, LinkedIn, TwitterX, Send } from '@/components/icons'
import styles from './Contact.module.css'

interface ContactProps {
  settings: SiteSettings
}

const socialIcons = {
  instagram: Instagram,
  linkedin: LinkedIn,
  twitter: TwitterX,
} as const

export default function Contact({ settings }: ContactProps) {
  const [submitted, setSubmitted] = useState(false)
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsPending(true)
    const form = e.currentTarget
    const formData = new URLSearchParams(new FormData(form) as unknown as Record<string, string>)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
    setIsPending(false)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.contactGrid}>
          <RevealOnScroll>
            <div className={styles.contactInfo}>
              <div className={styles.contactTag}>
                <span className="diamond">&#9670;</span>
                Get In Touch
              </div>
              <h2 className={styles.contactHeading}>{settings.contactFormHeading}</h2>
              <p className={styles.contactDesc}>{settings.contactFormDescription}</p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <Mail className={styles.contactIcon} size={20} />
                  <a href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</a>
                </div>
                <div className={styles.contactItem}>
                  <Phone className={styles.contactIcon} size={20} />
                  <a href={`tel:${settings.contactPhone}`}>{settings.contactPhone}</a>
                </div>
              </div>

              <div className={styles.socialLinks}>
                {settings.socialLinks.map((link) => {
                  const Icon = socialIcons[link.platform]
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={link.platform}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className={styles.contactFormWrapper}>
              {submitted ? (
                <div className={styles.formSuccess}>
                  <div className={styles.successIcon}>&#10003;</div>
                  <h3>Message Sent!</h3>
                  <p>We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className={styles.contactForm}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=" "
                      required
                      className={styles.formInput}
                    />
                    <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=" "
                      required
                      className={styles.formInput}
                    />
                    <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                  </div>

                  <div className={styles.formGroup}>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={styles.formSelect}
                    >
                      <option value="" disabled>Select a Service</option>
                      <option value="Web Design & Development">Web Design &amp; Development</option>
                      <option value="Paid Advertising">Paid Advertising</option>
                      <option value="Business Scaling">Business Scaling</option>
                      <option value="Full Strategy Package">Full Strategy Package</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <textarea
                      id="message"
                      name="message"
                      placeholder=" "
                      required
                      rows={5}
                      className={styles.formTextarea}
                    />
                    <label htmlFor="message" className={styles.formLabel}>Your Message</label>
                  </div>

<button type="submit" disabled={isPending} className={styles.submitBtn}>
                    {isPending ? 'Sending...' : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
