'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button className="menu-button menu-hamburger" onClick={toggleMenu} aria-label="Menu">
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>  
        <p>menu</p>
      </button>
      <Link href="tel:+33618817214" className="number">
        <button className="telephoneSize" aria-label="Appeler">
          <Image 
            src="/images/telephone.png" 
            alt="icône téléphone" 
            width={40} 
            height={40}
          />
        </button>
      </Link>
      <div className={`nav-links ${isMenuOpen ? 'mobile-menu' : ''}`}>
        <ul id="removeMenu" onClick={closeMenu}>
          <li><Link href="#section2">Vidéo de présentation</Link></li>
          <li><Link href="#galerie">Galerie</Link></li>
          <li><Link href="#variete">Variétés cultivées</Link></li>
          <li><Link href="#texte">Méthode de culture</Link></li>
          <li><Link href="#equipe">L&apos;équipe</Link></li>
          <li><Link href="#contact">Horaires et Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
