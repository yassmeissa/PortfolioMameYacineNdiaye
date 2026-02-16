import { useTranslation } from 'react-i18next';
import styles from './Skills.module.css';

export const Skills = () => {
  const { t } = useTranslation();

  // Define category order: Frontend → Backend → Data & AI → Database → Cloud & DevOps → Tools
  const categoryOrder = ['frontend', 'backend', 'dataAI', 'database', 'cloudDevops', 'tools'];
  const categories = categoryOrder.map(key => ({ key }));

  const getCategoryTitle = (key: string): string => {
    const titleMap: Record<string, string> = {
      frontend: t('skills.frontend'),
      backend: t('skills.backend'),
      database: t('skills.database'),
      cloudDevops: t('skills.cloudDevops'),
      dataAI: t('skills.dataAI'),
      tools: t('skills.tools')
    };
    return titleMap[key] || key;
  };

  const getCategorySkills = (key: string): string[] => {
    const skillsMap: Record<string, string[]> = {
      frontend: t('skills.items.frontend', { returnObjects: true }) as string[],
      backend: t('skills.items.backend', { returnObjects: true }) as string[],
      database: t('skills.items.database', { returnObjects: true }) as string[],
      cloudDevops: t('skills.items.cloudDevops', { returnObjects: true }) as string[],
      dataAI: t('skills.items.dataAI', { returnObjects: true }) as string[],
      tools: t('skills.items.tools', { returnObjects: true }) as string[]
    };
    return skillsMap[key] || [];
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('skills.title')}</h2>
        
        <div className={styles.skillsGrid}>
          {categories.map(category => (
            <div key={category.key} className={styles.category}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>
                  {getCategoryTitle(category.key)}
                </h3>
              </div>
              
              <ul className={styles.skillsList}>
                {getCategorySkills(category.key).map((skill: string, index: number) => (
                  <li key={index} className={styles.skillItem}>
                    <span className={styles.dot}>•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
