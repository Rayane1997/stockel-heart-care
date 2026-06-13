import { createFileRoute } from "@tanstack/react-router";
import { LeCentrePage } from "@/pages/LeCentrePage";
import { buildPageHead } from "@/i18n/route-meta";

export const Route = createFileRoute("/en/le-centre")({
  head: () => buildPageHead("leCentre", "en"),
  component: LeCentrePage,
});
