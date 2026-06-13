import { createFileRoute } from "@tanstack/react-router";
import { PraticiensPage } from "@/pages/PraticiensPage";
import { buildPageHead } from "@/i18n/route-meta";

export const Route = createFileRoute("/nl/praticiens")({
  head: () => buildPageHead("praticiens", "nl"),
  component: PraticiensPage,
});
