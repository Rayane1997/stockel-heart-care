import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { LangLink } from "@/components/LangLink";
import { SMC } from "@/lib/smc-data";
import { useT } from "@/i18n/use-translation";

export function SiteFooter() {
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
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="container-smc py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/images/logo-smc.png"
              alt=""
              className="h-12 w-12 bg-background/10 rounded-full p-1"
            />
            <div>
              <div className="font-serif text-xl">{t.header.brand}</div>
              <div className="text-xs tracking-[0.2em] uppercase opacity-70">
                {t.header.subtitle}
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed opacity-80 max-w-md">
            {t.footer.intro}
          </p>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.18em] uppercase opacity-70 mb-5 font-sans">
            {t.footer.contact}
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
              <span>
                3 Avenue de Hinnisdael
                <br />
                1150 Woluwe Saint-Pierre
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
              <a href={SMC.phoneHref} className="hover:opacity-100">
                {SMC.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 opacity-70" />
              <a
                href={`mailto:${SMC.email}`}
                className="hover:opacity-100 break-all"
              >
                {SMC.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-[0.18em] uppercase opacity-70 mb-5 font-sans">
            {t.footer.navigation}
          </h4>
          <ul className="space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <LangLink to={n.to} className="opacity-80 hover:opacity-100">
                  {n.label}
                </LangLink>
              </li>
            ))}
          </ul>
          <LangLink
            to="/rendez-vous"
            className="mt-6 inline-flex items-center gap-2 text-sm border border-primary-foreground/30 rounded-full px-4 py-2 hover:bg-primary-foreground hover:text-primary transition"
          >
            <Calendar className="h-4 w-4" /> {t.common.bookAppointment}
          </LangLink>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-smc py-6 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-60">
          <span>
            © {new Date().getFullYear()} {t.header.brand}. {t.footer.rights}
          </span>
          <span>{t.footer.languages}</span>
        </div>
      </div>
    </footer>
  );
}
