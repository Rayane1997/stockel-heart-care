import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Languages } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SMC, SPECIALTIES } from "@/lib/smc-data";

export const Route = createFileRoute("/praticiens")({
  head: () => ({
    meta: [
      { title: "Praticiens — Stockel Medical Center" },
      { name: "description", content: "Découvrez l'équipe du Stockel Medical Center : dentistes, médecins généralistes, chirurgien vasculaire." },
      { property: "og:title", content: "Praticiens — Stockel Medical Center" },
    ],
    links: [{ rel: "canonical", href: "/praticiens" }],
  }),
  component: Praticiens,
});

function Praticiens() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="container-smc pt-20 pb-12 lg:pt-28">
        <p className="eyebrow mb-5">Praticiens</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
          Une équipe pluridisciplinaire, à votre écoute.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          Nos praticiens consultent au sein du centre. Chacun exerce dans sa spécialité,
          en français, anglais ou néerlandais.
        </p>
      </section>

      <section className="container-smc py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SPECIALTIES.flatMap((s) => [
          { name: "Dr. À compléter", speciality: s.title, slug: s.slug },
        ]).map((p, i) => (
          <article key={i} className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-sand to-secondary/40 mb-5 flex items-center justify-center">
              <span className="font-serif text-5xl text-primary/30">SMC</span>
            </div>
            <p className="text-xs tracking-[0.18em] uppercase text-teal mb-2">{p.speciality}</p>
            <h3 className="font-serif text-2xl text-ink mb-3">{p.name}</h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
              <Languages className="h-3.5 w-3.5" /> FR · EN · NL
            </div>
            <a href={SMC.booking} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80">
              <Calendar className="h-4 w-4" /> Prendre rendez-vous
            </a>
          </article>
        ))}
      </section>

      <section className="container-smc py-20">
        <div className="bg-muted/60 border border-border rounded-3xl p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-ink">L'équipe complète arrive prochainement.</h2>
          <p className="mt-4 text-muted-foreground">
            Photos, biographies et plages de consultation de nos praticiens seront publiées ici.
            Pour toute question : <a href={`mailto:${SMC.email}`} className="text-primary underline-offset-4 hover:underline">{SMC.email}</a>.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
