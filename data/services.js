import { FaHammer, FaIndustry, FaHome, FaTools, FaDoorOpen, FaTree, FaLayerGroup, FaWarehouse, FaCar, FaUmbrella, FaCouch } from "react-icons/fa";

import charpenteTrad from "@/assets/img/charpente-traditionelle/img2.webp";
import charpenteIndus from "@/assets/img/charpente-industrielle/img1.webp";
import ossature from "@/assets/img/extension-maison-ossature/img1.webp";
import preau from "@/assets/img/préau/img1.webp";
import carport from "@/assets/img/carport/img1.webp";
import terrasse from "@/assets/img/terrasse/img3.webp";
import menuiserieExt from "@/assets/img/menuiserie-extérieure/img1.webp";
import bardage from "@/assets/img/bardage/img3.webp";
import solivage from "@/assets/img/solivage-porteur/img3.webp";
import menuiserieG from "@/assets/img/menuiserie-générale/img1.webp";
import homeBg from "@/assets/img/home.webp";

export const servicesData = [
  {
    id: 1,
    title: "Charpente Traditionnelle",
    subtitle: "Savoir-faire ancestral",
    description: "Spécialiste en charpente traditionnelle en bois massif. Assemblages tenons-mortaises selon les règles de l'art pour des structures durables et authentiques.",
    features: ["Bois massif français", "Assemblages traditionnels", "Respect du patrimoine", "Durabilité exceptionnelle"],
    imageUrl: charpenteTrad,
    endPoint: "/charpente-traditionelle",
    icon: <FaHammer className="text-primary" />,
    category: "structure",
    size: "large",
    popular: true
  },
  {
    id: 2,
    title: "Charpente Industrielle", 
    subtitle: "Solutions techniques",
    description: "Charpentes industrielles pour hangars, entrepôts et bâtiments commerciaux. Grandes portées et solutions techniques adaptées à vos contraintes.",
    features: ["Grandes portées", "Calculs techniques", "Normes industrielles", "Délais maîtrisés"],
    imageUrl: charpenteIndus,
    endPoint: "/charpente-industrielle",
    icon: <FaIndustry className="text-primary" />,
    category: "structure",
    size: "medium"
  },
  {
    id: 3,
    title: "Extension & Ossature Bois",
    subtitle: "Agrandissement écologique", 
    description: "Extensions et constructions ossature bois. Agrandissez votre espace avec une solution écologique, performante et rapide à mettre en œuvre.",
    features: ["Construction rapide", "Isolation performante", "Matériaux écologiques", "Design contemporain"],
    imageUrl: ossature,
    endPoint: "/extension-ou-maison-ossature",
    icon: <FaHome className="text-primary" />,
    category: "habitat",
    size: "large",
    popular: true
  },
  {
    id: 4,
    title: "Menuiserie Générale",
    subtitle: "Sur-mesure intérieur",
    description: "Fabrication sur mesure de meubles, placards et agencements intérieurs. Menuiserie artisanale parfaitement adaptée à vos espaces.",
    features: ["Conception sur-mesure", "Bois nobles", "Finitions soignées", "Optimisation espace"],
    imageUrl: menuiserieG,
    endPoint: "/menuiserie-generale", 
    icon: <FaTools className="text-primary" />,
    category: "menuiserie",
    size: "medium"
  },
  {
    id: 5,
    title: "Menuiserie Extérieure",
    subtitle: "Façades & ouvertures",
    description: "Portes, fenêtres, volets et menuiseries extérieures sur mesure. Performance thermique et esthétique pour valoriser votre façade.",
    features: ["Isolation thermique", "Sécurité renforcée", "Design personnalisé", "Durabilité marine"],
    imageUrl: menuiserieExt,
    endPoint: "/menuiserie-exterieure",
    icon: <FaDoorOpen className="text-primary" />,
    category: "menuiserie", 
    size: "medium"
  },
  {
    id: 6,
    title: "Terrasses Bois",
    subtitle: "Espaces extérieurs",
    description: "Terrasses en bois et composite pour créer votre espace détente. Matériaux durables et finitions esthétiques pour profiter de l'extérieur.",
    features: ["Bois exotiques", "Composite durable", "Garde-corps intégrés", "Évacuation optimisée"],
    imageUrl: terrasse,
    endPoint: "/terrasse",
    icon: <FaTree className="text-primary" />,
    category: "exterieur",
    size: "medium",
    popular: true
  },
  {
    id: 7,
    title: "Bardage & Revêtement",
    subtitle: "Protection & esthétique", 
    description: "Bardages bois, composite et PVC pour protéger et embellir votre façade. Large choix de matériaux et de finitions.",
    features: ["Résistance intempéries", "Ventilation optimale", "Variété matériaux", "Pose professionnelle"],
    imageUrl: bardage,
    endPoint: "/bardage",
    icon: <FaLayerGroup className="text-primary" />,
    category: "exterieur",
    size: "small"
  },
  {
    id: 8,
    title: "Aménagement de Combles",
    subtitle: "Optimisation espace",
    description: "Transformation de vos combles en espace habitable. Gagnez de la surface avec un aménagement fonctionnel et confortable.",
    features: ["Isolation renforcée", "Accès sécurisés", "Fenêtres de toit", "Espaces optimisés"],
    imageUrl: homeBg,
    endPoint: "/amenagement-des-combles",
    icon: <FaWarehouse className="text-primary" />,
    category: "habitat",
    size: "medium"
  },
  {
    id: 9,
    title: "Carports",
    subtitle: "Protection véhicules",
    description: "Carports en bois pour protéger vos véhicules. Abris élégants et fonctionnels parfaitement intégrés à votre propriété.",
    features: ["Protection optimale", "Design intégré", "Structure robuste", "Différentes tailles"],
    imageUrl: carport,
    endPoint: "/carport",
    icon: <FaCar className="text-primary" />,
    category: "exterieur",
    size: "small"
  },
  {
    id: 10,
    title: "Préaux & Abris",
    subtitle: "Espaces couverts",
    description: "Préaux en bois pour vos espaces extérieurs. Créez des zones abritées élégantes pour profiter de votre jardin toute l'année.",
    features: ["Grandes portées", "Couverture étanche", "Intégration paysagère", "Multi-usages"],
    imageUrl: preau,
    endPoint: "/preau",
    icon: <FaUmbrella className="text-primary" />,
    category: "exterieur",
    size: "small"
  },
  {
    id: 11,
    title: "Solivage Porteur",
    subtitle: "Solutions structurelles",
    description: "Création et renforcement de planchers porteurs. Solutions techniques expertes pour vos projets de rénovation et construction.",
    features: ["Calculs précis", "Renforcement discret", "Normes respectées", "Intervention rapide"],
    imageUrl: solivage,
    endPoint: "/solivage-porteur",
    icon: <FaCouch className="text-primary" />,
    category: "structure",
    size: "medium"
  }
];

export const serviceCategories = [
  { key: "all", label: "Tous nos services" },
  { key: "structure", label: "Structure & Charpente" },
  { key: "habitat", label: "Habitat & Extension" },
  { key: "menuiserie", label: "Menuiserie" },
  { key: "exterieur", label: "Aménagement Extérieur" }
];