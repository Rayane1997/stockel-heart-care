import { Calendar, Languages, ArrowUpRight, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LangLink } from "@/components/LangLink";
import { SMC, PRACTITIONERS, getPractitionerCopy } from "@/lib/smc-data";
import { useT } from "@/i18n/use-translation";

export function RendezVousPage() {
  const { t } = useT();
  const r = t.rendezVous;
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-smc pt-20 pb-10 lg:pt-28">
        <p className="eyebrow mb-5">{r.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
          {r.heroTitlePre}
          <em className="text-teal not-italic">{r.heroTitleEmphasis}</em>
          {r.heroTitleSuffix}
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          {r.heroBody}
        </p>
      </section>

      <section className="container-smc pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRACTITIONERS.map((practitioner) => {
          const copy = getPractitionerCopy(t, practitioner.key);
          return (
            <a
              key={practitioner.slug}
              href={practitioner.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <p className="text-xs tracking-[0.18em] uppercase text-teal mb-3">
                {copy.speciality}
              </p>
              <h3 className="font-serif text-2xl text-ink mb-6 pr-10">
                {practitioner.name}
              </h3>

              <div className="space-y-3 mb-8 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Languages
                    className="h-4 w-4 mt-0.5 shrink-0 text-teal"
                    strokeWidth={1.5}
                  />
                  <span>{practitioner.languages.join(" · ")}</span>
                </div>
              </div>

              <div className="mt-auto">
                <span className="btn-cta w-full">
                  <Calendar className="h-4 w-4" />{" "}
                  {t.common.bookWithPractitioner}
                </span>
              </div>
            </a>
          );
        })}
      </section>

      <section className="container-smc pb-24">
        <div className="bg-sand/50 border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-ink">
              {r.phone.title}
            </h2>
            <p className="mt-2 text-muted-foreground">{r.phone.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SMC.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" /> {SMC.phone}
            </a>
            <LangLink to="/informations-pratiques" className="btn-outline">
              {r.phone.practicalCta}
            </LangLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
