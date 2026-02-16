import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import ReactMarkdown from 'react-markdown';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('about.title')}</h2>
        <div className={styles.content}>
          {/* Utilisation de ReactMarkdown */}
          <div className={styles.description}>
            <ReactMarkdown>{t('about.description')}</ReactMarkdown>
          </div>

          <div className={styles.stats}>
            {(t('about.stats', { returnObjects: true }) as Array<{ number: string; label: string }>).map((stat, index) => (
              <div key={index} className={styles.stat}>
                <div className={styles.number}>{stat.number}</div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};