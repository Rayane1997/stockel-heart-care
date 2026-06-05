export const SMC = {
  name: "Stockel Medical Center",
  short: "SMC",
  address: "3 Avenue de Hinnisdael, 1150 Woluwe Saint-Pierre",
  phone: "02/705.30.32",
  phoneHref: "tel:+3227053032",
  email: "secretariat@stockelmedicalcenter.com",
  booking: "https://www.doctoranytime.be/h/stockel-medical-center",
  languages: ["FR", "EN", "NL"],
};

export const PRACTITIONERS = [
  {
    slug: "noha-fayed",
    name: "Dr. Noha Fayed",
    speciality: "Dentisterie",
    booking: "https://www.doctoranytime.be/d/dentiste/noha-fayed?h=stockel-medical-center",
    languages: ["FR", "EN", "NL", "AR"],
    schedule: "Lundi & jeudi · 9h – 16h",
  },
  {
    slug: "chrysoula-karampela",
    name: "Dr. Chrysoula Karampela",
    speciality: "Médecine générale & prises de sang",
    booking: "https://www.doctoranytime.be/d/medecin-generaliste/chrysoula-karampela?h=stockel-medical-center",
    languages: ["FR", "EN", "GR"],
    schedule: "Lundi, mardi, jeudi & vendredi · 9h – 17h",
  },
  {
    slug: "sue-liza-eta",
    name: "Dr. Sue-Liza Eta",
    speciality: "Chirurgie vasculaire",
    booking: "https://www.doctoranytime.be/d/chirurgien-vasculaire/sue-liza-eta?h=stockel-medical-center",
    languages: ["FR", "EN"],
    schedule: "Lundi & samedi matin · 9h – 12h30",
  },
];

export const SPECIALTIES = [
  {
    slug: "dentisterie",
    title: "Dentisterie",
    short: "Soins, esthétique et suivi dentaire pour adultes et enfants.",
    description:
      "Consultations, soins conservateurs, prévention et esthétique dentaire dans un cabinet équipé d'instruments modernes.",
    booking: PRACTITIONERS[0].booking,
  },
  {
    slug: "medecine-generale",
    title: "Médecine générale",
    short: "Votre médecin de famille à Stockel pour un suivi attentif.",
    description:
      "Consultations de médecine générale, suivi des pathologies chroniques, prévention, vaccinations et certificats.",
    booking: PRACTITIONERS[1].booking,
  },
  {
    slug: "prises-de-sang",
    title: "Prises de sang",
    short: "Prélèvements sur rendez-vous, sans temps d'attente.",
    description:
      "Prélèvements biologiques effectués par notre équipe infirmière, en partenariat avec un laboratoire agréé.",
    booking: PRACTITIONERS[1].booking,
  },
  {
    slug: "chirurgie-vasculaire",
    title: "Chirurgie vasculaire",
    short: "Consultations spécialisées en pathologies veineuses et artérielles.",
    description:
      "Évaluation, diagnostic et prise en charge des affections vasculaires par un chirurgien spécialisé.",
    booking: PRACTITIONERS[2].booking,
  },
];
