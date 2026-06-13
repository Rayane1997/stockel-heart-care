import { createFileRoute } from "@tanstack/react-router";
import { LeCentrePage } from "@/pages/LeCentrePage";
import { buildPageHead } from "@/i18n/route-meta";

export const Route = createFileRoute("/nl/le-centre")({
  head: () => buildPageHead("leCentre", "nl"),
  component: LeCentrePage,
});
