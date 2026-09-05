import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { LangLink } from "@/components/LangLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useT } from "@/i18n/use-translation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useT();
  const nav = [
    { to: "/le-centre", label: t.header.nav.leCentre },
    { to: "/specialites", label: t.header.nav.specialites },
    { to: "/praticiens", label: t.header.nav.praticiens },
    {
      to: "/informations-pratiques",
      label: t.header.nav.informationsPratiques,
    },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container-smc flex items-center justify-between h-20">
        <LangLink to="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo-smc.png"
            alt={t.header.brand}
            className="h-14 w-14 sm:h-11 sm:w-11 object-contain"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-lg text-ink">
              {t.header.brand}
            </span>
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
              {t.header.subtitle}
            </span>
          </div>
        </LangLink>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <LangLink
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </LangLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden md:inline-flex" />
          <LangLink
            to="/rendez-vous"
            className="hidden md:inline-flex btn-cta pulse-glow"
          >
            <Calendar className="h-4 w-4" />
            {t.common.bookAppointment}
          </LangLink>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-3 -mr-2 rounded-md hover:bg-muted"
            aria-label={t.common.menuAria}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-smc py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <LangLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base py-1 text-foreground/85"
              >
                {n.label}
              </LangLink>
            ))}
            <LangLink
              to="/rendez-vous"
              onClick={() => setOpen(false)}
              className="btn-cta mt-2 self-start"
            >
              <Calendar className="h-4 w-4" /> {t.common.bookAppointment}
            </LangLink>
            <div className="pt-4 border-t border-border/60">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
