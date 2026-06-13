export type Lang = "fr" | "nl" | "en";

export const LANGS: ReadonlyArray<Lang> = ["fr", "nl", "en"] as const;

export const DEFAULT_LANG: Lang = "fr";

export function getLangFromPath(pathname: string): Lang {
  if (pathname === "/nl" || pathname.startsWith("/nl/")) return "nl";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "fr";
}

export function withoutLangPrefix(pathname: string): string {
  if (pathname === "/nl" || pathname === "/en") return "/";
  if (pathname.startsWith("/nl/") || pathname.startsWith("/en/")) {
    return pathname.slice(3);
  }
  return pathname;
}

export function buildLangPath(pathname: string, target: Lang): string {
  const base = withoutLangPrefix(pathname);
  if (target === "fr") return base;
  if (base === "/") return `/${target}`;
  return `/${target}${base}`;
}

export function localePath(slug: string, lang: Lang): string {
  const normalized = slug.startsWith("/") ? slug : `/${slug}`;
  if (lang === "fr") return normalized === "/" ? "/" : normalized;
  if (normalized === "/") return `/${lang}`;
  return `/${lang}${normalized}`;
}

export const HTML_LANG: Record<Lang, string> = {
  fr: "fr",
  nl: "nl",
  en: "en",
};

export const LANG_LABEL: Record<Lang, string> = {
  fr: "FR",
  nl: "NL",
  en: "EN",
};
