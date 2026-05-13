import React from 'react';
import { Monitor, Server, Palette, ShieldCheck } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Monitor />,
      title: 'Développement Frontend',
      description:
        "Solides bases en dévéloppement acquises durant ma formation. Création d'interfaces modernes et responsives.",
    },
    {
      icon: <Server />,
      title: 'Développement Backend',
      description:
        "Développement d'APIs et d'applications métier. Architecture MVC, REST, gestion de bases de données relationnelles.",
    },
    {
      icon: <Palette />,
      title: 'Design UI/UX',
      description:
        "Conception d'interfaces attrayantes et intuitives en appliquant les principes d'ergonomie et d'accessibilité.",
    },
    {
      icon: <ShieldCheck />,
      title: 'Cybersécurité — ma prochaine étape',
      description:
        "Certifié Google Cybersecurity (2026). En développant des applications, j'ai compris que sécuriser le code est aussi important que l'écrire. Je travaille à approfondir la sécurité web, le pentest et la gestion des accès.",
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
              <div key={index} className="skill-item">
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <div className="skill-content">
                  <h3>{skill.title}</h3>
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