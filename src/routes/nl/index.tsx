import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { buildPageHead } from "@/i18n/route-meta";

export const Route = createFileRoute("/nl/")({
  head: () => buildPageHead("home", "nl"),
  component: HomePage,
});
