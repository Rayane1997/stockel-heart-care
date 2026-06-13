import { createFileRoute } from "@tanstack/react-router";
import { InformationsPratiquesPage } from "@/pages/InformationsPratiquesPage";
import { buildPageHead } from "@/i18n/route-meta";

export const Route = createFileRoute("/nl/informations-pratiques")({
  head: () => buildPageHead("informationsPratiques", "nl"),
  component: InformationsPratiquesPage,
});
