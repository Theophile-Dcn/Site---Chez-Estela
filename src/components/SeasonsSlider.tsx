'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const seasons = [
  {
    title: 'Avril',
    subtitle: 'Culture de :',
    content: 'Artichauts, Asperges, Blettes, Cébettes, Courgettes, Epinards, Fèves, Fraises, Persils, Salades'
  },
  {
    title: 'Mai',
    subtitle: 'Culture de :',
    content: 'Asperges, Blettes, Cébettes, Concombres, Courgettes, Epinards, Fèves, Fraises, Persils, Poivrons, Salades'
  },
  {
    title: 'Juin',
    subtitle: 'Culture de :',
    content: 'Asperges, Aubergines, Basilics, Concombres, Courgettes, Fraises, Melons, Oignons, Pastèques, Persils, Poivrons, Pommes de terre, Salades, Tomates'
  },
  {
    title: 'Juillet',
    subtitle: 'Culture de :',
    content: 'Aubergines, Basilics, Ciboulettes, Concombres, Courgettes, Fraises, Melons, Oignons, Pastèques, Persils, Poivrons, Pommes de terre, Salades, Zucca serpente, Tomates'
  },
  {
    title: 'Aout',
    subtitle: 'Culture de :',
    content: 'Aubergines, Basilics, Concombres, Courgettes, Figues, Melons, Oignons, Pastèques, Persils, Poivrons, Pommes de terre, Salades, Zucca serpente, Tomates'
  },
  {
    title: 'Septembre',
    subtitle: 'Culture de :',
    content: 'Aubergines, Basilics, Betteraves, Blettes, Carottes fanes, Cébettes, Concombres, Courges, Courgettes, Figues, Oignons, Patates douces, Persils, Poivrons, Pommes de terre, Radis, Salades, Tomates'
  },
  {
    title: 'Octobre',
    subtitle: 'Culture de :',
    content: 'Aubergines, Betteraves, Blette, Carottes fanes, Cébettes, Céleris, Choux, Courgettes, Epinards, Mâches, Navets, Oignons, Patates Douces, Persils, Poireaux, Poivrons, Radis, Pommes de terre, Salades'
  },
  {
    title: 'Novembre',
    subtitle: 'Culture de :',
    content: 'Betteraves, Blettes, Carottes fanes, Cébettes, Céleris, Choux, Epinards, Mâches, Navets, Oignons, Patates Douces, Persils, Poireaux, Pommes de terre, Radis, Salades'
  },
  {
    title: ['Decembre janvier', 'fevrier mars'],
    subtitle: '',
    content: 'Nous sommes fermés pour l\'hiver.'
  }
];

export default function SeasonsSlider() {
  return (
    <div className="backgroundCulture">
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
        className="swiper mySwiper3 swiper3"
      >
        {seasons.map((season, index) => (
          <SwiperSlide key={index} className="card2">
            <div className="card__content2">
              {Array.isArray(season.title) ? (
                season.title.map((t, i) => (
                  <span key={i} className="card__title2 center">{t}</span>
                ))
              ) : (
                <span className="card__title2">{season.title}</span>
              )}
              <span className="card__name2">{season.subtitle}</span>
              <p className="card__text2">{season.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
