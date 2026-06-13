import { Calendar } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SPECIALTIES, getSpecialtyCopy } from "@/lib/smc-data";
import { useT } from "@/i18n/use-translation";

export function SpecialitesPage() {
  const { t } = useT();
  const s = t.specialites;
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-smc pt-20 pb-12 lg:pt-28">
        <p className="eyebrow mb-5">{s.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
          {s.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          {s.heroBody}
        </p>
      </section>

      <section className="container-smc py-12 lg:py-20 space-y-6">
        {SPECIALTIES.map((specialty, i) => {
          const copy = getSpecialtyCopy(t, specialty.key);
          return (
            <article
              key={specialty.slug}
              className="group grid lg:grid-cols-12 gap-8 items-start py-10 border-t border-border"
            >
              <div className="lg:col-span-2">
                <span className="font-serif text-3xl text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
                  {copy.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {copy.description}
                </p>
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <a
                  href={specialty.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <Calendar className="h-4 w-4" /> {t.common.appointment}
                </a>
              </div>
            </article>
          );
        })}
      </section>

      <SiteFooter />
    </div>
  );
}
