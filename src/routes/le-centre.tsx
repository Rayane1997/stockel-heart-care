import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";


export const Route = createFileRoute("/le-centre")({
  head: () => ({
    meta: [
      { title: "Le centre — Stockel Medical Center" },
      { name: "description", content: "Découvrez le Stockel Medical Center à Woluwe Saint-Pierre : un centre médical pluridisciplinaire chaleureux et lumineux." },
      { property: "og:title", content: "Le centre — Stockel Medical Center" },
      { property: "og:image", content: "/images/reception.jpg" },
    ],
    links: [{ rel: "canonical", href: "/le-centre" }],
  }),
  component: LeCentre,
});

function LeCentre() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-smc pt-20 pb-16 lg:pt-28 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-5">Le centre</p>
          <h1 className="font-serif text-5xl md:text-6xl text-ink leading-[1.05]">
            Un lieu de soins à <em className="text-teal not-italic">taille humaine</em>.
          </h1>
        </div>
        <div className="lg:col-span-5">
          <p className="text-muted-foreground leading-relaxed">
            Le Stockel Medical Center a été imaginé comme un cabinet de proximité,
            où la qualité des soins se conjugue avec la sérénité du cadre.
          </p>
        </div>
      </section>

      <section className="container-smc">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden">
          <img src="/images/reception.jpg" alt="Réception du centre" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="container-smc py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-4">Notre approche</p>
          <h2 className="font-serif text-3xl text-ink">Une médecine du quotidien, exigeante et humaine.</h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Notre centre réunit plusieurs disciplines médicales dans un même lieu, pour vous
            offrir un parcours de soins fluide, cohérent et personnalisé. Chaque praticien
            exerce de manière indépendante tout en partageant les mêmes exigences : écoute,
            rigueur, transparence.
          </p>
          <p>
            L'aménagement du cabinet — lumière naturelle, matériaux doux, espaces aérés —
            participe pleinement à la qualité de la prise en charge. Nous accueillons aussi
            bien les patients du quartier que ceux venus de plus loin, en français, en anglais
            et en néerlandais.
          </p>
        </div>
      </section>

      <section className="bg-sand/40 py-24">
        <div className="container-smc">
          <p className="eyebrow mb-5">Galerie</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-14 max-w-2xl">
            L'ambiance du centre, en images.
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <img src="/images/dental-room.jpg" alt="Cabinet dentaire" className="col-span-12 md:col-span-7 aspect-[4/3] object-cover rounded-2xl" />
            <img src="/images/waiting-detail.jpg" alt="Détail" className="col-span-12 md:col-span-5 aspect-[3/4] object-cover rounded-2xl" />
            <img src="/images/office.jpg" alt="Bureau" className="col-span-12 aspect-[16/8] object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="container-smc py-24 text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]">
          Prenez rendez-vous en quelques clics.
        </h2>
        <p className="mt-5 text-muted-foreground">Réservation en ligne via Doctor Anytime, 24h/24.</p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link to="/rendez-vous" className="btn-cta pulse-glow">
            <Calendar className="h-4 w-4" /> Prendre rendez-vous
          </Link>
          <Link to="/specialites" className="btn-outline">
            Voir les spécialités <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
