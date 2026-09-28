'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      id="scrollBtn" 
      className={isVisible ? 'show' : ''}
      onClick={scrollToTop}
      aria-label="Retour en haut de page"
    >
      <Image 
        src="/images/flecheBas.svg" 
        alt="Retour en haut" 
        width={25}
        height={25}
        style={{ width: '100%', height: '50%', transform: 'rotate(180deg)' }}
      />
    </button>
  );
}
