import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone } from 'react-icons/fi';
import styles from './Contact.module.css';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('contact.title')}</h2>
        <p className={styles.subtitle}>{t('contact.description')}</p>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <FiMail size={32} className={styles.icon} />
              <h3>{t('contact.email')}</h3>
              <a href="mailto:yacinendiaye347@gmail.com">yacinendiaye347@gmail.com</a>
            </div>
            <div className={styles.infoCard}>
              <FiPhone size={32} className={styles.icon} />
              <h3>{t('contact.phone')}</h3>
              <a href="tel:+33695268065">+33 6 95 26 80 65</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
