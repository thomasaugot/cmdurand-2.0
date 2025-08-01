// data/recruitmentData.js

export const jobOffer = {
  title: "Charpentier / Menuisier (H/F)",
  type: "CDI",
  location: "Missillac (44780)",
  experience: "Débutant accepté avec motivation",
  salary: "À négocier selon profil",
  startDate: "Dès que possible",
  
  description: "Dans le cadre de notre développement, nous recherchons un(e) charpentier/menuisier passionné(e) par le travail du bois pour rejoindre notre équipe dynamique.",
  
  missions: [
    "Réalisation de charpentes traditionnelles et industrielles",
    "Travaux de menuiserie intérieure et extérieure", 
    "Pose et assemblage sur chantier",
    "Lecture de plans et métrés",
    "Respect des normes de sécurité et de qualité"
  ],
  
  profile: [
    "Formation en charpente/menuiserie (CAP, BEP, Bac Pro) ou expérience équivalente",
    "Motivation et envie d'apprendre pour les débutants",
    "Rigueur, autonomie et esprit d'équipe",
    "Permis B obligatoire",
    "Connaissance des outils traditionnels et électroportatifs"
  ],
  
  advantages: [
    "Entreprise familiale à taille humaine",
    "Projets variés et valorisants",
    "Évolution possible selon profil",
    "Ambiance de travail conviviale",
    "Formation continue aux nouvelles techniques"
  ],
  
  contact: {
    email: "charpente.menuiserie.durand@gmail.com",
    phone: "+33 6 76 50 85 51",
    subject: "Candidature - Charpentier/Menuisier"
  }
};

export const applicationForm = {
  fields: [
    {
      name: "firstName",
      label: "Prénom",
      type: "text",
      required: true,
      placeholder: "Votre prénom"
    },
    {
      name: "lastName", 
      label: "Nom",
      type: "text",
      required: true,
      placeholder: "Votre nom"
    },
    {
      name: "email",
      label: "Email",
      type: "email", 
      required: true,
      placeholder: "votre@email.com"
    },
    {
      name: "phone",
      label: "Téléphone",
      type: "tel",
      required: true,
      placeholder: "06 12 34 56 78"
    },
    {
      name: "experience",
      label: "Expérience",
      type: "select",
      required: true,
      options: [
        { value: "", label: "Sélectionnez votre niveau" },
        { value: "debutant", label: "Débutant (0-2 ans)" },
        { value: "junior", label: "Junior (2-5 ans)" },
        { value: "confirme", label: "Confirmé (5-10 ans)" },
        { value: "senior", label: "Senior (10+ ans)" }
      ]
    },
    {
      name: "motivation",
      label: "Lettre de motivation",
      type: "textarea",
      required: true,
      placeholder: "Expliquez-nous pourquoi vous souhaitez nous rejoindre...",
      rows: 6
    }
  ]
};