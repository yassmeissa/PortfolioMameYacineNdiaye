import { useTranslation } from 'react-i18next';
import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import styles from './Experience.module.css';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  highlights: string[];
}

export const Experience = () => {
  const { t } = useTranslation();
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const experiences: ExperienceItem[] = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (experiences.length === 0) {
    return (
      <section id="experience" className={styles.experience}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('experience.title')}</h2>
          <p className={styles.empty}>{t('experience.noExperience')}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('experience.title')}</h2>
        <div className={styles.timeline}>
          {experiences.map((item, index) => (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.marker}></div>
              <div 
                onClick={() => toggleExpand(item.id)}
                className={`${styles.card} ${index % 2 === 0 ? styles.left : styles.right} ${expandedItems[item.id] ? styles.expanded : ''}`}
              >
                <div className={styles.header}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.position}>{item.position}</h3>
                    <FiChevronDown 
                      size={20}
                      className={styles.chevron}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(item.id);
                      }}
                      style={{
                        transform: expandedItems[item.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                      }}
                    />
                  </div>
                  <div className={styles.metadata}>
                    <p className={styles.company}>{item.company}</p>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                </div>
                {expandedItems[item.id] && (
                  <>
                    <p className={styles.description}>{item.description}</p>
                    {item.highlights.length > 0 && (
                      <ul className={styles.highlights}>
                        {item.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
