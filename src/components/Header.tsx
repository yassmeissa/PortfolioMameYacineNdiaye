import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/useTheme';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useState } from 'react';
import styles from './Header.module.css';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navLinks = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    
    // Si on est sur une page de détail de projet, retourner à l'accueil puis scroller
    if (location.pathname.startsWith('/project/')) {
      navigate(`/#${id}`);
    } else {
      // Si on est déjà sur l'accueil, scroller directement
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => {
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          Mame Yacine
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={styles.navLink}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            onClick={toggleLanguage}
            className={styles.langBtn}
            aria-label="Toggle language"
            title={i18n.language === 'en' ? 'Français' : 'English'}
          >
            {i18n.language === 'en' ? 'FR' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className={styles.themeBtn}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuBtn}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};
