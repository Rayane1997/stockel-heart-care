import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Calendar, Car, Train, Accessibility } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SMC } from "@/lib/smc-data";

export const Route = createFileRoute("/informations-pratiques")({
  head: () => ({
    meta: [
      { title: "Informations pratiques — Stockel Medical Center" },
      { name: "description", content: "Adresse, horaires, accès et contact du Stockel Medical Center à Woluwe-Saint-Pierre." },
      { property: "og:title", content: "Informations pratiques — Stockel Medical Center" },
    ],
    links: [{ rel: "canonical", href: "/informations-pratiques" }],
  }),
  component: Pratiques,
});

function Pratiques() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-smc pt-20 pb-12 lg:pt-28">
        <p className="eyebrow mb-5">Informations pratiques</p>
        <h1 className="font-serif text-5xl md:text-6xl text-ink max-w-3xl leading-[1.05]">
          Nous trouver, nous contacter, prendre rendez-vous.
        </h1>
      </section>

      <section className="container-smc grid lg:grid-cols-2 gap-12 pb-20">
        <div className="space-y-6">
          {[
            { i: MapPin, t: "Adresse", d: "3 Avenue de Hinnisdael\n1150 Woluwe-Saint-Pierre" },
            { i: Phone, t: "Téléphone", d: SMC.phone, href: SMC.phoneHref },
            { i: Mail, t: "Email", d: SMC.email, href: `mailto:${SMC.email}` },
            { i: Clock, t: "Horaires", d: "Lundi, mardi, jeudi & vendredi · 8h00 – 17h00\nSamedi sur rendez-vous\nMercredi & dimanche fermé" },
          ].map(({ i: Icon, t, d, href }) => (
            <div key={t} className="flex gap-5 border-b border-border pb-6">
              <div className="h-11 w-11 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">{t}</div>
                {href ? (
                  <a href={href} className="font-serif text-xl text-ink hover:text-primary break-all">{d}</a>
                ) : (
                  <div className="font-serif text-xl text-ink whitespace-pre-line leading-snug">{d}</div>
                )}
              </div>
            </div>
          ))}
          <a href={SMC.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Calendar className="h-4 w-4" /> Prendre rendez-vous en ligne
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border min-h-[500px]">
          <iframe
            title="Carte"
            src="https://www.google.com/maps?q=3+Avenue+de+Hinnisdael,+1150+Woluwe-Saint-Pierre&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-sand/40 py-20">
        <div className="container-smc grid md:grid-cols-3 gap-8">
          {[
            { i: Train, t: "Transports", d: "Métro Stockel (ligne 1) à quelques minutes à pied. Bus 36, 39, 42." },
            { i: Car, t: "Parking", d: "Stationnement de quartier à proximité immédiate du centre." },
            { i: Accessibility, t: "Accessibilité", d: "Centre accessible aux personnes à mobilité réduite." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="bg-card rounded-2xl p-7 border border-border">
              <Icon className="h-6 w-6 text-teal mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-ink mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-smc py-24 max-w-3xl">
        <p className="eyebrow mb-5">Questions fréquentes</p>
        <h2 className="font-serif text-4xl text-ink mb-10">FAQ pratique</h2>
        <div className="space-y-6">
          {[
            { q: "Comment prendre rendez-vous ?", a: "Via la plateforme Doctor Anytime accessible depuis le bouton « Prendre rendez-vous ». Vous pouvez aussi nous appeler au " + SMC.phone + "." },
            { q: "En quelles langues consultez-vous ?", a: "Nos praticiens consultent en français, en anglais et en néerlandais." },
            { q: "Acceptez-vous les nouveaux patients ?", a: "Oui, dans la plupart de nos spécialités. La disponibilité dépend du praticien — vérifiez directement sur la plateforme de réservation." },
            { q: "Que faire en cas d'urgence ?", a: "En cas d'urgence vitale, composez le 112. Pour les urgences non vitales hors horaires, contactez le service de garde de Woluwe-Saint-Pierre." },
          ].map((f) => (
            <details key={f.q} className="group border-b border-border pb-5">
              <summary className="cursor-pointer font-serif text-xl text-ink list-none flex justify-between items-center">
                {f.q}
                <span className="text-teal text-2xl group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
