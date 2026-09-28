'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealTexte-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    const elements = footerRef.current?.querySelectorAll('.revealTexte');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer-container" ref={footerRef}>
      <div className="menu-container revealTexte">
        <Link href="#section2">Vidéo de présentation</Link>
        <Link href="#galerie">Galerie</Link>
        <Link href="#contact">Horaires et Contact</Link>
      </div>
      <div className="menu-container revealTexte">
        <Link href="#texte">Méthode de culture</Link>
        <Link href="#equipe">L&apos;équipe</Link>
        <Link href="#variete">variétés cultivées</Link>
      </div>
      <div className="politique revealTexte">
        <Link href="/condition">Condition d&apos;utilisation</Link>
        <Link href="/politique">Politique de confidentialité</Link>
      </div>
      <div className="reseaux revealTexte">
        <Link href="https://www.facebook.com/ChezEstela" target="_blank" rel="noopener noreferrer">
          Nous suivre sur Facebook
        </Link>
        <Link href="https://www.instagram.com/chezestela/?hl=fr" target="_blank" rel="noopener noreferrer">
          Nous suivre sur Instagram
        </Link>
      </div>
    </footer>
  );
}
