export const testimonials = [
  {
    id: 1,
    author: "Antoine MARTIN",
    rating: 5,
    date: "avril 2024",
    text: "Très bon travail réalisé par l'équipe de l'entreprise Charpente et Menuiserie Durand. Mes travaux comprenaient la réalisation d'une trémie et la condamnation d'un escatrappe. Tout s'est parfaitement passé dans les délais et le coût imparti. Je recommande cette entreprise sans problème.",
    type: "Menuiserie",
    featured: true,
    reviewCount: 3
  },
  {
    id: 2,
    author: "Davy Philippe",
    rating: 5,
    date: "janvier 2024",
    text: "J'ai réalisé la charpente et l'ossature bois de mon extension avec melvyn et son équipe. Entreprise sérieuse et très professionnel. Melvyn est a l'écoute et de bons conseils sur vos projets. Vous pouvez y aller les yeux fermer. Merci a melvyn et son équipe pour ce beau projet.",
    type: "Extension",
    featured: true,
    reviewCount: 6
  },
  {
    id: 3,
    author: "Lucie Billeret",
    rating: 5,
    date: "juin 2023",
    text: "Enfin un professionnel qui se souci de ses clients ! La société et plus particulièrement le gérant, M DURAND Melvyn a géré la pose de nos menuiseries et la charpente de notre construction de maison. Une charpente incroyable ! Un gérant à l'écoute, sérieux et qui connaît réellement son métier. A l'avenir, je ferais toujours appel à la société CHARPENTE MENUISERIE DURAND. Si voulez un travail bien exécuté, un réel et bon suivi, alors je vous la recommande à 1000%.",
    type: "Construction neuve",
    featured: true,
    reviewCount: 3
  },
  {
    id: 4,
    author: "Arno Lesaint",
    rating: 5,
    date: "février 2023",
    text: "La SARL Charpente Menuiserie Durand est intervenue chez nous en février 2023 pour un renforcement de charpente. Le devis a été réalisé rapidement après une visite pour estimer les travaux. Le tarif proposé était compétitif. L'intervention s'est ensuite faite quelques jours après. M. Durand et ses employés sont sympathiques, souriants, rassurants et inspirent confiance. En une journée ils ont effectué un gros travail pour un résultat très propre et satisfaisant. Je suis pleinement satisfait.",
    type: "Charpente",
    featured: false,
    reviewCount: 8
  },
  {
    id: 5,
    author: "Sylvie Nouvellon",
    rating: 5,
    date: "mars 2023",
    text: "Je suis pleinement satisfaite de la société CMD. La prestation rendue (changement d'une poutre et création d'un jambage de renfort) est très qualitative. Entreprise sérieuse, travail soigné et très professionnel. Je recommande les service de Monsieur Durand.",
    type: "Charpente",
    featured: false,
    reviewCount: 11
  }
];

// Fonction pour récupérer les témoignages featured (pour la homepage)
export const getFeaturedTestimonials = () => {
  return testimonials.filter(testimonial => testimonial.featured === true);
};

// Fonction pour récupérer tous les témoignages
export const getAllTestimonials = () => {
  return testimonials;
};

// Fonction pour récupérer les témoignages par type de service
export const getTestimonialsByType = (type) => {
  return testimonials.filter(testimonial => 
    testimonial.type.toLowerCase().includes(type.toLowerCase())
  );
};

// Fonction pour récupérer un témoignage aléatoire
export const getRandomTestimonial = () => {
  return testimonials[Math.floor(Math.random() * testimonials.length)];
};

// Fonction pour récupérer les derniers témoignages
export const getLatestTestimonials = (count = 3) => {
  return testimonials
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};