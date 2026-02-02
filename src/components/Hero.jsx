import React from 'react';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Bonjour,<br />
            je suis <span className="highlight">Mohamed</span>
          </h1>
          <p className="hero-subtitle">Étudiant en Technologie du Génie Informatique</p>
          <p className="hero-description">
            Passionné par le développement web et les nouvelles technologies,<br />
            je crée des applications modernes et innovantes.
          </p>
          <div style={{display: 'flex', gap:'1rem',flexWrap:'wrap'}}>
            <a href="mailto:sawadogom816@gmail.com" className="cta-button">
              <Mail size={20} />
              Contacter moi
            </a>
            <a href="/CV-Mohamed.pdf" download="CV-Mohamed.pdf" className="cta-button" style={{background:'transparent',color: '#ff9a3c',border:'2px solid #ff9a3c'}}>
              <Download size={20} />
              Mon CV
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="/images/photo-hero.jpg" 
            alt="Mohamed" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
