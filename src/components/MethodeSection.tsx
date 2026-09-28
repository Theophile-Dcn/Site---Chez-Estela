'use client';

import { useEffect, useRef } from 'react';

export default function MethodeSection() {
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
    <section>
      <div className="secondSection">
        <p className="revealTexte" ref={textRef}>
          Nous pratiquons une agriculture raisonnée. À l&apos;opposé d&apos;une exploitation intensive en monoculture,
          notre méthode de maraîchage diversifiée permet d&apos;apporter biodiversité et équilibre pour nos terres.
          Ainsi, nous ne sommes pas dépendants des produits phytosanitaires et pesticides, destructeurs de toute vie.
          De plus, nous posons des bâches sur nos sols pour éviter la prolifération des mauvaises herbes, et donc leur extermination par l&apos;utilisation d&apos;herbicides.
        </p>
      </div>
    </section>
  );
}
