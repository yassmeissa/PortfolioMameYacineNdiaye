import { useTranslation } from 'react-i18next';
import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import styles from './Education.module.css';

interface EducationItem {
  id: number;
  degree: string;
  school: string;
  period: string;
  gpa?: string;
  highlights: string[];
}

export const Education = () => {
  const { t } = useTranslation();
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const educations: EducationItem[] = t('education.items', { returnObjects: true }) as EducationItem[];

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('education.title')}</h2>
        <div className={styles.timeline}>
          {educations.map((item, index) => (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.marker}></div>
              <div 
                onClick={() => toggleExpand(item.id)}
                className={`${styles.card} ${index % 2 === 0 ? styles.left : styles.right} ${expandedItems[item.id] ? styles.expanded : ''}`}
              >
                <div className={styles.header}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.degree}>{item.degree}</h3>
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
                    <p className={styles.school}>{item.school}</p>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                </div>
                {expandedItems[item.id] && item.highlights.length > 0 && (
                  <ul className={styles.highlights}>
                    {item.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
