import React from 'react';
import { ExternalLink, Github, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'BISCHOOL',
      description:
        'Application web de gestion scolaire : élèves, personnel, départements, utilisateurs. Authentification, soft delete, audit log des actions, DataTables server-side.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=300&fit=crop',
      tags: ['PHP', 'MySQL', 'PDO', 'DataTables', 'SweetAlert2'],
      demoLink: null,
      codeLink: null,
      inProgress: true,
    },
    {
      title: 'Gestion Immobilière',
      description:
        'Application de gestion de biens immobiliers avec suivi des locataires, contrats et paiements. Modélisation UML, interface responsive.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      demoLink: null,
      codeLink: null,
      inProgress: false,
    },
    {
      title: 'Gestion Hôtelière',
      description:
        'Système de réservation et gestion de chambres avec administration des clients. Modélisation MERISE, interface complète front et back.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'PHP', 'MySQL', 'MERISE'],
      demoLink: null,
      codeLink: null,
      inProgress: false,
    },
  ];

  return (
    <section id="projets">
      <div className="container">
        <h2 className="section-title">MES PROJETS</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div style={{ position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                {project.inProgress && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'rgba(255,154,60,0.15)',
                      border: '1px solid var(--accent-orange)',
                      color: 'var(--accent-orange)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '4px',
                    }}
                  >
                    <Clock size={12} />
                    En cours
                  </span>
                )}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.demoLink ? (
                    <a href={project.demoLink} className="project-link btn-demo">
                      Demo <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span
                      className="project-link btn-demo"
                      style={{
                        opacity: 0.4,
                        cursor: 'default',
                        pointerEvents: 'none',
                      }}
                    >
                      Demo <ExternalLink size={16} />
                    </span>
                  )}
                  {project.codeLink ? (
                    <a href={project.codeLink} className="project-link btn-code">
                      <Github size={16} />
                    </a>
                  ) : (
                    <span
                      className="project-link btn-code"
                      style={{
                        opacity: 0.4,
                        cursor: 'default',
                        pointerEvents: 'none',
                      }}
                    >
                      <Github size={16} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;