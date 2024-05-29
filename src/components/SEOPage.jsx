import React from 'react';
import seoImage from '../assets/seo.png';

const SEOPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <Header />
        <Content />
      </div>
    </div>
  );
};
const Header = () => {
    return (
      <div className="mb-6">
        <img src={seoImage} alt="SEO" className="w-full h-auto rounded-md" />
        <p className="text-gray-600 text-sm mt-2">Dans le monde numérique actuel, la visibilité en ligne est cruciale pour le succès de toute entreprise. Que vous soyez un chef de projet ou un propriétaire d’entreprise, il est essentiel de maximiser la visibilité de votre site web afin d’attirer un trafic qualifié. Voici quelques conseils essentiels pour réussir dans cette entreprise :</p>
      </div>
    );
  };
  
const Content = () => {
  const tips = [
    {
      title: "Confiez le Référencement Naturel (SEO) à un Expert",
      description: "Le référencement naturel (SEO) est la clé de la visibilité sur les moteurs de recherche. Engagez un expert en SEO pour optimiser votre site en fonction des algorithmes de recherche. Cela inclut l’optimisation des balises, la création de contenu de qualité et la gestion des liens, ce qui contribuera à améliorer votre classement dans les résultats de recherche.",
    },
    {
      title: "Expérimentez la Publicité Payante sur Google (Google Ads)",
      description: "Google Ads offre une opportunité exceptionnelle d’accroître instantanément la visibilité de votre site. Créez des campagnes ciblées en utilisant des mots clés pertinents pour attirer un public spécifique. Les annonces payantes peuvent être un investissement rentable pour augmenter le trafic et la notoriété de votre site.",
    },
    {
      title: "Inscrivez-vous sur des Annuaires en Ligne Pertinents",
      description: "Les annuaires en ligne sont une ressource souvent sous-estimée pour améliorer la visibilité. Inscrivez-vous sur des annuaires pertinents à votre secteur d’activité. Cela ne seulement améliorera votre présence en ligne, mais contribuera également à renforcer la crédibilité de votre entreprise.",
    },
    {
      title: "Maintenez une Présence Active sur les Réseaux Sociaux",
      description: "Les médias sociaux sont des outils puissants pour renforcer votre présence en ligne. Créez des profils sur les plateformes pertinentes pour votre entreprise et partagez régulièrement du contenu engageant. L’interaction avec votre audience sur les réseaux sociaux contribue à renforcer la notoriété de votre marque et à diriger le trafic vers votre site web.",
    },
    {
      title: "Utilisez des Newsletters et des E-mails pour Générer du Trafic Qualifié",
      description: "La communication directe avec votre public est essentielle. Utilisez des newsletters et des e-mails pour informer votre audience des nouveautés, des promotions ou des contenus exclusifs. Cela crée une relation continue avec vos visiteurs et les encourage à revenir sur votre site.En suivant ces conseils, vous pouvez renforcer significativement votre présence en ligne et attirer davantage de visiteurs vers votre site. N’oubliez pas que les investissements dans le référencement et la visibilité en ligne peuvent générer des retours significatifs pour votre entreprise, positionnant ainsi votre site comme une destination incontournable dans votre secteur d’activité.",
    },
  ];

  return (
    <div>
      {tips.map((tip, index) => (
        <Tip key={index} title={tip.title} description={tip.description} />
      ))}
    </div>
  );
};

const Tip = ({ title, description }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default SEOPage;
