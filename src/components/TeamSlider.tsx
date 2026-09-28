'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const team = [
  {
    image: '/images/Estela.jpg',
    title: 'La fille',
    name: 'Estela',
    text: `Créatrice du point de vente directe, elle jongle entre accueil des clients et ramassage des fruits et légumes.
Elle a réussi à fédérer une communauté d'habitués qu'elle a plaisir à chouchouter sur son stand.
Point fort : souriante et cueilleuse hors pair de fraises!
Point faible : tatillonne`
  },
  {
    image: '/images/José.jpg',
    title: 'Le père',
    name: 'José',
    text: `Vous ne trouverez pas plus bosseur que lui. C'est grâce à son acharnement et son expérience que tout roule sur les terres.
Il s'occupe des plantations, de l'entretien et de la récolte d'une grande partie de notre production.
Point fort : toujours souriant
Point faible : trop gentil`
  },
  {
    image: '/images/Susana.jpg',
    title: 'La mère',
    name: 'Susana',
    text: `C'est l'épouse et le bras droit de José. 
Susana est à la fois douée en ramassage mais également en plantations. Et ce qu'elle préfère c'est travailler seule.
Point fort : elle ramasse le persil plus vite que son ombre.
Point faible : farouche`
  },
  {
    image: '/images/Jules.jpg',
    title: 'Le gendre',
    name: 'Jules',
    text: `Jules, l'amoureux d'Estela, est notre dernière recrue !
Il gère nos réseaux sociaux et nous fait de belles photos mais attention, il aide aussi aux champs et à la vente !
Il est toujours à la recherche de nouvelles variétés de légumes.
Point fort: sens du commerce
Point faible: susceptible`
  }
];

export default function TeamSlider() {
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
    <>
      <section>
        <div className="title-div">
          <h2 id="equipe" className="text-center titre-bg revealTexte" ref={titleRef}>l&apos;equipe</h2>
        </div>    
      </section>
      <div className="backgroundEquipe">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 600,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          loop={true}
          modules={[EffectCoverflow, Navigation]}
          className="swiper mySwiper2"
        >
          <div className="swiper-wrapper swiper1">
            {team.map((member, index) => (
              <SwiperSlide key={index} className="card">
                <div className="card__image">
                  <Image 
                    src={member.image} 
                    alt={`photo de ${member.name}`}
                    width={240}
                    height={240}
                    loading="lazy"
                  />
                </div>
                <div className="card__content">
                  <span className="card__title">{member.title}</span>
                  <span className="card__name">{member.name}</span>
                  <p className="card__text">{member.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
