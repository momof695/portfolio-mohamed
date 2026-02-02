import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <ul className="nav-links">
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#experience">Mes expériences</a></li>
          <li><a href="#projets">Mes projets</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
