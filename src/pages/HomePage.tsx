import {
  Calendar,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { LangLink } from "@/components/LangLink";
import { SMC, SPECIALTIES, getSpecialtyCopy } from "@/lib/smc-data";
import { useT } from "@/i18n/use-translation";

export function HomePage() {
  const { t } = useT();
  const h = t.home;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="container-smc pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 fade-up">
            <p className="eyebrow mb-6">{h.eyebrow}</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink">
              {h.heroTitleLine1}
              <br />
              {h.heroTitleLine2Pre}
              <em className="text-teal not-italic">{h.heroTitleEmphasis}</em>
              {h.heroTitleSuffix}
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              {h.heroBody}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <LangLink to="/rendez-vous" className="btn-cta pulse-glow">
                <Calendar className="h-4 w-4" /> {t.common.bookAppointment}
              </LangLink>
              <LangLink to="/informations-pratiques" className="btn-outline">
                {h.practicalCta} <ArrowRight className="h-4 w-4" />
              </LangLink>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "4+", l: h.stats.specialties },
                { n: "FR·EN·NL", l: h.stats.trilingual },
                { n: "1150", l: h.stats.location },
              ].map((s) => (
                <div key={s.l} className="border-l border-border pl-4">
                  <div className="font-serif text-2xl text-ink">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-sand">
              <img
                src="/images/reception.jpg"
                alt={t.leCentre.receptionAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-lg max-w-[240px] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-teal/15 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    {h.hoursCard.eyebrow}
                  </div>
                  <div className="text-sm font-medium text-ink">
                    {h.hoursCard.hours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="container-smc py-12 grid sm:grid-cols-3 gap-10">
          {[
            {
              i: Stethoscope,
              t: h.values.pluridisciplinary.title,
              d: h.values.pluridisciplinary.desc,
            },
            {
              i: HeartPulse,
              t: h.values.human.title,
              d: h.values.human.desc,
            },
            {
              i: ShieldCheck,
              t: h.values.serious.title,
              d: h.values.serious.desc,
            },
          ].map(({ i: Icon, t: title, d }) => (
            <div key={title} className="flex gap-4">
              <Icon
                className="h-6 w-6 text-teal shrink-0 mt-1"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-serif text-xl text-ink mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-smc py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">{h.specialties.eyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]">
              {h.specialties.title}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              {h.specialties.body}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALTIES.map((s, i) => {
            const copy = getSpecialtyCopy(t, s.key);
            return (
              <SpecialtyCard
                key={s.slug}
                title={copy.title}
                short={copy.short}
                number={String(i + 1).padStart(2, "0")}
                href={s.booking}
              />
            );
          })}
        </div>
      </section>

      <section className="bg-sand/40 py-24 lg:py-32">
        <div className="container-smc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-5">{h.place.eyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]">
              {h.place.title}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {h.place.body}
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-8 aspect-[16/10] rounded-2xl overflow-hidden">
              <img
                src="/images/dental-room.jpg"
                alt={t.leCentre.gallery.dentalAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-6 md:col-span-4 aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/images/waiting-detail.jpg"
                alt={t.leCentre.gallery.detailAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-12 aspect-[16/7] rounded-2xl overflow-hidden">
              <img
                src="/images/office.jpg"
                alt={t.leCentre.gallery.officeAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12">
            <LangLink to="/le-centre" className="btn-outline">
              {h.place.cta} <ArrowRight className="h-4 w-4" />
            </LangLink>
          </div>
        </div>
      </section>

      <section className="container-smc py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow mb-5">{h.practical.eyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1] mb-8">
              {h.practical.title}
            </h2>
            <div className="space-y-6">
              {[
                {
                  i: MapPin,
                  t: h.practical.labels.address,
                  d: "3 Avenue de Hinnisdael\n1150 Woluwe Saint-Pierre",
                },
                {
                  i: Phone,
                  t: h.practical.labels.phone,
                  d: SMC.phone,
                  href: SMC.phoneHref,
                },
                {
                  i: Clock,
                  t: h.practical.labels.hours,
                  d: h.practical.hoursText,
                },
              ].map(({ i: Icon, t: label, d, href }) => (
                <div
                  key={label}
                  className="flex gap-5 border-b border-border pb-6"
                >
                  <div className="h-11 w-11 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <Icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="font-serif text-xl text-ink hover:text-primary"
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
            </div>
            <div className="mt-10 flex gap-3">
              <LangLink to="/rendez-vous" className="btn-cta pulse-glow">
                <Calendar className="h-4 w-4" /> {t.common.bookAppointment}
              </LangLink>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border bg-card aspect-[4/5] lg:aspect-auto min-h-[500px]">
            <iframe
              title={h.mapTitle}
              src="https://www.google.com/maps?q=3+Avenue+de+Hinnisdael,+1150+Woluwe+Saint-Pierre&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
