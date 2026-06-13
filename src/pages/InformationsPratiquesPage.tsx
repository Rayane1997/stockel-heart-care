import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Car,
  Train,
  Accessibility,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LangLink } from "@/components/LangLink";
import { SMC } from "@/lib/smc-data";
import { useT } from "@/i18n/use-translation";

export function InformationsPratiquesPage() {
  const { t } = useT();
  const i = t.informationsPratiques;
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-smc pt-20 pb-12 lg:pt-28">
        <p className="eyebrow mb-5">{i.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
          {i.heroTitle}
        </h1>
      </section>

      <section className="container-smc grid lg:grid-cols-2 gap-12 pb-20">
        <div className="space-y-6">
          {[
            { i: MapPin, label: i.labels.address, d: i.address },
            { i: Phone, label: i.labels.phone, d: SMC.phone, href: SMC.phoneHref },
            { i: Mail, label: i.labels.email, d: SMC.email, href: `mailto:${SMC.email}` },
            { i: Clock, label: i.labels.hours, d: i.hoursText },
          ].map(({ i: Icon, label, d, href }) => (
            <div key={label} className="flex gap-5 border-b border-border pb-6">
              <div className="h-11 w-11 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    className="font-serif text-xl text-ink hover:text-primary break-all"
                  >
                    {d}
                  </a>
                ) : (
                  <div className="font-serif text-xl text-ink whitespace-pre-line leading-snug">
                    {d}
                  </div>
                )}
              </div>
            </div>
          ))}
          <LangLink to="/rendez-vous" className="btn-cta pulse-glow">
            <Calendar className="h-4 w-4" /> {t.common.bookAppointmentOnline}
          </LangLink>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border min-h-[500px]">
          <iframe
            title={i.mapTitle}
            src="https://www.google.com/maps?q=3+Avenue+de+Hinnisdael,+1150+Woluwe+Saint-Pierre&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-sand/40 py-20">
        <div className="container-smc grid md:grid-cols-3 gap-8">
          {[
            { i: Train, t: i.access.transport.title, d: i.access.transport.desc },
            { i: Car, t: i.access.parking.title, d: i.access.parking.desc },
            {
              i: Accessibility,
              t: i.access.accessibility.title,
              d: i.access.accessibility.desc,
            },
          ].map(({ i: Icon, t: title, d }) => (
            <div key={title} className="bg-card rounded-2xl p-7 border border-border">
              <Icon className="h-6 w-6 text-teal mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-ink mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-smc py-24 max-w-3xl">
        <p className="eyebrow mb-5">{i.faq.eyebrow}</p>
        <h2 className="font-serif text-4xl text-ink mb-10">{i.faq.title}</h2>
        <div className="space-y-6">
          {i.faq.items.map((f, idx) => (
            <details key={idx} className="group border-b border-border pb-5">
              <summary className="cursor-pointer font-serif text-xl text-ink list-none flex justify-between items-center">
                {f.q}
                <span className="text-teal text-2xl group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {idx === 0 ? (
                  <>
                    {f.aPre}
                    {SMC.phone}
                    {f.aPost}
                  </>
                ) : (
                  <>
                    {f.aPre}
                    {f.aPost}
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
