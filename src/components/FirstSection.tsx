'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FirstSection() {
  const textRef = useRef<HTMLParagraphElement>(null);

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

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="first-div color">
      <Image 
        src="/images/Logo_Flyer.svg" 
        alt="Logo de l'entreprise" 
        className="logo"
        width={250}
        height={250}
        priority
      />
      <h2>Maraicher</h2>
      <p className="revealTexte" ref={textRef}>
        Nous sommes maraîchers de Père en Fille depuis plus de 30 ans. 
        Notre petite exploitation à taille humaine s&apos;étend sur sept hectares de terres riches 
        que nous cultivons avec amour et passion.
      </p>
    </div>
  );
}
