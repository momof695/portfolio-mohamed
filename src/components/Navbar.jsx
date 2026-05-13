import React, { useState, useEffect, useRef } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const menuRef                   = useRef(null);

  /* scroll détecté */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* bloquer le scroll body quand le menu est ouvert */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* fermer si clic en dehors du menu */
  useEffect(() => {
    const onClick = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* overlay sombre derrière le menu mobile */}
      {menuOpen && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            zIndex: 998,
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          <a href="#" className="logo">
            <Code2 className="logo-icon" />
            MOHAMED
          </a>

          {/* burger — visible uniquement mobile */}
          <button
            className="menu-burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* menu — slide depuis la droite sur mobile */}
          <ul
            ref={menuRef}
            className={`nav-links ${menuOpen ? 'active' : ''}`}
            role="navigation"
          >
            <li><a href="#accueil"       onClick={close}>Accueil</a></li>
            <li><a href="#apropos"       onClick={close}>À propos</a></li>
            <li><a href="#projets"       onClick={close}>Projets</a></li>
            <li><a href="#cybersecurite" onClick={close}>Cybersécurité</a></li>
            <li><a href="#experience"    onClick={close}>Expériences</a></li>
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;