import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chez Estela - Producteur Maraicher',
    short_name: 'Chez Estela',
    description: 'Fruits et légumes frais et locaux près de Montpellier',
    start_url: '/',
    display: 'standalone',
    background_color: '#3c3714',
    theme_color: '#3c3714',
    icons: [
      {
        src: '/images/Logo_Flyer.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
