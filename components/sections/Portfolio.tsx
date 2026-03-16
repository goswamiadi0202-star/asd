'use client'

import { Project } from '@/lib/types'
import SectionHeader from '@/components/ui/SectionHeader'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import styles from './Portfolio.module.css'

interface PortfolioProps {
  projects: Project[]
}

function EcommerceMockup() {
  return (
    <div className={styles.mockupContent}>
      <div className={styles.mockupHero} />
      <div className={styles.mockupCardGrid}>
        <div className={styles.mockupCardItem} />
        <div className={styles.mockupCardItem} />
        <div className={styles.mockupCardItem} />
      </div>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className={styles.mockupContent}>
      <div className={styles.mockupDashboard}>
        <div className={styles.mockupSidebar}>
          <div className={styles.mockupSidebarItem} />
          <div className={styles.mockupSidebarItem} />
          <div className={styles.mockupSidebarItem} />
          <div className={styles.mockupSidebarItem} />
        </div>
        <div className={styles.mockupMain}>
          <div className={styles.mockupChart}>
            <div className={styles.mockupChartLine} />
          </div>
          <div className={styles.mockupTable}>
            <div className={styles.mockupTableRow} />
            <div className={styles.mockupTableRow} />
            <div className={styles.mockupTableRow} />
          </div>
        </div>
      </div>
    </div>
  )
}

function LandingMockup() {
  return (
    <div className={styles.mockupContent}>
      <div className={styles.mockupSplit}>
        <div className={styles.mockupTextBlock}>
          <div className={styles.mockupTextLine} />
          <div className={styles.mockupTextLineShort} />
          <div className={styles.mockupTextLine} />
        </div>
        <div className={styles.mockupImageBlock} />
      </div>
      <div className={styles.mockupCtaBlock}>
        <div className={styles.mockupCtaBtn} />
      </div>
    </div>
  )
}

const mockupComponents = {
  ecommerce: EcommerceMockup,
  dashboard: DashboardMockup,
  landing: LandingMockup,
} as const

export default function Portfolio({ projects }: PortfolioProps) {
  if (projects.length === 0) return null

  const sorted = [...projects].sort((a, b) => a.order - b.order)

  return (
    <section id="work" className={styles.work}>
      <div className={styles.container}>
        <SectionHeader
          tag="Our Work"
          title="Projects That Deliver Results"
          goldText="Results"
          description="See how we help businesses transform their digital presence."
        />

        <div className={styles.workGrid}>
          {sorted.map((project, i) => {
            const MockupComponent = mockupComponents[project.mockupLayout]
            return (
              <RevealOnScroll key={project._id} delay={i * 100}>
                <div className={styles.workCard}>
                  <div
                    className={styles.workImage}
                    style={{
                      background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                    }}
                  >
                    <div className={styles.workMockup}>
                      <div className={styles.mockupBar}>
                        <div className={styles.mockupDot} />
                        <div className={styles.mockupDot} />
                        <div className={styles.mockupDot} />
                      </div>
                      <MockupComponent />
                    </div>
                  </div>

                  <div className={styles.workInfo}>
                    <span className={styles.workCategory}>{project.category}</span>
                    <h3 className={styles.workTitle}>{project.title}</h3>
                    <p className={styles.workDesc}>{project.description}</p>
                    <div className={styles.workStatsRow}>
                      {project.stats.map((stat, si) => (
                        <span key={si} className={styles.workStat}>
                          {stat.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
