'use client'

import { useState } from 'react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import styles from './StartProject.module.css'

const WEBSITE_SERVICES = ['New Website', 'Website Redesign', 'Online Store (Shopify)', 'Landing Page', 'Full Package (Website + Ads)']

const SERVICE_OPTIONS = [
  'New Website',
  'Website Redesign',
  'Online Store (Shopify)',
  'Landing Page',
  'Google Ads',
  'Facebook & Instagram Ads',
  'Full Package (Website + Ads)',
  'Other',
]

const INDUSTRY_OPTIONS = [
  'Landscaping', 'Plumbing', 'Electrical', 'HVAC', 'Auto Detailing',
  'Roofing', 'Painting', 'Cleaning Services', 'Dentist', 'Restaurant',
  'Real Estate', 'Fitness & Gym', 'E-Commerce', 'Other',
]

const GOAL_OPTIONS = [
  'Get more phone calls',
  'Get form submissions',
  'Book appointments online',
  'Sell products online',
  'Build brand awareness',
  'Other',
]

export default function StartProject() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isPending, setIsPending] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const showPages = WEBSITE_SERVICES.includes(selectedService)

  function validate(form: FormData): boolean {
    const required = ['fullName', 'businessName', 'phone', 'email', 'service', 'industry', 'city', 'budget']
    const newErrors: Record<string, boolean> = {}
    let valid = true
    for (const field of required) {
      if (!form.get(field)?.toString().trim()) {
        newErrors[field] = true
        valid = false
      }
    }
    setErrors(newErrors)
    return valid
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    if (!validate(formData)) return

    setIsPending(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      if (res.ok) setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
    setIsPending(false)
  }

  return (
    <section id="start-project" className={styles.section}>
      <div className="container">
        <RevealOnScroll>
          <div className={styles.header}>
            <div className={styles.tag}>
              <span className="diamond">&#9670;</span>
              Ready to Get Started?
            </div>
            <h2 className={styles.title}>
              Tell Us About Your <span className="gold">Project</span>
            </h2>
            <p className={styles.subtitle}>
              Fill out the details below and we&apos;ll get back to you within 24 hours with a custom proposal.
            </p>

            {!isOpen && !submitted && (
              <button
                className={styles.openBtn}
                onClick={() => setIsOpen(true)}
              >
                Start Your Project &rarr;
              </button>
            )}
          </div>
        </RevealOnScroll>

        <div className={`${styles.formContainer} ${isOpen ? styles.formOpen : ''}`}>
          {submitted ? (
            <RevealOnScroll>
              <div className={styles.success}>
                <div className={styles.successIcon}>&#10003;</div>
                <h3>Thank You!</h3>
                <p>We&apos;ve received your project details and will be in touch within 24 hours.</p>
              </div>
            </RevealOnScroll>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="hidden" name="access_key" value="3fb970af-282e-447e-9df2-446153210220" />
              <input type="hidden" name="subject" value="New Project Inquiry - ASD Digital" />
              <input type="hidden" name="cc" value="david.cortes@asd-digital.com,shrish.raja@asd-digital.com" />

              {/* Section 1 */}
              <div className={styles.formSection}>
                <div className={styles.sectionLabel}>
                  <span className={styles.sectionNumber}>01</span>
                  About You
                </div>

                <div className={styles.fieldGrid}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                      placeholder="John Smith"
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                      Business Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      className={`${styles.input} ${errors.businessName ? styles.inputError : ''}`}
                      placeholder="Your Business LLC"
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                      Phone Number <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>
                      Website URL <span className={styles.optional}>(optional)</span>
                    </label>
                    <input
                      type="url"
                      name="website"
                      className={styles.input}
                      placeholder="https://yoursite.com"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className={styles.formSection}>
                <div className={styles.sectionLabel}>
                  <span className={styles.sectionNumber}>02</span>
                  Your Project
                </div>

                <div className={styles.fieldGrid}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                      What service are you interested in? <span className={styles.required}>*</span>
                    </label>
                    <select
                      name="service"
                      className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
                      defaultValue=""
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="" disabled>Select a service</option>
                      {SERVICE_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                      What industry is your business in? <span className={styles.required}>*</span>
                    </label>
                    <select
                      name="industry"
                      className={`${styles.select} ${errors.industry ? styles.inputError : ''}`}
                      defaultValue=""
                    >
                      <option value="" disabled>Select your industry</option>
                      {INDUSTRY_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                      What city/area does your business serve? <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      className={`${styles.input} ${errors.city ? styles.inputError : ''}`}
                      placeholder="Phoenix, AZ"
                    />
                  </div>

                  {showPages && (
                    <div className={styles.fieldGroup}>
                      <label className={styles.label}>How many pages do you need?</label>
                      <select name="pages" className={styles.select} defaultValue="">
                        <option value="" disabled>Select</option>
                        <option value="1-3 pages">1-3 pages</option>
                        <option value="4-7 pages">4-7 pages</option>
                        <option value="8-15 pages">8-15 pages</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>
                  )}

                  <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Do you have a logo?</label>
                    <div className={styles.radioGroup}>
                      {['Yes', 'No', 'I need one'].map(opt => (
                        <label key={opt} className={styles.radioLabel}>
                          <input type="radio" name="hasLogo" value={opt} className={styles.radio} />
                          <span className={styles.radioCustom} />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Do you have photos of your business/work?</label>
                    <div className={styles.radioGroup}>
                      {['Yes', 'No', 'I need help with this'].map(opt => (
                        <label key={opt} className={styles.radioLabel}>
                          <input type="radio" name="hasPhotos" value={opt} className={styles.radio} />
                          <span className={styles.radioCustom} />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Do you have the text/copy for your website?</label>
                    <div className={styles.radioGroup}>
                      {['Yes', 'No', 'I need help writing it'].map(opt => (
                        <label key={opt} className={styles.radioLabel}>
                          <input type="radio" name="hasCopy" value={opt} className={styles.radio} />
                          <span className={styles.radioCustom} />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className={styles.formSection}>
                <div className={styles.sectionLabel}>
                  <span className={styles.sectionNumber}>03</span>
                  Goals &amp; Budget
                </div>

                <div className={styles.fieldGrid}>
                  <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>
                      What is the main goal of your website? <span className={styles.optional}>(select all that apply)</span>
                    </label>
                    <div className={styles.checkboxGroup}>
                      {GOAL_OPTIONS.map(opt => (
                        <label key={opt} className={styles.checkboxLabel}>
                          <input type="checkbox" name="goals" value={opt} className={styles.checkbox} />
                          <span className={styles.checkboxCustom}>&#10003;</span>
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>
                      What is your budget range? <span className={styles.required}>*</span>
                    </label>
                    <select
                      name="budget"
                      className={`${styles.select} ${errors.budget ? styles.inputError : ''}`}
                      defaultValue=""
                    >
                      <option value="" disabled>Select your budget</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                      <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label}>How soon do you need this done?</label>
                    <select name="timeline" className={styles.select} defaultValue="">
                      <option value="" disabled>Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 2 weeks">Within 2 weeks</option>
                      <option value="Within a month">Within a month</option>
                      <option value="No rush — just exploring">No rush — just exploring</option>
                    </select>
                  </div>

                  <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>
                      Anything else you want us to know? <span className={styles.optional}>(optional)</span>
                    </label>
                    <textarea
                      name="notes"
                      className={styles.textarea}
                      rows={4}
                      placeholder="Tell us more about your project, vision, or any specific requirements..."
                    />
                  </div>
                </div>
              </div>

              <button type="submit" disabled={isPending} className={styles.submitBtn}>
                {isPending ? 'Submitting...' : 'Submit Project Details →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
