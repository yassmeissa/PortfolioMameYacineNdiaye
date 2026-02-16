import { useTranslation } from 'react-i18next';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  technologies: string[];
  highlights: string[];
  repository?: string;
}

export const Projects = () => {
  const { t } = useTranslation();

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
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('projects.title')}</h2>
        <div className={styles.grid}>
          {projects.map(project => (
            <article key={project.id} className={styles.card}>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.period}>{project.period}</p>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tags}>
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className={`${styles.tag} ${styles[getTechColor(tech)]}`}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={styles.tag}>+{project.technologies.length - 4}</span>
                  )}
                </div>
                <div className={styles.links}>
                  <a href={`/project/${project.id}`} className={styles.detailLink}>
                    {t('projects.viewDetails') || 'View Details'}
                    <FiArrowRight size={18} />
                  </a>
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
