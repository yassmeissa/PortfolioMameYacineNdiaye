import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiGithub } from 'react-icons/fi';
import styles from './AllProjects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  technologies: string[];
  highlights: string[];
  repository?: string;
}

export const AllProjects = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const projects: Project[] = t('projects.items', { returnObjects: true }) as Project[];

  const getTechColor = (tech: string): string => {
    const frontendTechs = ['React', 'React Native', 'JavaScript', 'Tailwind CSS', 'CSS', 'HTML'];
    const backendTechs = ['PHP', 'Python', 'Node.js', 'Java', 'Express', 'Symfony'];
    const dbTechs = ['SQL', 'NoSQL', 'MongoDB', 'MySQL'];
    const toolsTechs = ['Docker', 'AWS', 'Azure', 'Google Calendar API', 'REST APIs', 'OAuth2', 'MVC', 'OOP'];

    if (frontendTechs.some(t => tech.includes(t))) return 'frontend';
    if (backendTechs.some(t => tech.includes(t))) return 'backend';
    if (dbTechs.some(t => tech.includes(t))) return 'database';
    if (toolsTechs.some(t => tech.includes(t))) return 'tools';
    return 'default';
  };

  return (
    <section className={styles.allProjects}>
      <div className={styles.container}>
        <button onClick={() => navigate('/')} className={styles.backBtn}>
          <FiArrowLeft size={20} />
          {t('projects.backToHome') || 'Back to Home'}
        </button>

        <h1 className={styles.title}>{t('projects.allProjects') || 'All Projects'}</h1>

        <div className={styles.grid}>
          {projects.map(project => (
            <article key={project.id} className={styles.card}>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.period}>{project.period}</p>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={`${styles.tag} ${styles[getTechColor(tech)]}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <button onClick={() => navigate(`/project/${project.id}`)} className={styles.detailLink}>
                    {t('projects.viewDetails') || 'View Details'}
                    →
                  </button>
                  <a href={project.repository} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FiGithub size={18} />
                    {t('projects.github')}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
