import React, { useState } from 'react';
import { ExternalLink, Github, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: 'BudgetTrack',
    description:
      'Application de suivi des finances personnelles : tableau de bord, catégorisation des dépenses, historique et statistiques visuelles. API REST sécurisée côté Laravel, interface réactive React.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=350&fit=crop',
    tags: ['React', 'Laravel', 'Tailwind CSS', 'PostgreSQL'],
    demoLink: 'https://budgettrack-frontend-mt8l.onrender.com',
    codeLink: null,
    inProgress: false,
  },
  {
    title: 'Digi-Learn',
    description:
      'Plateforme e-learning : cours en ligne, suivi de progression, espaces apprenant et formateur. Architecture modulaire Angular côté front, Spring Boot côté API, modélisation MERISE.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=350&fit=crop',
    tags: ['Angular', 'Spring Boot', 'MySQL', 'MERISE'],
    demoLink: null,
    codeLink: null,
    inProgress: true,
  },
  {
    title: 'Bar Manager',
    description:
      'Système de gestion de bar : authentification par rôles, gestion des stocks, facturation client, suivi des ventes et rapports. Modélisation MERISE, backend Laravel, frontend React.',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&h=350&fit=crop',
    tags: ['React', 'Laravel', 'MySQL', 'MERISE'],
    demoLink: null,
    codeLink: null,
    inProgress: false,
  },
  {
    title: 'Générateur de CV',
    description:
      'Plateforme web de création et génération de CV : saisie guidée, templates personnalisables, export PDF. Projet en cours de développement.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=350&fit=crop',
    tags: ['En cours', 'React'],
    demoLink: null,
    codeLink: null,
    inProgress: true,
  },
  {
    title: 'Gestion Immobilière',
    description:
      'Application de gestion de biens immobiliers avec suivi des locataires, contrats et paiements. Modélisation UML, interface responsive.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=350&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    demoLink: null,
    codeLink: null,
    inProgress: false,
  },
  {
    title: 'Gestion Hôtelière',
    description:
      'Système de réservation et gestion de chambres avec administration des clients. Modélisation MERISE, interface complète front et back.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL', 'MERISE'],
    demoLink: null,
    codeLink: null,
    inProgress: false,
  },
];

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card">
      <div style={{ position: 'relative' }}>
        <img src={project.image} alt={project.title} className="project-image" />
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

        <p
          className="project-description"
          style={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: expanded ? 'unset' : 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {project.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-orange)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.25rem 0',
            marginBottom: '1rem',
          }}
        >
          {expanded ? (
            <><ChevronUp size={14} /> Réduire</>
          ) : (
            <><ChevronDown size={14} /> Lire plus</>
          )}
        </button>

        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          {project.demoLink ? (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link btn-demo"
            >
              Demo <ExternalLink size={16} />
            </a>
          ) : (
            <span className="project-link btn-demo" style={{ opacity: 0.35, cursor: 'default' }}>
              Demo <ExternalLink size={16} />
            </span>
          )}

          {project.codeLink ? (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link btn-code"
            >
              <Github size={16} />
            </a>
          ) : (
            <span className="project-link btn-code" style={{ opacity: 0.35, cursor: 'default' }}>
              <Github size={16} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projets">
    <div className="container">
      <h2 className="section-title">MES PROJETS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;