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

export type PractitionerKey =
  | "nohaFayed"
  | "chrysoulaKarampela"
  | "timothyLiu"
  | "jabirBoujaid"
  | "ghitaMouzahir";

export interface Practitioner {
  slug: string;
  key: PractitionerKey;
  name: string;
  booking: string;
  languages: string[];
  photo?: string;
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
    photo: "/images/chrysoula-karampela.webp",
  },
  {
    slug: "timothy-liu",
    key: "timothyLiu",
    name: "Dr. Timothy Liu",
    booking:
      "https://www.doctoranytime.be/d/dentiste/timothy-liu?h=stockel-medical-center",
    languages: ["FR", "EN", "NL", "GR"],
    photo: "/images/timothy-liu.webp",
  },
  {
    slug: "jabir-boujaid",
    key: "jabirBoujaid",
    name: "Dr. Jabir Boujaid",
    booking:
      "https://www.doctoranytime.be/d/dentiste/jabir-boujaid?h=stockel-medical-center",
    languages: ["FR"],
  },
  {
    slug: "ghita-mouzahir",
    key: "ghitaMouzahir",
    name: "Dr. Ghita Mouzahir",
    booking:
      "https://www.doctoranytime.be/d/dentiste/ghita-mouzahir?h=stockel-medical-center",
    languages: ["FR", "EN", "AR", "ES"],
    photo: "/images/ghita-mouzahir.webp",
  },
];

export type SpecialtyKey = "dentisterie" | "medecineGenerale" | "prisesDeSang";

export interface Specialty {
  slug: string;
  key: SpecialtyKey;
  booking: string;
}

export const SPECIALTIES: ReadonlyArray<Specialty> = [
  {
    slug: "dentisterie",
    key: "dentisterie",
    booking: SMC.booking,
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
];

export function getSpecialtyCopy(t: Dictionary, key: SpecialtyKey) {
  return t.specialties[key];
}

export function getPractitionerCopy(t: Dictionary, key: PractitionerKey) {
  return t.practitioners[key];
}
