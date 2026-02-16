import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Hero.module.css';
import profileImage from '../assets/Profile.png';

export const Hero = () => {
  const { t } = useTranslation();

  const handleViewWork = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('hero.title')}</h1>
          <p className={styles.subtitle}>{t('hero.subtitle')}</p>
          <ul className={styles.points}>
            {Array.isArray(t('hero.points', { returnObjects: true })) && 
              (t('hero.points', { returnObjects: true }) as string[]).map((point: string, index: number) => (
                <li key={index} className={styles.point}>
                  {point}
                </li>
              ))
            }
          </ul>
          <div className={styles.ctas}>
            <button onClick={handleViewWork} className={styles.primaryBtn}>
              {t('hero.cta')}
              <FiArrowRight />
            </button>
            <button onClick={handleContact} className={styles.secondaryBtn}>
              {t('hero.hireMeBtn')}
            </button>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/yassmeissa" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mame-yacine-ndiaye-611b09221/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:yacinendiaye347@gmail.com" className={styles.socialLink}>
              <FiMail size={24} />
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
        </div>
      </div>
    </section>
  );
};
