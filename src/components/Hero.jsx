import React from 'react';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-container">
        <div className="hero-content">

          {/* Badges identitaires */}
          <div className="hero-badges">
            <span className="hero-badge hero-badge-orange">Dev web full-stack</span>
            <span className="hero-badge hero-badge-cyber">Cybersécurité</span>
          </div>

          <h1>
            Bonjour,<br />
            je suis <span className="highlight">Mohamed</span>
          </h1>

          <p className="hero-subtitle">
            Développeur web · Futur spécialiste en cybersécurité
          </p>

          <p className="hero-description">
            Je construis des applications web robustes et m'intéresse profondément
            à leur sécurité. Étudiant en Génie Informatique à Ouagadougou.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:sawadogom816@gmail.com" className="cta-button">
              <Mail size={20} />
              Contacter moi%
            </a>
            <a
              href="/CV-Mohamed.pdf"
              download="CV-Mohamed.pdf"
              className="cta-button"
              style={{ background: 'transparent', color: '#ff9a3c', border: '2px solid #ff9a3c' }}
            >
              <Download size={20} />
              Mon CV
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/images/photo-hero.jpg"
            alt="Mohamed Sawadogo"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;