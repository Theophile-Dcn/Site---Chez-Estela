'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import FirstSection from '@/components/FirstSection';
import VideoSection from '@/components/VideoSection';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import VarietesSection from '@/components/VarietesSection';
import AgricultureSection from '@/components/AgricultureSection';
import MethodeSection from '@/components/MethodeSection';
import ContactSection from '@/components/ContactSection';

const GallerySlider = dynamic(() => import('@/components/GallerySlider'), {
  loading: () => <div className="slider-visible" style={{ background: 'var(--main-color)' }} />,
  ssr: false,
});

const SeasonsSlider = dynamic(() => import('@/components/SeasonsSlider'), {
  loading: () => <div className="backgroundCulture" style={{ height: '55rem' }} />,
  ssr: false,
});

const TeamSlider = dynamic(() => import('@/components/TeamSlider'), {
  loading: () => <div className="backgroundEquipe" style={{ height: '65rem' }} />,
  ssr: false,
});

export default function HomeContent() {
  return (
    <>
      <Navbar />
      <Header />
      <ScrollToTop />
      <FirstSection />
      <VideoSection />
      <GallerySlider />
      <VarietesSection />
      <SeasonsSlider />
      <AgricultureSection />
      <MethodeSection />
      <TeamSlider />
      <ContactSection />
      <Footer />
    </>
  );
}
