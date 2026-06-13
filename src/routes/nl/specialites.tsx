import { createFileRoute } from "@tanstack/react-router";
import { SpecialitesPage } from "@/pages/SpecialitesPage";
import { buildPageHead } from "@/i18n/route-meta";

export const Route = createFileRoute("/nl/specialites")({
  head: () => buildPageHead("specialites", "nl"),
  component: SpecialitesPage,
});
