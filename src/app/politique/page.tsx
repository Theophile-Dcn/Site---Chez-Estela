import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site Chez Estela - Producteur Maraicher',
};

export default function PolitiquePage() {
  return (
    <div className="body-color" style={{ minHeight: '100vh', paddingBottom: '2rem' }}>
      <Link 
        href="/" 
        style={{ 
          display: 'block', 
          padding: '1rem', 
          color: 'var(--title-color)',
          fontFamily: 'FarmToMarketFancy, sans-serif',
          fontSize: '1.5rem'
        }}
      >
        ← Retour à l&apos;accueil
      </Link>
      
      <h1 className="flex text-center title-1">Politique de confidentialité</h1>
      <p className="text-center politique-texte">
        Nous respectons votre vie privée et nous sommes déterminés à protéger vos informations personnelles. 
        Nous ne collectons pas d&apos;informations sur les visiteurs de notre site Web et nous n&apos;utilisons pas de cookies. 
        Nous ne partageons pas les informations collectées auprès des visiteurs de notre site Web avec des tiers.
      </p>
      
      <h1 className="flex text-center title-1">Sécurité des informations</h1>
      <p className="text-center politique-texte">
        Nous prenons des mesures de sécurité raisonnables pour protéger vos informations personnelles contre toute perte, 
        utilisation abusive, accès non autorisé, divulgation, altération ou destruction.
      </p>
      <p className="text-center politique-texte">
        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
        Si nous décidons de modifier notre politique de confidentialité, nous publierons les modifications sur notre site Web.
      </p>
      
      <h1 className="flex text-center title-1">Modifications de la politique de confidentialité</h1>
      <p className="text-center politique-texte">
        Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, 
        veuillez nous contacter à l&apos;adresse e-mail suivante : chezestelma@gmail.com.
      </p>
      <p className="text-center politique-texte">
        En utilisant notre site Web, vous acceptez notre politique de confidentialité et vous consentez à la collecte, 
        l&apos;utilisation et la divulgation de vos informations personnelles conformément à cette politique de confidentialité. 
        Si vous n&apos;acceptez pas notre politique de confidentialité, veuillez ne pas utiliser notre site Web.
      </p>
    </div>
  );
}
