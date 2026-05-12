import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <Code2 className="logo-icon" />
          MOHAMED
        </a>

        <button
          className="menu-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a></li>
          <li><a href="#apropos" onClick={() => setMenuOpen(false)}>À propos</a></li>
          <li><a href="#projets" onClick={() => setMenuOpen(false)}>Projets</a></li>
          <li>
            <a
              href="#cybersecurite"
              className="cyber-link"
              onClick={() => setMenuOpen(false)}
            >
              Cybersécurité
            </a>
          </li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Expériences</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;