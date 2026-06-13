import { useRouterState } from "@tanstack/react-router";
import { dictionaries, type Dictionary } from "./dictionaries";
import { getLangFromPath, type Lang } from "./lang";

export function useT(): { t: Dictionary; lang: Lang } {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = getLangFromPath(pathname);
  return { t: dictionaries[lang], lang };
}

export function tFor(lang: Lang): Dictionary {
  return dictionaries[lang];
}
