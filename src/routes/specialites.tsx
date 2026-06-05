import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SMC, SPECIALTIES } from "@/lib/smc-data";

export const Route = createFileRoute("/specialites")({
  head: () => ({
    meta: [
      { title: "Spécialités — Stockel Medical Center" },
      { name: "description", content: "Dentisterie, médecine générale, prises de sang, chirurgie vasculaire à Stockel — Woluwe-Saint-Pierre." },
      { property: "og:title", content: "Spécialités — Stockel Medical Center" },
    ],
    links: [{ rel: "canonical", href: "/specialites" }],
  }),
  component: Specialites,
});

function Specialites() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-smc pt-20 pb-12 lg:pt-28">
        <p className="eyebrow mb-5">Spécialités</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
          Plusieurs disciplines, une même exigence de soin.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          Le centre regroupe des praticiens indépendants partageant un cabinet commun, pour
          un suivi médical global, simple d'accès et de qualité.
        </p>
      </section>

      <section className="container-smc py-12 lg:py-20 space-y-6">
        {SPECIALTIES.map((s, i) => (
          <article key={s.slug} className="group grid lg:grid-cols-12 gap-8 items-start py-10 border-t border-border">
            <div className="lg:col-span-2">
              <span className="font-serif text-3xl text-teal">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">{s.description}</p>
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <a href={SMC.booking} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Calendar className="h-4 w-4" /> Rendez-vous
              </a>
            </div>
          </article>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
