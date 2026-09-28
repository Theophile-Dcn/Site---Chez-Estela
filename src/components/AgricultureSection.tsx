'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AgricultureSection() {
  const badgeRef = useRef<HTMLImageElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    const textObserver = new IntersectionObserver(
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

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }
    if (iconRef.current) {
      textObserver.observe(iconRef.current);
    }

    return () => {
      observer.disconnect();
      textObserver.disconnect();
    };
  }, []);

  return (
    <div 
      className="relative background-img"
      style={{ backgroundImage: 'url(/images/Golden-3.jpg)' }}
    >
      <div className="containerBadge">
        <Image 
          ref={badgeRef}
          src="/images/badgeAgricultureRaisonnee.svg" 
          alt="badge agriculture raisonnée" 
          className="badgeAgricultureRaisonnee reveal"
          width={1400}
          height={400}
        />
      </div>
      <Image 
        ref={iconRef}
        id="texte"
        src="/images/icon-grow.svg" 
        alt="Icône culture" 
        className="icon-grow pictoSize revealTexte"
        width={200}
        height={200}
      />
    </div>
  );
}
