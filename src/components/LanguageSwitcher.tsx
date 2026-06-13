import { useRouterState } from "@tanstack/react-router";
import {
  LANGS,
  LANG_LABEL,
  buildLangPath,
  getLangFromPath,
  type Lang,
} from "@/i18n/lang";
import { useT } from "@/i18n/use-translation";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = getLangFromPath(pathname);
  const { t } = useT();

  return (
    <div
      role="group"
      aria-label={t.common.languageAria}
      className={`inline-flex items-center gap-0.5 rounded-full border border-border bg-card/60 p-0.5 text-xs font-medium ${className}`}
    >
      {LANGS.map((lang) => {
        const isActive = lang === current;
        const href = buildLangPath(pathname, lang);
        return (
          <a
            key={lang}
            href={href}
            aria-current={isActive ? "true" : undefined}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-foreground/70 hover:text-primary"
            }`}
          >
            {LANG_LABEL[lang]}
          </a>
        );
      })}
    </div>
  );
}

export function getCurrentLang(pathname: string): Lang {
  return getLangFromPath(pathname);
}
