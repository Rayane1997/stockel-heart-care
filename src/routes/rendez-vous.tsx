import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Languages, Clock, ArrowUpRight, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SMC, PRACTITIONERS } from "@/lib/smc-data";

export const Route = createFileRoute("/rendez-vous")({
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — Stockel Medical Center" },
      { name: "description", content: "Réservez en ligne avec un praticien du Stockel Medical Center : dentisterie, médecine générale, prises de sang, chirurgie vasculaire." },
      { property: "og:title", content: "Prendre rendez-vous — Stockel Medical Center" },
    ],
    links: [{ rel: "canonical", href: "/rendez-vous" }],
  }),
  component: RendezVous,
});

function RendezVous() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-smc pt-20 pb-10 lg:pt-28">
        <p className="eyebrow mb-5">Rendez-vous en ligne</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
          Choisissez votre <em className="text-teal not-italic">praticien</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          Sélectionnez le médecin de votre choix pour accéder directement à son agenda
          sur Doctor Anytime. La réservation est instantanée, 24h/24.
        </p>
      </section>

      <section className="container-smc pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRACTITIONERS.map((p) => (
          <a
            key={p.slug}
            href={p.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 hover:shadow-xl transition-all flex flex-col"
          >
            <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition">
              <ArrowUpRight className="h-5 w-5" />
            </div>
            <p className="text-xs tracking-[0.18em] uppercase text-teal mb-3">{p.speciality}</p>
            <h3 className="font-serif text-2xl text-ink mb-6 pr-10">{p.name}</h3>

            <div className="space-y-3 mb-8 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-teal" strokeWidth={1.5} />
                <span>{p.schedule}</span>
              </div>
              <div className="flex items-start gap-2">
                <Languages className="h-4 w-4 mt-0.5 shrink-0 text-teal" strokeWidth={1.5} />
                <span>{p.languages.join(" · ")}</span>
              </div>
            </div>

            <div className="mt-auto">
              <span className="btn-cta w-full">
                <Calendar className="h-4 w-4" /> Réserver avec ce praticien
              </span>
            </div>
          </a>
        ))}
      </section>

      <section className="container-smc pb-24">
        <div className="bg-sand/50 border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-ink">Vous préférez par téléphone ?</h2>
            <p className="mt-2 text-muted-foreground">Notre secrétariat répond du lundi au vendredi.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SMC.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" /> {SMC.phone}
            </a>
            <Link to="/informations-pratiques" className="btn-outline">
              Informations pratiques
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
