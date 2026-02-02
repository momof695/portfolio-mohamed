import React from 'react';
import { Monitor, Server, Palette } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Monitor />,
      title: "Développement Frontend",
      description: "Solides bases en HTML, CSS et JavaScript acquises durant ma formation de 3 ans. Création d'interfaces modernes et responsives."
    },
    {
      icon: <Server />,
      title: "Développement Backend",
      description: "Développement d'APIs avec PHP, Python et Java."
    },
    {
      icon: <Palette />,
      title: "Design UI/UX",
      description: "Conception d'interfaces attrayantes et intuitives avec figma en appliquant les principes d'ergonomie et d'accessibilité."
    }
  ];

  return (
    <section id="apropos">
      <div className="container">
        <h2 className="section-title">À PROPOS</h2>
        <div className="about-content">
          <div>
            <img 
              src="/images/photo-about.jpg" 
              alt="About Mohamed" 
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
