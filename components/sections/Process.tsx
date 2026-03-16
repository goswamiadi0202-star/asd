import type { ProcessStep } from '@/lib/types'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import styles from './Process.module.css'

interface ProcessProps {
  steps: ProcessStep[]
}

export default function Process({ steps }: ProcessProps) {
  return (
    <section id="process" className={styles.process}>
      <div className="container">
        <RevealOnScroll>
          <SectionHeader
            tag="Process"
            title="How We Deliver Results"
            goldText="Results"
            description="Our proven four-step process ensures every project is delivered with precision and excellence."
          />
        </RevealOnScroll>

        <div className={styles.processTimeline}>
          {steps.map((step, index) => (
            <RevealOnScroll key={step._id} delay={index * 150}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>{step.stepNumber}</div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
