import { Calendar, Languages } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SMC, PRACTITIONERS, getPractitionerCopy } from "@/lib/smc-data";
import { useT } from "@/i18n/use-translation";

export function PraticiensPage() {
  const { t } = useT();
  const p = t.praticiens;
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-smc pt-20 pb-12 lg:pt-28">
        <p className="eyebrow mb-5">{p.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
          {p.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          {p.heroBody}
        </p>
      </section>

      <section className="container-smc py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRACTITIONERS.map((practitioner) => {
          const copy = getPractitionerCopy(t, practitioner.key);
          return (
            <article
              key={practitioner.slug}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition"
            >
              <div className="aspect-square rounded-xl bg-gradient-to-br from-sand to-secondary/40 mb-5 flex items-center justify-center">
                <span className="font-serif text-5xl text-primary/30">SMC</span>
              </div>
              <p className="text-xs tracking-[0.18em] uppercase text-teal mb-2">
                {copy.speciality}
              </p>
              <h3 className="font-serif text-2xl text-ink mb-3">
                {practitioner.name}
              </h3>
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Languages className="h-3.5 w-3.5 shrink-0" />{" "}
                  {practitioner.languages.join(" · ")}
                </div>
              </div>
              <a
                href={practitioner.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta w-full"
              >
                <Calendar className="h-4 w-4" /> {t.common.bookAppointment}
              </a>
            </article>
          );
        })}
      </section>

      <section className="container-smc py-20">
        <div className="bg-muted/60 border border-border rounded-3xl p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">
            {p.notice.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {p.notice.bodyPre}
            <a
              href={`mailto:${SMC.email}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {SMC.email}
            </a>
            {p.notice.bodyPost}
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
