// Import des images par projet
import charpente1 from "@/assets/img/charpente-traditionelle/img2.webp";
import charpente2 from "@/assets/img/charpente-traditionelle/img4.webp";
import charpente3 from "@/assets/img/charpente-traditionelle/img6.webp";
import charpente4 from "@/assets/img/charpente-traditionelle/img9.webp";
import charpente5 from "@/assets/img/charpente-traditionelle/img11.webp";
import charpente6 from "@/assets/img/charpente-traditionelle/img13.webp";

import extension1 from "@/assets/img/extension-maison-ossature/img1.webp";
import extension2 from "@/assets/img/extension-maison-ossature/img3.webp";
import extension3 from "@/assets/img/extension-maison-ossature/img5.webp";
import extension4 from "@/assets/img/extension-maison-ossature/img7.webp";

import terrasse1 from "@/assets/img/terrasse/img1.webp";
import terrasse2 from "@/assets/img/terrasse/img2.webp";
import terrasse3 from "@/assets/img/terrasse/img3.webp";

import bardage1 from "@/assets/img/bardage/img3.webp";
import bardage2 from "@/assets/img/bardage/img5.webp";
import bardage3 from "@/assets/img/bardage/img7.webp";
import bardage4 from "@/assets/img/bardage/img9.webp";

import amenagement1 from "@/assets/img/aménagement-combles/img1.webp";
import menuiserieExt1 from "@/assets/img/menuiserie-extérieure/img1.webp";
import menuiserieGen1 from "@/assets/img/menuiserie-générale/img1.webp";
import preau1 from "@/assets/img/préau/img1.webp";
import preau2 from "@/assets/img/préau/img2.webp";
import preau3 from "@/assets/img/préau/img3.webp";
import solivage1 from "@/assets/img/solivage-porteur/img1.webp";
import solivage2 from "@/assets/img/solivage-porteur/img2.webp";
import solivage3 from "@/assets/img/solivage-porteur/img3.webp";

