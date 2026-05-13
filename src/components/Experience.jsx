import React from 'react';

/* ─────────────────────────────────────────────
   DONNÉES — modifier ici pour mettre à jour
───────────────────────────────────────────── */

const techCategories = [
  {
    label: 'Langages',
    items: [
      { name: 'HTML5',      color: '#E34F26' },
      { name: 'CSS3',       color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'PHP',        color: '#777BB4' },
      { name: 'Python',     color: '#3776AB' },
      { name: 'Java',       color: '#007396' },
    ],
  },
  {
    label: 'Frameworks & Libs',
    items: [
      { name: 'React',       color: '#61DAFB' },
      { name: 'Angular',     color: '#DD0031' },
      { name: 'Laravel',     color: '#FF2D20' },
      { name: 'Spring Boot', color: '#6DB33F' },
      { name: 'Tailwind',    color: '#38BDF8' },
    ],
  },
  {
    label: 'Bases de données',
    items: [
      { name: 'MySQL',      color: '#4479A1' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'NoSQL',      color: '#47A248' },
      { name: 'Oracle',     color: '#F80000' },
      { name: 'MONGO DB',     color: '#9B59B6' },

    ],
  },
  {
    label: 'Design & Outils',
    items: [
      { name: 'Figma',      color: '#F24E1E' },
      { name: 'MERISE',     color: '#9B59B6' },
      { name: 'UML',        color: '#E67E22' },
      { name: 'Git/GitHub', color: '#F05032' },
      { name: 'Linux',      color: '#FCC624' },
    ],
  },
];

const timeline = [
  {
    year: '2023',
    title: 'Entrée en formation',
    detail: 'Licence Technologie du Génie Informatique — Ouagadougou',
  },
  {
    year: '2024',
    title: 'Spécialisation développement web',
    detail: 'Approfondissement des techniques de programmation, bases de données, architecture MVC',
  },
  {
    year: '2025',
    title: 'Projets full-stack & certifications',
    detail: 'Développement de projets personnels',
  },
  {
    year: '2026',
    title: 'Cybersécurité & fin de formation',
    detail: 'Certification Google Cybersecurity · Projet de fin d\'études',
  },
];

/* ─────────────────────────────────────────────
   Pour ajouter une certification :
   copier un bloc { ... } dans le tableau,
   renseigner title, organization, image, pdfLink, date.
   Laisser image: null et pdfLink: null si pas encore dispo.
───────────────────────────────────────────── */
const certifications = [
  {
    title: 'Google Cybersecurity Certificate',
    organization: 'Google · Coursera',
    image: '/images/cert-3.jpg',
    pdfLink: '/certifications/cert-3.pdf',
    date: '2026',
    emoji: '🔒',
  },
  // ── Slot 2 — décommenter et remplir quand disponible ──
  {
     title: '',
     organization: '',
     image: null,
     pdfLink: null,
     date: '',
     emoji: '🏅',
   },
  // ── Slot 3 ──
   {
     title: '',
     organization: '',
     image: null,
     pdfLink: null,
     date: '',
     emoji: '🏅',
   },
];

/* ─────────────────────────────────────────────
   COMPOSANT
───────────────────────────────────────────── */
const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">COMPÉTENCES & PARCOURS</h2>

        {/* ── 1. Technologies triées par catégorie ── */}
        {techCategories.map((cat) => (
          <div key={cat.label} style={{ marginBottom: '2.5rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-orange)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '1.25rem',
              }}
            >
              // {cat.label}
            </p>
            <div className="tech-stack" style={{ marginBottom: 0 }}>
              {cat.items.map((tech) => (
                <div key={tech.name} className="tech-item">
                  <div
                    className="tech-icon"
                    style={{
                      background: `${tech.color}20`,
                      border: `3px solid ${tech.color}`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        color: tech.color,
                      }}
                    >
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ── 2. Timeline académique ── */}
        <h3
          style={{
            textAlign: 'center',
            fontSize: '1.6rem',
            marginBottom: '0.5rem',
            fontFamily: 'Syne, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Parcours académique
        </h3>
        <div
          style={{
            width: '60px',
            height: '3px',
            background: 'var(--accent-orange)',
            margin: '0 auto 2.5rem',
          }}
        />

        <div
          style={{
            position: 'relative',
            paddingLeft: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* ligne verticale */}
          <div
            style={{
              position: 'absolute',
              left: '0.55rem',
              top: 0,
              bottom: 0,
              width: '2px',
              background:
                'linear-gradient(to bottom, var(--accent-orange), var(--bg-card))',
            }}
          />

          {timeline.map((item, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                marginBottom: '2rem',
                paddingLeft: '1.75rem',
              }}
            >
              {/* point */}
              <div
                style={{
                  position: 'absolute',
                  left: '-1.55rem',
                  top: '0.3rem',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--accent-orange)',
                  border: '2px solid var(--bg-primary)',
                  boxShadow: '0 0 0 3px rgba(255,154,60,0.25)',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--accent-orange)',
                  marginBottom: '0.25rem',
                }}
              >
                {item.year}
              </div>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  marginBottom: '0.2rem',
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* ── 3. Certifications ── */}
        <h3
          style={{
            textAlign: 'center',
            fontSize: '1.6rem',
            marginBottom: '0.5rem',
            fontFamily: 'Syne, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Certifications
        </h3>
        <div
          style={{
            width: '60px',
            height: '3px',
            background: 'var(--accent-orange)',
            margin: '0 auto 2.5rem',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                background: 'var(--bg-card)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'translateY(-5px)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'translateY(0)')
              }
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '180px',
                    background: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                  }}
                >
                  {cert.emoji}
                </div>
              )}

              <div style={{ padding: '1.25rem' }}>
                <p
                  style={{
                    color: 'var(--accent-orange)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    marginBottom: '0.3rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {cert.organization}
                </p>
                <h4
                  style={{
                    fontSize: '1rem',
                    marginBottom: '0.25rem',
                    fontFamily: 'Syne, sans-serif',
                  }}
                >
                  {cert.title}
                </h4>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.8rem',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {cert.date}
                </p>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {cert.image ? (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '0.6rem',
                        borderRadius: '8px',
                        background: 'var(--accent-orange)',
                        color: 'var(--bg-primary)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                      }}
                    >
                      👁 Voir
                    </a>
                  ) : (
                    <span
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '0.6rem',
                        borderRadius: '8px',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        opacity: 0.5,
                      }}
                    >
                      À venir
                    </span>
                  )}
                  {cert.pdfLink && (
                    <a
                      href={cert.pdfLink}
                      download
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '0.6rem',
                        borderRadius: '8px',
                        background: 'transparent',
                        color: 'var(--accent-orange)',
                        border: '2px solid var(--accent-orange)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                      }}
                    >
                      ⬇️ PDF
                    </a>
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

export default Experience;