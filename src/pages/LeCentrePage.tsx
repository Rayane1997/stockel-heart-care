import { Calendar, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LangLink } from "@/components/LangLink";
import { useT } from "@/i18n/use-translation";

export function LeCentrePage() {
  const { t } = useT();
  const c = t.leCentre;
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="container-smc pt-20 pb-16 lg:pt-28 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-5">{c.eyebrow}</p>
          <h1 className="font-serif text-5xl md:text-6xl text-ink leading-[1.05]">
            {c.heroTitlePre}
            <em className="text-teal not-italic">{c.heroTitleEmphasis}</em>
            {c.heroTitleSuffix}
          </h1>
        </div>
        <div className="lg:col-span-5">
          <p className="text-muted-foreground leading-relaxed">{c.heroBody}</p>
        </div>
      </section>

      <section className="container-smc">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden">
          <img
            src="/images/reception.jpg"
            alt={c.receptionAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="container-smc py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-4">{c.approach.eyebrow}</p>
          <h2 className="font-serif text-3xl text-ink">{c.approach.title}</h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-muted-foreground leading-relaxed">
          <p>{c.approach.p1}</p>
          <p>{c.approach.p2}</p>
        </div>
      </section>

      <section className="bg-sand/40 py-24">
        <div className="container-smc">
          <p className="eyebrow mb-5">{c.gallery.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-14 max-w-2xl">
            {c.gallery.title}
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <img
              src="/images/dental-room.jpg"
              alt={c.gallery.dentalAlt}
              className="col-span-12 md:col-span-7 aspect-[4/3] object-cover rounded-2xl"
            />
            <img
              src="/images/waiting-detail.jpg"
              alt={c.gallery.detailAlt}
              className="col-span-12 md:col-span-5 aspect-[3/4] object-cover rounded-2xl"
            />
            <img
              src="/images/office.jpg"
              alt={c.gallery.officeAlt}
              className="col-span-12 aspect-[16/8] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container-smc py-24 text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]">
          {c.finalCta.title}
        </h2>
        <p className="mt-5 text-muted-foreground">{c.finalCta.body}</p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <LangLink to="/rendez-vous" className="btn-cta pulse-glow">
            <Calendar className="h-4 w-4" /> {t.common.bookAppointment}
          </LangLink>
          <LangLink to="/specialites" className="btn-outline">
            {c.finalCta.seeSpecialties} <ArrowRight className="h-4 w-4" />
          </LangLink>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
