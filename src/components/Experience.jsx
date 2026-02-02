import React from 'react';

const Experience = () => {
  const techStack = [
    // Frontend
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "React", color: "#61DAFB" },

    
    // Backend
    { name: "PHP", color: "#777BB4" },
    { name: "Python", color: "#3776AB" },
    { name: "Java", color: "#007396" },
    
    // Bases de données
    { name: "MySQL", color: "#4479A1" },
    { name: "NoSQL", color: "#E34F26" },

    
    // Infrastructure & Outils
    { name: "Git/GitHub", color: "#F05032" },
  ];

  const experience = [
    {
      company: "Formation",
      logo: "🎓",
      position: "Technologie du Génie Informatique - Projets Académiques",
      period: "2023 - Présent",
      description: [
        "Gestion Hôtelière (HTML, CSS, PHP, MySql, MERISE)",
        "Gestion Immobilère (HTML, CSS, JavaScript, PHP, MySql, UML)",
        "Configuration de serveurs Linux et administration de base de données sous Oracle.",
      ]
    }
  ];

  const certifications = [
    {
      title: "Build a Full Website Using WordPress",
      organization: "coursera",
      image: "/images/cert-1.jpg",      // Screenshot de la certification
      pdfLink: "/certifications/cert-1.pdf",  // Fichier PDF
      date: "2025"
    },
    {
      title: "Création de Design Marketing avec Canva",
      organization: "Coursera",
      image: "/images/cert-2.jpg",
      pdfLink: "/certifications/cert-2.pdf",
      date: "2025"
    },
    {
      title: "Google Cybersecurity",
      organization: "Google",
      image: "/images/cert-3.jpg",
      pdfLink: "/certifications/cert-3.pdf",
      date: "2026"
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">EXPÉRIENCES</h2>
        
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-icon" style={{ background: `${tech.color}20`, border: `3px solid ${tech.color}` }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: tech.color }}>
                  {tech.name.charAt(0)}
                </span>
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Section Formation */}
<div className="experience-grid" style={{ marginBottom: '3rem' }}>
  {experience.map((exp, index) => (
    <div key={index} className="experience-item">
      <div className="experience-header">
        <div className="company-logo">
          <span style={{ fontSize: '1.5rem' }}>{exp.logo}</span>
        </div>
        <div className="experience-info">
          <h3>{exp.position}</h3>
          <p className="experience-period">{exp.period}</p>
        </div>
      </div>
      <div className="experience-description">
        <ul>
          {exp.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

{/* Titre Certifications */}
<h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '0.5rem', fontFamily: 'Syne, sans-serif', textTransform: 'uppercase', letterSpacing: '2px' }}>
  Mes Certifications
</h3>
<div style={{ width: '60px', height: '3px', background: '#ff9a3c', margin: '0 auto 2.5rem' }}></div>

{/* Grille Certifications */}
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
  {certifications.map((cert, index) => (
    <div key={index} style={{ background: '#2a2f4a', borderRadius: '12px', overflow: 'hidden', transition: 'transform 0.3s ease', cursor: 'pointer' }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {/* Image miniature */}
      <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      
      {/* Contenu */}
      <div style={{ padding: '1.25rem' }}>
        <p style={{ color: '#ff9a3c', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
          {cert.organization}
        </p>
        <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', fontFamily: 'Syne, sans-serif' }}>
          {cert.title}
        </h4>
        <p style={{ color: '#b4b8d4', fontSize: '0.8rem', marginBottom: '1rem' }}>
          {cert.date}
        </p>

        {/* Boutons Voir & T√©l√©charger */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href={cert.image} target="_blank" rel="noopener noreferrer"
            style={{ flex: 1, textAlign: 'center', padding: '0.6rem', borderRadius: '8px', background: '#ff9a3c', color: '#1a1d2e', fontWeight: '600', fontSize: '0.85rem', textDecoration: 'none', transition: 'background 0.3s' }}
            onMouseEnter={e => e.target.style.background = '#ff8a1f'}
            onMouseLeave={e => e.target.style.background = '#ff9a3c'}
          >
            👁 Voir
          </a>
          <a href={cert.pdfLink} download
            style={{ flex: 1, textAlign: 'center', padding: '0.6rem', borderRadius: '8px', background: 'transparent', color: '#ff9a3c', border: '2px solid #ff9a3c', fontWeight: '600', fontSize: '0.85rem', textDecoration: 'none', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.target.style.background = '#ff9a3c'; e.target.style.color = '#1a1d2e'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#ff9a3c'; }}
          >
            ⬇️ Télécharger
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

export default Experience;
