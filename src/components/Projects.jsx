import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Application de Gestion de Tâches",
      description: "Application web permettant de créer, organiser et suivre ses tâches quotidiennes. Interface intuitive avec système d'authentification et stockage des données.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Site Portfolio Personnel",
      description: "Portfolio moderne et responsive présentant mes projets et compétences. Design épuré avec animations fluides et navigation intuitive.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["React", "CSS3", "Vite"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Clone d'Interface UI",
      description: "Reproduction fidèle d'une interface utilisateur moderne pour pratiquer l'intégration front-end et le design responsive.",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=500&h=300&fit=crop",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#"
    },
    /*{
      title: "API REST avec Node.js",
      description: "API RESTful complète avec authentification JWT, gestion des utilisateurs et CRUD. Documentation avec Swagger.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      tags: ["Node.js", "Express", "JWT"],
      demoLink: "#",
      codeLink: "#"
    },*/
    {
      title: "Application Météo",
      description: "Application web affichant les prévisions météorologiques en temps réel en utilisant une API externe. Interface claire et responsive.",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=500&h=300&fit=crop",
      tags: ["React", "API", "CSS3"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Jeu Interactif JavaScript",
      description: "Jeu développé en JavaScript pur avec gestion des scores, animations et interactions utilisateur. Bon exercice de logique de programmation.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
      tags: ["JavaScript", "HTML5", "CSS3"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projets">
      <div className="container">
        <h2 className="section-title">MES PROJETS</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link btn-demo">
                    Demo <ExternalLink size={16} />
                  </a>
                  <a href={project.codeLink} className="project-link btn-code">
                    <Github size={16} />
                  </a>
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
