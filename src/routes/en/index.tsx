import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";
import { buildPageHead } from "@/i18n/route-meta";

export const Route = createFileRoute("/en/")({
  head: () => buildPageHead("home", "en"),
  component: HomePage,
});
