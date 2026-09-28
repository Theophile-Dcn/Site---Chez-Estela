'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryImages = [
  { src: '/images/Golden-3.jpg', alt: 'Pommes Golden' },
  { src: '/images/Pasteque1.jpg', alt: 'Pastèque' },
  { src: '/images/Melon_Jaune_Vert_HD.jpg', alt: 'Melon' },
  { src: '/images/Tomates_Marmande.jpg', alt: 'Tomates Marmande' },
  { src: '/images/Concours_Pastèque-2.jpg', alt: 'Concours Pastèque' },
  { src: '/images/Butternut_Potimarron.jpg', alt: 'Butternut et Potimarron' },
  { src: '/images/Courges.jpg', alt: 'Courges' },
  { src: '/images/Exploitation_Ciel.jpg', alt: 'Exploitation vue du ciel' },
  { src: '/images/radisEstela1 - Copie.jpg', alt: 'Radis' },
];

export default function GallerySlider() {
  const titleRef = useRef<HTMLHeadingElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="second-div">
      <h2 id="galerie" className="revealTexte" ref={titleRef}>Galerie photo</h2>
      <div className="slider-visible">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          loop={true}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="swiper-container"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div 
                className="galerySlideSize"
                style={{ backgroundImage: `url(${image.src})` }}
                role="img"
                aria-label={image.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
