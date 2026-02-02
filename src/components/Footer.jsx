import React from 'react';
import { Phone, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">MOHAMED SAWADOGO</div>
        <p className="footer-text">Copyright © 2025 - Tous droits réservés</p>
        <div className="social-links">
        <a href="https://wa.me/22673406613" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
            <Phone size={20} />
          </a>
          <a href="https://linkedin.com/in/pseudo" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Linkedin">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com/pseudo" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
            <Twitter size={20} />
          </a>

          <a href="https://facebook.com/profil" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
