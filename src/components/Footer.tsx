import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const links = [
    { icon: FiGithub, url: 'https://github.com/yassmeissa', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/mame-yacine-ndiaye-611b09221/', label: 'LinkedIn' },
    { icon: FiMail, url: 'mailto:yacinendiaye347@gmail.com', label: 'Email' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          {links.map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                title={link.label}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
        <p className={styles.copyright}>{t('footer.copyright', { year: currentYear })}</p>
      </div>
    </footer>
  );
};
