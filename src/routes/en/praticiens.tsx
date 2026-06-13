import { createFileRoute } from "@tanstack/react-router";
import { PraticiensPage } from "@/pages/PraticiensPage";
import { buildPageHead } from "@/i18n/route-meta";

export const Route = createFileRoute("/en/praticiens")({
  head: () => buildPageHead("praticiens", "en"),
  component: PraticiensPage,
});