export const portfolioProjects = [
  // CHARPENTE TRADITIONNELLE - 2 projets
  {
    id: "charpente-ferme-renovation",
    title: "Rénovation Ferme du 18ème - Guérande",
    category: "charpente",
    serviceType: "Charpente Traditionnelle",
    year: "2024",
    duration: "6 semaines",
    client: "Particulier",
    featured: false,
    description: "Rénovation complète de la charpente d'une ferme historique du 18ème siècle. Remplacement à l'identique des pièces défaillantes en respectant les techniques traditionnelles.",
    challenges: "Conservation du patrimoine architectural, assemblages traditionnels, bois de récupération",
    images: [
      {
        src: charpente1,
        alt: "Vue d'ensemble de la charpente en cours de rénovation",
        title: "Démontage et diagnostic",
        description: "Analyse minutieuse de l'état de la charpente existante avant intervention."
      },
      {
        src: charpente2,
        alt: "Assemblage traditionnel tenon mortaise",
        title: "Assemblages traditionnels",
        description: "Réalisation des assemblages tenons-mortaises selon les règles de l'art."
      },
      {
        src: charpente3,
        alt: "Charpente restaurée terminée",
        title: "Charpente restaurée",
        description: "Résultat final : une charpente consolidée pour les siècles à venir."
      }
    ]
  },
  {
    id: "charpente-maison-neuve",
    title: "Maison Neuve Style Contemporain - La Baule",
    category: "charpente",
    serviceType: "Charpente Traditionnelle",
    year: "2023",
    duration: "4 semaines",
    client: "Particulier",
    featured: true, // ✅ PROJET MIS EN AVANT
    description: "Création d'une charpente traditionnelle pour une maison neuve alliant modernité et savoir-faire ancestral. Volumes complexes et pentes multiples.",
    challenges: "Intégration architecturale moderne, calculs de charges, finitions apparentes",
    images: [
      {
        src: charpente5,
        alt: "Détail des assemblages de faîtage",
        title: "Assemblages de faîtage",
        description: "Précision millimétrique pour les assemblages en partie haute.",
        size: "large"
      },
      {
        src: charpente4,
        alt: "Levage des fermes principales",
        title: "Levage des fermes",
        description: "Mise en place des fermes principales de 12 mètres de portée.",
        size: "medium"
      },
      {
        src: charpente6,
        alt: "Charpente achevée vue intérieure",
        title: "Vue intérieure finale",
        description: "Charpente apparente dans le séjour, finitions huilées.",
        size: "medium"
      },
      {
        src: charpente1,
        alt: "Détail construction moderne",
        title: "Détails modernes",
        description: "Intégration parfaite dans l'architecture contemporaine.",
        size: "small"
      }
    ]
  },

  // EXTENSION & OSSATURE BOIS - 2 projets
  {
    id: "extension-contemporaine",
    title: "Extension Contemporaine - Pornichet",
    category: "extension",
    serviceType: "Extension & Ossature Bois",
    year: "2024",
    duration: "10 semaines",
    client: "Particulier",
    featured: true, // ✅ PROJET MIS EN AVANT
    description: "Extension de 45m² en ossature bois pour une maison des années 80. Création d'un espace séjour-cuisine ouvert sur le jardin avec grande baie vitrée.",
    challenges: "Liaison avec l'existant, isolation thermique renforcée, étanchéité à l'air",
    images: [
      {
        src: extension1,
        alt: "Montage de l'ossature bois",
        title: "Montage ossature",
        description: "Assemblage des murs ossature bois préfabriqués en atelier.",
        size: "large"
      },
      {
        src: extension2,
        alt: "Pose de la charpente",
        title: "Charpente extension",
        description: "Mise en place de la charpente avec liaison sur l'existant.",
        size: "medium"
      },
      {
        src: extension3,
        alt: "Extension terminée",
        title: "Extension achevée",
        description: "Nouvel espace de vie baigné de lumière naturelle.",
        size: "medium"
      },
      {
        src: extension4,
        alt: "Détail liaison existant",
        title: "Liaison parfaite",
        description: "Raccordement invisible avec l'architecture existante.",
        size: "small"
      }
    ]
  },
  {
    id: "maison-ossature-ecologique",
    title: "Maison Écologique Passive - Herbignac",
    category: "extension",
    serviceType: "Extension & Ossature Bois",
    year: "2023",
    duration: "12 semaines",
    client: "Particulier",
    featured: false,
    description: "Construction neuve en ossature bois de 120m² selon les standards de la maison passive. Isolation renforcée et matériaux écologiques.",
    challenges: "Standards passifs, pont thermique, étanchéité parfaite",
    images: [
      {
        src: extension2,
        alt: "Maison hors d'eau hors d'air",
        title: "Hors d'eau hors d'air",
        description: "Structure achevée, étanchéité validée par test d'infiltrométrie.",
        size: "large"
      },
      {
        src: extension4,
        alt: "Fondations et dalle",
        title: "Préparation dalle",
        description: "Dalle isolée périphérie avec rupteurs de ponts thermiques.",
        size: "medium"
      },
      {
        src: extension1,
        alt: "Levage des murs",
        title: "Levage des murs",
        description: "Mise en place des murs préfabriqués avec isolation intégrée.",
        size: "medium"
      },
      {
        src: extension3,
        alt: "Finitions écologiques",
        title: "Performance énergétique",
        description: "Maison passive prête à accueillir ses occupants.",
        size: "small"
      }
    ]
  },

  // TERRASSES - 2 projets
  {
    id: "terrasse-piscine-ipé",
    title: "Terrasse Piscine en Ipé - Le Pouliguen",
    category: "terrasse",
    serviceType: "Terrasses & Aménagement Extérieur",
    year: "2024",
    duration: "3 semaines",
    client: "Particulier",
    featured: true, // ✅ PROJET MIS EN AVANT
    description: "Création d'une terrasse de 80m² en bois exotique Ipé autour d'une piscine. Intégration d'un jacuzzi et d'espaces de détente avec garde-corps inox.",
    challenges: "Résistance aux UV et chlore, mise à niveau parfaite, évacuation des eaux",
    images: [
      {
        src: terrasse1,
        alt: "Structure de la terrasse",
        title: "Structure porteuse",
        description: "Lambourdes en ipé sur plots réglables pour mise à niveau.",
        size: "large"
      },
      {
        src: terrasse2,
        alt: "Pose du platelage",
        title: "Pose des lames",
        description: "Platelage ipé avec fixations invisibles et joints de dilatation.",
        size: "medium"
      },
      {
        src: terrasse3,
        alt: "Terrasse achevée avec piscine",
        title: "Espace de détente",
        description: "Terrasse terminée avec intégration parfaite du jacuzzi.",
        size: "medium"
      },
      {
        src: terrasse1,
        alt: "Finitions terrasse piscine",
        title: "Finitions soignées",
        description: "Détails de finition autour de la piscine et du jacuzzi.",
        size: "small"
      }
    ]
  },
  {
    id: "terrasse-composite-moderne",
    title: "Terrasse Composite Multi-niveaux - Guérande",
    category: "terrasse",
    serviceType: "Terrasses & Aménagement Extérieur",
    year: "2023",
    duration: "4 semaines",
    client: "Particulier",
    featured: false,
    description: "Aménagement d'une terrasse composite de 120m² sur plusieurs niveaux avec escaliers intégrés et éclairage LED. Création de zones distinctes pour repas et détente.",
    challenges: "Niveaux multiples, intégration éclairage, drainage complexe",
    images: [
      {
        src: terrasse3,
        alt: "Vue d'ensemble terrasse multi-niveaux",
        title: "Vue d'ensemble",
        description: "Terrasse terminée avec éclairage LED intégré.",
        size: "large"
      },
      {
        src: terrasse2,
        alt: "Terrasse composite premier niveau",
        title: "Premier niveau",
        description: "Zone repas principale avec composite haute qualité.",
        size: "medium"
      },
      {
        src: terrasse1,
        alt: "Escaliers et garde-corps",
        title: "Escaliers intégrés",
        description: "Liaisons entre niveaux avec garde-corps assortis.",
        size: "medium"
      },
      {
        src: terrasse2,
        alt: "Éclairage LED intégré",
        title: "Éclairage moderne",
        description: "Système d'éclairage LED pour les soirées d'été.",
        size: "small"
      }
    ]
  },

  // BARDAGE - 2 projets
  {
    id: "bardage-claire-voie-moderne",
    title: "Bardage Claire-voie Contemporain - Saint-Lyphard",
    category: "bardage",
    serviceType: "Bardage & Revêtement",
    year: "2024",
    duration: "3 semaines",
    client: "Particulier",
    featured: false,
    description: "Habillage d'une façade de maison contemporaine avec bardage claire-voie en douglas. Jeu de pleins et de vides pour dynamiser l'architecture.",
    challenges: "Ventilation optimale, fixations invisibles, alignements parfaits",
    images: [
      {
        src: bardage2,
        alt: "Pose bardage claire-voie",
        title: "Pose claire-voie",
        description: "Installation des lames avec espacements réguliers.",
        size: "large"
      },
      {
        src: bardage1,
        alt: "Préparation support bardage",
        title: "Préparation support",
        description: "Pose des tasseaux et pare-pluie avant bardage.",
        size: "medium"
      },
      {
        src: bardage3,
        alt: "Façade bardage terminée",
        title: "Façade modernisée",
        description: "Résultat final : façade dynamique et moderne.",
        size: "medium"
      },
      {
        src: bardage4,
        alt: "Détail claire-voie",
        title: "Ventilation optimale",
        description: "Système de ventilation intégré au design contemporain.",
        size: "small"
      }
    ]
  },
  {
    id: "bardage-vertical-meleze",
    title: "Bardage Vertical Mélèze - Piriac-sur-Mer",
    category: "bardage",
    serviceType: "Bardage & Revêtement",
    year: "2023",
    duration: "4 semaines",
    client: "Particulier",
    featured: false,
    description: "Rénovation complète des façades d'une maison de bord de mer avec bardage vertical en mélèze de Sibérie. Traitement spécial embruns marins.",
    challenges: "Environnement marin, dilatations importantes, fixations anti-corrosion",
    images: [
      {
        src: bardage2,
        alt: "Maison bardage mélèze achevée",
        title: "Résistance marine",
        description: "Bardage mélèze adapté aux contraintes du bord de mer.",
        size: "large"
      },
      {
        src: bardage4,
        alt: "Ancien revêtement déposé",
        title: "Dépose ancien",
        description: "Retrait de l'ancien bardage et préparation du support.",
        size: "medium"
      },
      {
        src: bardage1,
        alt: "Pose bardage mélèze vertical",
        title: "Pose verticale",
        description: "Installation des lames mélèze avec fixations inox.",
        size: "medium"
      },
      {
        src: bardage3,
        alt: "Protection marine",
        title: "Traitement maritime",
        description: "Finitions spéciales pour résister aux embruns salés.",
        size: "small"
      }
    ]
  },

  // MENUISERIE - 2 projets
  {
    id: "escalier-chene-suspendu",
    title: "Escalier Chêne Suspendu - Batz-sur-Mer",
    category: "menuiserie",
    serviceType: "Menuiserie Générale",
    year: "2024",
    duration: "5 semaines",
    client: "Particulier",
    featured: false,
    description: "Création d'un escalier suspendu en chêne massif pour une maison contemporaine. Limon central acier et marches flottantes pour un design épuré.",
    challenges: "Calculs de résistance, finitions parfaites, pose millimétrique",
    images: [
      {
        src: charpente4,
        alt: "Pose limon central acier",
        title: "Structure porteuse",
        description: "Installation du limon central en acier thermolaqué.",
        size: "large"
      },
      {
        src: menuiserieGen1,
        alt: "Fabrication escalier atelier",
        title: "Fabrication atelier",
        description: "Usinage précis des marches en chêne massif.",
        size: "medium"
      },
      {
        src: menuiserieGen1,
        alt: "Escalier chêne terminé",
        title: "Escalier suspendu",
        description: "Escalier achevé : mariage réussi du bois et de l'acier.",
        size: "medium"
      },
      {
        src: charpente5,
        alt: "Détail escalier moderne",
        title: "Design épuré",
        description: "Élégance et modernité dans chaque détail.",
        size: "small"
      }
    ]
  },
  {
    id: "volets-battants-chene",
    title: "Volets Battants Chêne - Pénestin",
    category: "menuiserie",
    serviceType: "Menuiserie Extérieure",
    year: "2024",
    duration: "4 semaines",
    client: "Particulier",
    featured: false,
    description: "Fabrication et pose de volets battants en chêne pour une longère rénovée. 12 paires de volets avec ferrures traditionnelles forgées.",
    challenges: "Respect du style régional, résistance aux intempéries, ferrures sur-mesure",
    images: [
      {
        src: menuiserieExt1,
        alt: "Longère volets chêne",
        title: "Longère restaurée",
        description: "Volets chêne parfaitement intégrés au style régional.",
        size: "large"
      },
      {
        src: menuiserieExt1,
        alt: "Fabrication volets atelier",
        title: "Fabrication artisanale",
        description: "Assemblage traditionnel des volets en chêne massif.",
        size: "medium"
      },
      {
        src: bardage2,
        alt: "Pose ferrures volets",
        title: "Ferrures forgées",
        description: "Installation des gonds et crémones forgées sur-mesure.",
        size: "medium"
      },
      {
        src: bardage1,
        alt: "Volets traditionnels",
        title: "Tradition préservée",
        description: "Respect du patrimoine avec techniques modernes.",
        size: "small"
      }
    ]
  },

  // AUTRES SERVICES - 2 projets
  {
    id: "amenagement-combles-bureau",
    title: "Aménagement Combles Bureau - Guérande",
    category: "autres",
    serviceType: "Aménagement de Combles",
    year: "2024",
    duration: "6 semaines",
    client: "Particulier",
    featured: false,
    description: "Transformation de combles perdus en bureau de 40m² avec création d'une mezzanine. Isolation renforcée et création d'un accès escalier.",
    challenges: "Hauteur sous faîtage, isolation thermique, accès sécurisé",
    images: [
      {
        src: amenagement1,
        alt: "Combles avant aménagement",
        title: "État initial",
        description: "Combles perdus avant transformation en espace bureau.",
        size: "large"
      },
      {
        src: charpente3,
        alt: "Structure aménagement combles",
        title: "Nouvelle structure",
        description: "Renforcement plancher et création de cloisons.",
        size: "medium"
      },
      {
        src: amenagement1,
        alt: "Bureau combles terminé",
        title: "Bureau sous combles",
        description: "Espace de travail lumineux avec vue sur les toits.",
        size: "medium"
      },
      {
        src: charpente2,
        alt: "Isolation combles",
        title: "Isolation renforcée",
        description: "Système d'isolation haute performance pour le confort.",
        size: "small"
      }
    ]
  },
  {
    id: "preau-agricole-moderne",
    title: "Préau Agricole Moderne - Assérac",
    category: "autres",
    serviceType: "Préaux & Structures",
    year: "2023",
    duration: "3 semaines",
    client: "Agriculteur",
    featured: false,
    description: "Construction d'un préau agricole de 200m² pour stockage de matériel. Structure bois lamellé-collé et couverture bac acier isolé.",
    challenges: "Portées importantes, résistance aux charges, optimisation des coûts",
    images: [
      {
        src: preau2,
        alt: "Charpente préau agricole",
        title: "Charpente achevée",
        description: "Structure porteuse terminée avant pose de couverture.",
        size: "large"
      },
      {
        src: preau1,
        alt: "Montage structure préau",
        title: "Structure lamellé-collé",
        description: "Assemblage des fermes en lamellé-collé de 16m de portée.",
        size: "medium"
      },
      {
        src: preau3,
        alt: "Préau agricole terminé",
        title: "Préau fonctionnel",
        description: "Bâtiment agricole moderne et fonctionnel livré.",
        size: "medium"
      },
      {
        src: preau1,
        alt: "Préau agricole en service",
        title: "Mise en service",
        description: "Bâtiment opérationnel pour le stockage agricole.",
        size: "small"
      }
    ]
  }
];

// Fonction utilitaire pour récupérer les projets mis en avant
export const getFeaturedProjects = () => {
  return portfolioProjects.filter(project => project.featured === true);
};