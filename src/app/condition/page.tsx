import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Condition d'utilisation",
  description: "Conditions d'utilisation du site Chez Estela - Producteur Maraicher",
};

export default function ConditionPage() {
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
      
      <h1 className="flex text-center title-1">Charte d&apos;utilisation du site</h1>
      <p className="text-center politique-texte">
        Bienvenue sur notre site Web. En utilisant notre site, vous acceptez de respecter cette charte d&apos;utilisation. 
        Si vous n&apos;acceptez pas cette charte d&apos;utilisation, veuillez ne pas utiliser notre site Web.
      </p>
      
      <h1 className="flex text-center title-1">Contenu du site</h1>
      <p className="text-center politique-texte">
        Le contenu de ce site Web est protégé par les lois sur les droits d&apos;auteur et les marques de commerce applicables. 
        Toute reproduction, distribution, modification, transmission ou utilisation du contenu de ce site Web sans notre 
        autorisation écrite préalable est strictement interdite.
      </p>
      
      <h1 className="flex text-center title-1">Utilisation du site</h1>
      <p className="text-center politique-texte">
        Vous acceptez d&apos;utiliser notre site Web uniquement à des fins légales et conformément à cette charte d&apos;utilisation. 
        Vous acceptez également de ne pas utiliser notre site Web :
      </p>
      
      <ul style={{ listStyle: 'disc', padding: '0 10%', color: 'var(--second1-color)' }}>
        <li className="text-center politique-texte" style={{ listStyle: 'disc' }}>
          Pour diffuser du contenu illégal, diffamatoire, offensant, menaçant, harcelant, vulgaire, obscène ou autrement répréhensible ;
        </li>
        <li className="text-center politique-texte" style={{ listStyle: 'disc' }}>
          Pour harceler, intimider ou nuire à une personne ou un groupe de personnes ;
        </li>
        <li className="text-center politique-texte" style={{ listStyle: 'disc' }}>
          Pour usurper l&apos;identité de toute personne ou entité, ou pour déformer votre affiliation à une personne ou entité ;
        </li>
        <li className="text-center politique-texte" style={{ listStyle: 'disc' }}>
          Pour utiliser des robots, des araignées ou tout autre moyen automatique pour accéder à notre site Web à des fins malveillantes ;
        </li>
        <li className="text-center politique-texte" style={{ listStyle: 'disc' }}>
          Pour tenter de contourner les mesures de sécurité de notre site Web ;
        </li>
        <li className="text-center politique-texte" style={{ listStyle: 'disc' }}>
          Pour collecter des informations sur les visiteurs de notre site Web sans leur consentement exprès et préalable.
        </li>
      </ul>
      
      <h1 className="flex text-center title-1">Modification de la charte d&apos;utilisation</h1>
      <p className="text-center politique-texte">
        Nous nous réservons le droit de modifier cette charte d&apos;utilisation à tout moment. 
        Si nous décidons de modifier notre charte d&apos;utilisation, nous publierons les modifications sur notre site Web.
      </p>
      
      <h1 className="flex text-center title-1">Contactez-nous</h1>
      <p className="text-center politique-texte">
        Si vous avez des questions ou des préoccupations concernant cette charte d&apos;utilisation, 
        veuillez nous contacter à l&apos;adresse e-mail suivante : chezestela@gmail.com.
      </p>
      <p className="text-center politique-texte">
        En utilisant notre site Web, vous acceptez cette charte d&apos;utilisation et vous vous engagez à respecter ses termes. 
        Si vous ne respectez pas cette charte d&apos;utilisation, nous nous réservons le droit de prendre des mesures appropriées, 
        y compris la résiliation de votre accès à notre site Web.
      </p>
    </div>
  );
}
