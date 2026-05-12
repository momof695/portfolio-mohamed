import React from 'react';
import { Monitor, Server, Palette, ShieldCheck } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Monitor />,
      title: 'Développement Frontend',
      description:
        'Solides bases en HTML, CSS et JavaScript acquises durant ma formation de 3 ans. Création d\'interfaces modernes et responsives.',
      cyber: false,
    },
    {
      icon: <Server />,
      title: 'Développement Backend',
      description:
        'Développement d\'APIs et d\'applications métier avec PHP, Laravel, Spring Boot et Python. Architecture MVC, REST, gestion de bases de données relationnelles.',
      cyber: false,
    },
    {
      icon: <Palette />,
      title: 'Design UI/UX',
      description:
        'Conception d\'interfaces attrayantes et intuitives avec Figma en appliquant les principes d\'ergonomie et d\'accessibilité.',
      cyber: false,
    },
    {
      icon: <ShieldCheck />,
      title: 'Cybersécurité — ma prochaine étape',
      description:
        'Certifié Google Cybersecurity (2026). En développant des applications, j\'ai compris que sécuriser le code est aussi important que l\'écrire. Je travaille à approfondir la sécurité web, le pentest et la gestion des accès.',
      cyber: true,
    },
  ];

  return (
    <section id="apropos">
      <div className="container">
        <h2 className="section-title">À PROPOS</h2>
        <div className="about-content">
          <div>
            <img
              src="/images/photo-about.jpg"
              alt="Mohamed Sawadogo"
              className="about-image"
            />
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                style={
                  skill.cyber
                    ? { borderLeft: '4px solid var(--accent-cyber)' }
                    : {}
                }
              >
                <div
                  className="skill-icon"
                  style={
                    skill.cyber
                      ? {
                          background: 'var(--accent-cyber-dim)',
                          border: '1px solid var(--accent-cyber-border)',
                        }
                      : {}
                  }
                >
                  <span style={skill.cyber ? { color: 'var(--accent-cyber)' } : {}}>
                    {skill.icon}
                  </span>
                </div>
                <div className="skill-content">
                  <h3 style={skill.cyber ? { color: 'var(--accent-cyber)' } : {}}>
                    {skill.title}
                  </h3>
                  <p>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;