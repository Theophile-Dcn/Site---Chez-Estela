import type { Metadata, Viewport } from 'next';
import { Niconne } from 'next/font/google';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const niconne = Niconne({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-niconne',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chezestela.fr'),
  title: {
    default: 'Chez Estela | Producteur Maraicher - Fruits et Légumes Frais près de Montpellier',
    template: '%s | Chez Estela'
  },
  description: 'Découvrez notre point de vente situé proche de Le Crès & Saint-Aunès. Notre site vous propose de consulter nos variétés de fruits et légumes frais et locaux, tous cultivés avec soin. Explorez notre gamme de produits de saison et trouvez les meilleurs ingrédients pour vos recettes préférées.',
  keywords: ['maraicher', 'fruits', 'légumes', 'frais', 'local', 'Le Crès', 'Saint-Aunès', 'Montpellier', 'agriculture raisonnée', 'producteur', 'vente directe'],
  authors: [{ name: 'Chez Estela' }],
  creator: 'Chez Estela',
  publisher: 'Chez Estela',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://chezestela.fr',
    siteName: 'Chez Estela',
    title: 'Chez Estela | Producteur Maraicher - Fruits et Légumes Frais',
    description: 'Découvrez notre point de vente situé proche de Le Crès & Saint-Aunès. Fruits et légumes frais et locaux, cultivés avec soin.',
    images: [
      {
        url: '/images/Logo_Flyer.svg',
        width: 250,
        height: 250,
        alt: 'Logo Chez Estela',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chez Estela | Producteur Maraicher',
    description: 'Fruits et légumes frais et locaux près de Montpellier',
    images: ['/images/Logo_Flyer.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://chezestela.fr',
  },
  icons: {
    icon: '/images/Logo_Flyer.svg',
    apple: '/images/Logo_Flyer.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#3c3714',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={niconne.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
