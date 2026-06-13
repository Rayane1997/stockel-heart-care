import { dictionaries } from "./dictionaries";
import { LANGS, localePath, type Lang } from "./lang";

export type PageKey =
  | "home"
  | "leCentre"
  | "specialites"
  | "praticiens"
  | "informationsPratiques"
  | "rendezVous";

const PAGE_SLUG: Record<PageKey, string> = {
  home: "/",
  leCentre: "/le-centre",
  specialites: "/specialites",
  praticiens: "/praticiens",
  informationsPratiques: "/informations-pratiques",
  rendezVous: "/rendez-vous",
};

export function buildPageHead(page: PageKey, lang: Lang) {
  const meta = dictionaries[lang].meta[page];
  const slug = PAGE_SLUG[page];
  const canonical = localePath(slug, lang);

  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.ogTitle ?? meta.title },
      ...(meta.description
        ? [{ property: "og:description", content: meta.description }]
        : []),
    ],
    links: [
      { rel: "canonical", href: canonical },
      ...LANGS.map((l) => ({
        rel: "alternate",
        hrefLang: l,
        href: localePath(slug, l),
      })),
      { rel: "alternate", hrefLang: "x-default", href: localePath(slug, "fr") },
    ],
  };
}
