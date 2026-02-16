import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiGithub, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import styles from './ProjectDetail.module.css';

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  period: string;
  technologies: string[];
  highlights: string[];
  features?: { [key: string]: string[] };
  technicalDetails?: { [key: string]: string | string[] };
  statistics?: { [key: string]: string | number };
  keyFeatures?: { [key: string]: string[] };
  designSystem?: { [key: string]: string | string[] };
  challenges?: string[];
  learnings?: string[];
  futureImprovements?: string[];
  keyAchievements?: string[];
  repository?: string;
  status?: string;
  projectSize?: string;
  complexity?: string;
}

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const projects: Project[] = t('projects.items', { returnObjects: true }) as Project[];
  const project = projects.find(p => p.id === parseInt(id || '0'));

  const toggleExpand = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!project) {
    return (
      <section className={styles.notFound}>
        <div className={styles.container}>
          <h1>{t('projects.notFound') || 'Project not found'}</h1>
          <button onClick={() => navigate('/')} className={styles.backBtn}>
            <FiArrowLeft />
            Back to Projects
          </button>
        </div>
      </section>
    );
  }

  const getTechColor = (tech: string): string => {
    const frontendTechs = ['React', 'React Native', 'JavaScript', 'Tailwind CSS', 'CSS', 'HTML'];
    const backendTechs = ['PHP', 'Python', 'Node.js', 'Java', 'Express', 'Symfony'];
    const dbTechs = ['SQL', 'NoSQL', 'MongoDB', 'MySQL'];
    const toolsTechs = ['Docker', 'AWS', 'Azure', 'Google Calendar API', 'REST APIs', 'OAuth2', 'MVC', 'OOP', 'Algorithmes', 'Structures de Données'];

    if (frontendTechs.some(t => tech.includes(t))) return 'frontend';
    if (backendTechs.some(t => tech.includes(t))) return 'backend';
    if (dbTechs.some(t => tech.includes(t))) return 'database';
    if (toolsTechs.some(t => tech.includes(t))) return 'tools';
    return 'default';
  };

  return (
    <section className={styles.projectDetail}>
      <div className={styles.container}>
        <button onClick={() => navigate('/')} className={styles.backBtn}>
          <FiArrowLeft size={20} />
          {t('projects.backToProjects') || 'Back to Projects'}
        </button>

        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>{project.title}</h1>
            {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.main}>
            {/* Description */}
            <div className={styles.section}>
              <h2>{t('projects.overview') || 'Overview'}</h2>
              <p>{project.description}</p>
            </div>

            {/* Key Highlights */}
            <div className={styles.section}>
              <h2>{t('projects.keyFeatures') || 'Key Features'}</h2>
              <div className={styles.highlightsContainer}>
                {project.highlights.slice(0, 3).map((highlight, i) => (
                  <div key={i} className={styles.highlightItem}>
                    <p>{highlight}</p>
                  </div>
                ))}
                {project.highlights.length > 3 && !expandedItems['highlights'] && (
                  <button 
                    onClick={() => toggleExpand('highlights')}
                    className={styles.expandBtn}
                  >
                    <FiChevronDown 
                      size={20} 
                      style={{ 
                        transform: 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    {t('projects.viewMore', { count: project.highlights.length - 3 })}
                  </button>
                )}
                {expandedItems['highlights'] && project.highlights.length > 3 && (
                  <>
                    <div className={styles.expandedItems}>
                      {project.highlights.slice(3).map((highlight, i) => (
                        <div key={i + 3} className={styles.highlightItem}>
                          <p>{highlight}</p>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => toggleExpand('highlights')}
                      className={styles.expandBtn}
                    >
                      <FiChevronDown 
                        size={20} 
                        style={{ 
                          transform: 'rotate(180deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                      {t('projects.viewLess')}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className={styles.section}>
                <h2>🎯 Défis Relevés</h2>
                <ul className={styles.list}>
                  {project.challenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Learnings */}
            {project.learnings && project.learnings.length > 0 && (
              <div className={styles.section}>
                <h2>📚 Apprentissages</h2>
                <ul className={styles.list}>
                  {project.learnings.map((learning, i) => (
                    <li key={i}>{learning}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Achievements */}
            {project.keyAchievements && project.keyAchievements.length > 0 && (
              <div className={styles.section}>
                <h2>⭐ Réalisations Clés</h2>
                <ul className={styles.list}>
                  {project.keyAchievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Improvements */}
            {project.futureImprovements && project.futureImprovements.length > 0 && (
              <div className={styles.section}>
                <h2>� Améliorations Futures</h2>
                <ul className={styles.list}>
                  {project.futureImprovements.map((improvement, i) => (
                    <li key={i}>{improvement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* GitHub Link */}
            {project.repository && (
              <div className={styles.sidebarSection}>
                <a href={project.repository} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
                  <FiGithub size={20} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            )}

            {/* Technologies */}
            <div className={styles.sidebarSection}>
              <h3>{t('projects.technologies') || 'Technologies'}</h3>
              <div className={styles.techList}>
                {project.technologies.map(tech => (
                  <span key={tech} className={`${styles.techTag} ${styles[getTechColor(tech)]}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
