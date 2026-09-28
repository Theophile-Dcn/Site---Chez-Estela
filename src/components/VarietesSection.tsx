'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function VarietesSection() {
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
    <div className="altContainer" ref={containerRef}>
      <h2 className="revealTexte" id="variete">+ de 50 variétés cultivées</h2>
      <p className="revealTexte">
        Nous pratiquons une agriculture diversifiée au fil des saisons.
      </p>
      <p className="revealTexte">
        Certaines variétés sont produites par des maraîchers, des partenaires locaux plus spécialisés : pêches, cerises, abricots... 
      </p>
      <Image 
        src="/images/cagetteLégumes.svg" 
        alt="icone cagette fruits et légumes" 
        className="pictoSize revealTexte"
        width={200}
        height={200}
      />
    </div>
  );
}
