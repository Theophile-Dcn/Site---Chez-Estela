'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

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

    const elements = containerRef.current?.querySelectorAll('.revealTexte');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact" ref={containerRef}>
      <Image 
        id="avis" 
        src="/images/stand.svg" 
        alt="stand icone" 
        className="pictoStand pictoSize revealTexte"
        width={200}
        height={200}
      />
      <h2 id="contact" className="revealTexte">horaires</h2>
      <div className="flex colums revealTexte">
        <p>Lundi au Vendredi<br/>9h - 12h30 / 15h30 - 19h</p>
        <p>Samedi<br/>9h - 12h30 / 15h30 - 18h</p>
      </div>
      <h2 className="revealTexte">Contact</h2>
      <div className="flex colums revealTexte">
        <Link href="tel:+33618817412">06 18 81 72 14</Link><br/>
        <Link href="mailto:chezestela@gmail.com">chezestela@gmail.com</Link>
      </div>
      <h2 id="map" className="revealTexte">Suivez-nous</h2>
      <div className="pictoContainer">
        <Link href="https://www.facebook.com/ChezEstela" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/images/Facebook.png" 
            alt="Logo facebook" 
            className="logoSize revealTexte"
            width={64}
            height={64}
          />
        </Link>
        <Link href="https://www.instagram.com/chezestela/?hl=fr" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/images/Instagram.png" 
            alt="Logo Instagram" 
            className="logoSize revealTexte"
            width={64}
            height={64}
          />
        </Link>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5941562779276!2d3.941235615722594!3d43.635805261572905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6a58482c9779f%3A0xd53f6de08f92ac64!2sChez%20Estela!5e0!3m2!1sfr!2sfr!4v1675698229437!5m2!1sfr!2sfr" 
        width="100%" 
        height="450" 
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation Chez Estela"
      />
    </div>
  );
}
