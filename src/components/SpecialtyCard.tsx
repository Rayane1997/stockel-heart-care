import { ArrowUpRight } from "lucide-react";
import { SMC } from "@/lib/smc-data";

export function SpecialtyCard({ title, short, number, href }: { title: string; short: string; number: string; href?: string }) {
  return (
    <a
      href={href || SMC.booking}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_60px_-30px_rgba(40,60,90,0.25)]"
    >
      <div className="flex items-start justify-between mb-8">
        <span className="text-xs tracking-[0.2em] text-teal font-medium">{number}</span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
      <h3 className="font-serif text-2xl mb-3 text-ink">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{short}</p>
    </a>
  );
}
