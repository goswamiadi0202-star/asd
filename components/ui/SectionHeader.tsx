import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  tag: string
  title: string
  goldText: string
  description?: string
}

export default function SectionHeader({ tag, title, goldText, description }: SectionHeaderProps) {
  const parts = title.split(goldText)

  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionTag}>
        <span className="diamond">&#9670;</span>
        {tag}
      </div>
      <h2 className={styles.sectionTitle}>
        {parts[0]}
        <span>{goldText}</span>
        {parts[1] || ''}
      </h2>
      {description && <p className={styles.sectionDesc}>{description}</p>}
    </div>
  )
}
