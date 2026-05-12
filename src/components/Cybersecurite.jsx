import React from 'react';
import { ShieldCheck, Target, Terminal, Lock } from 'lucide-react';

const Cybersecurite = () => {
  const certifications = [
    {
      logo: '🔒',
      title: 'Google Cybersecurity Certificate',
      issuer: 'Google · Coursera',
      date: '2026',
      pdfLink: '/certifications/cert-3.pdf',
      imageLink: '/images/cert-3.jpg',
    },
  ];

  const interests = [
    'Sécurité des applications web (OWASP Top 10)',
    'Pentest & analyse de vulnérabilités',
    'Administration systèmes Linux sécurisée',
    'Gestion des identités et contrôle d\'accès',
  ];

  return (
    <section id="cybersecurite">
      <div className="container">
        <h2 className="section-title cyber-title">CYBERSÉCURITÉ</h2>

        <div className="cyber-grid">

          {/* Carte certification */}
          <div className="cyber-card">
            <div className="cyber-card-header">
              <div className="cyber-icon">
                <ShieldCheck />
              </div>
              <h3>Certification obtenue</h3>
            </div>

            <span className="cyber-label">// verified credential</span>

            {certifications.map((cert, index) => (
              <div key={index} className="cyber-cert-item">
                <div className="cyber-cert-logo">{cert.logo}</div>
                <div className="cyber-cert-info">
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer} · {cert.date}</p>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
                  <a
                    href={cert.imageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.4rem 0.75rem',
                      borderRadius: '6px',
                      background: 'var(--accent-cyber-dim)',
                      border: '1px solid var(--accent-cyber-border)',
                      color: 'var(--accent-cyber)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Voir
                  </a>
                  <a
                    href={cert.pdfLink}
                    download
                    style={{
                      padding: '0.4rem 0.75rem',
                      borderRadius: '6px',
                      background: 'transparent',
                      border: '1px solid var(--accent-cyber-border)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    PDF
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Carte intérêts */}
          <div className="cyber-card">
            <div className="cyber-card-header">
              <div className="cyber-icon">
                <Target />
              </div>
              <h3>Domaines d'intérêt</h3>
            </div>

            <span className="cyber-label">// areas of focus</span>

            <div className="cyber-interests">
              {interests.map((item, index) => (
                <div key={index} className="cyber-interest-item">
                  <div className="cyber-dot"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloc "Pourquoi la cybersécurité" */}
        <div className="cyber-why">
          <p className="cyber-why-label">// pourquoi la cybersécurité ?</p>
          <p>
            En développant des applications — de la gestion hôtelière à{' '}
            <strong>BISCHOOL</strong> — j'ai compris qu'authentification, gestion
            des droits et audit de logs ne sont pas des détails : ce sont les
            fondations. <strong>Construire sans sécuriser, c'est bâtir sur du sable.</strong>{' '}
            Je travaille à relier les deux disciplines : concevoir du code solide
            et apprendre à le défendre. La certification Google Cybersecurity est
            ma première étape dans cette direction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cybersecurite;