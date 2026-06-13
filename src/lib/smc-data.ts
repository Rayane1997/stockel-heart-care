import type { Dictionary } from "@/i18n/dictionaries";

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

export type PractitionerKey = "nohaFayed" | "chrysoulaKarampela" | "sueLizaEta";

export interface Practitioner {
  slug: string;
  key: PractitionerKey;
  name: string;
  booking: string;
  languages: string[];
}

export const PRACTITIONERS: ReadonlyArray<Practitioner> = [
  {
    slug: "noha-fayed",
    key: "nohaFayed",
    name: "Dr. Noha Fayed",
    booking:
      "https://www.doctoranytime.be/d/dentiste/noha-fayed?h=stockel-medical-center",
    languages: ["FR", "EN", "NL", "AR"],
  },
  {
    slug: "chrysoula-karampela",
    key: "chrysoulaKarampela",
    name: "Dr. Chrysoula Karampela",
    booking:
      "https://www.doctoranytime.be/d/medecin-generaliste/chrysoula-karampela?h=stockel-medical-center",
    languages: ["FR", "EN", "GR"],
  },
  {
    slug: "sue-liza-eta",
    key: "sueLizaEta",
    name: "Dr. Sue-Liza Eta",
    booking:
      "https://www.doctoranytime.be/d/chirurgien-vasculaire/sue-liza-eta?h=stockel-medical-center",
    languages: ["FR", "EN"],
  },
];

export type SpecialtyKey =
  | "dentisterie"
  | "medecineGenerale"
  | "prisesDeSang"
  | "chirurgieVasculaire";

export interface Specialty {
  slug: string;
  key: SpecialtyKey;
  booking: string;
}

export const SPECIALTIES: ReadonlyArray<Specialty> = [
  {
    slug: "dentisterie",
    key: "dentisterie",
    booking: PRACTITIONERS[0].booking,
  },
  {
    slug: "medecine-generale",
    key: "medecineGenerale",
    booking: PRACTITIONERS[1].booking,
  },
  {
    slug: "prises-de-sang",
    key: "prisesDeSang",
    booking: PRACTITIONERS[1].booking,
  },
  {
    slug: "chirurgie-vasculaire",
    key: "chirurgieVasculaire",
    booking: PRACTITIONERS[2].booking,
  },
];

export function getSpecialtyCopy(t: Dictionary, key: SpecialtyKey) {
  return t.specialties[key];
}

export function getPractitionerCopy(t: Dictionary, key: PractitionerKey) {
  return t.practitioners[key];
}
