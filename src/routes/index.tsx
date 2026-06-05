import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, Phone, Clock, ArrowRight, Stethoscope, ShieldCheck, HeartPulse } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { SMC, SPECIALTIES } from "@/lib/smc-data";
import reception from "@/assets/reception.jpg.asset.json";
import dentalRoom from "@/assets/dental-room.jpg.asset.json";
import waiting from "@/assets/waiting-detail.jpg.asset.json";
import office from "@/assets/office.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stockel Medical Center — Centre médical à Woluwe-Saint-Pierre" },
      { name: "description", content: "Centre médical pluridisciplinaire à Stockel : dentisterie, médecine générale, prises de sang, chirurgie vasculaire. Cadre serein, équipe attentive, rendez-vous en ligne." },
      { property: "og:title", content: "Stockel Medical Center" },
      { property: "og:description", content: "Centre médical pluridisciplinaire à Stockel — Woluwe-Saint-Pierre." },
      { property: "og:image", content: reception.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-smc pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 fade-up">
            <p className="eyebrow mb-6">Centre médical · Stockel</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink">
              Une médecine attentive,<br />
              dans un cadre <em className="text-teal not-italic">apaisant</em>.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Au cœur de Stockel, le Stockel Medical Center réunit plusieurs disciplines médicales
              pour vous offrir des soins du quotidien dans un environnement serein, professionnel et accessible.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={SMC.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Calendar className="h-4 w-4" /> Prendre rendez-vous
              </a>
              <Link to="/informations-pratiques" className="btn-outline">
                Informations pratiques <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "4+", l: "spécialités" },
                { n: "FR·EN·NL", l: "trilingue" },
                { n: "1150", l: "Woluwe-St-Pierre" },
              ].map((s) => (
                <div key={s.l} className="border-l border-border pl-4">
                  <div className="font-serif text-2xl text-ink">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-sand">
              <img src={reception.url} alt="Réception du Stockel Medical Center" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-lg max-w-[240px] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-teal/15 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Sur rendez-vous</div>
                  <div className="text-sm font-medium text-ink">Lun–Ven · 8h–19h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="border-y border-border bg-muted/40">
        <div className="container-smc py-12 grid sm:grid-cols-3 gap-10">
          {[
            { i: Stethoscope, t: "Pluridisciplinaire", d: "Plusieurs spécialités réunies sous un même toit, pour un suivi cohérent." },
            { i: HeartPulse, t: "Humain", d: "Une équipe à l'écoute, qui prend le temps de comprendre chaque patient." },
            { i: ShieldCheck, t: "Sérieux", d: "Un cadre médical rigoureux, des équipements modernes, une hygiène irréprochable." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="flex gap-4">
              <Icon className="h-6 w-6 text-teal shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-xl text-ink mb-1">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="container-smc py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Nos spécialités</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]">
              Une médecine de proximité, à plusieurs voix.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              Du suivi médical général aux soins dentaires, en passant par les prélèvements
              et la chirurgie vasculaire — chaque consultation se déroule dans un cabinet pensé
              pour votre confort.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALTIES.map((s, i) => (
            <SpecialtyCard key={s.slug} title={s.title} short={s.short} number={String(i + 1).padStart(2, "0")} href={s.booking} />
          ))}
        </div>
      </section>

      {/* PLACE GALLERY */}
      <section className="bg-sand/40 py-24 lg:py-32">
        <div className="container-smc">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-5">Le lieu</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]">
              Un cabinet pensé pour le confort des patients.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Lumière naturelle, matériaux doux, équipements récents. Tout a été conçu pour
              que votre passage au centre soit aussi serein que possible.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-8 aspect-[16/10] rounded-2xl overflow-hidden">
              <img src={dentalRoom.url} alt="Cabinet de dentisterie" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4 aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={waiting.url} alt="Détail salle d'attente" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4 aspect-square rounded-2xl overflow-hidden">
              <img src={office.url} alt="Bureau de consultation" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-12 md:col-span-8 aspect-[16/9] rounded-2xl overflow-hidden">
              <img src={reception.url} alt="Réception du centre" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mt-12">
            <Link to="/le-centre" className="btn-outline">
              Découvrir le centre <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRACTICAL */}
      <section className="container-smc py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow mb-5">Informations pratiques</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1] mb-8">
              Nous trouver, nous joindre.
            </h2>
            <div className="space-y-6">
              {[
                { i: MapPin, t: "Adresse", d: "3 Avenue de Hinnisdael\n1150 Woluwe-Saint-Pierre" },
                { i: Phone, t: "Téléphone", d: SMC.phone, href: SMC.phoneHref },
                { i: Clock, t: "Horaires", d: "Lundi – Vendredi · 8h00 – 19h00\nSamedi sur rendez-vous" },
              ].map(({ i: Icon, t, d, href }) => (
                <div key={t} className="flex gap-5 border-b border-border pb-6">
                  <div className="h-11 w-11 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">{t}</div>
                    {href ? (
                      <a href={href} className="font-serif text-xl text-ink hover:text-primary">{d}</a>
                    ) : (
                      <div className="font-serif text-xl text-ink whitespace-pre-line leading-snug">{d}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-3">
              <a href={SMC.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Calendar className="h-4 w-4" /> Prendre rendez-vous
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border bg-card aspect-[4/5] lg:aspect-auto min-h-[500px]">
            <iframe
              title="Carte du centre"
              src="https://www.google.com/maps?q=3+Avenue+de+Hinnisdael,+1150+Woluwe-Saint-Pierre&output=embed"
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
