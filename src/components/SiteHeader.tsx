import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import logo from "@/assets/logo-smc.png.asset.json";
import { SMC } from "@/lib/smc-data";

const NAV = [
  { to: "/le-centre", label: "Le centre" },
  { to: "/specialites", label: "Spécialités" },
  { to: "/praticiens", label: "Praticiens" },
  { to: "/informations-pratiques", label: "Informations pratiques" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container-smc flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo.url} alt="Stockel Medical Center" className="h-11 w-11 object-contain" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-lg text-ink">Stockel Medical Center</span>
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">Woluwe-Saint-Pierre</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/rendez-vous" className="hidden md:inline-flex btn-cta pulse-glow">
            <Calendar className="h-4 w-4" />
            Prendre rendez-vous
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-smc py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base py-1 text-foreground/85"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/rendez-vous" onClick={() => setOpen(false)} className="btn-cta mt-2 self-start">
              <Calendar className="h-4 w-4" /> Prendre rendez-vous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
