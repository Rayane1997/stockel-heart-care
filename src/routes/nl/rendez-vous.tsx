import { createFileRoute } from "@tanstack/react-router";
import { RendezVousPage } from "@/pages/RendezVousPage";
import { buildPageHead } from "@/i18n/route-meta";

export const Route = createFileRoute("/nl/rendez-vous")({
  head: () => buildPageHead("rendezVous", "nl"),
  component: RendezVousPage,
});
