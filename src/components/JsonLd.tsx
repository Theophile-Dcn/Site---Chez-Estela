export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Chez Estela',
    description: 'Producteur maraicher proposant des fruits et légumes frais et locaux près de Montpellier',
    url: 'https://chezestela.fr',
    telephone: '+33618817214',
    email: 'chezestela@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Saint-Aunès',
      addressRegion: 'Occitanie',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.635805,
      longitude: 3.941235,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '12:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '15:30',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '15:30',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/ChezEstela',
      'https://www.instagram.com/chezestela/',
    ],
    priceRange: '€',
    image: 'https://chezestela.fr/images/Logo_Flyer.svg',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
