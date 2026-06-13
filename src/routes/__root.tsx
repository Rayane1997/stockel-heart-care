import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LangLink } from "@/components/LangLink";
import { useT } from "@/i18n/use-translation";
import { getLangFromPath, HTML_LANG } from "@/i18n/lang";

function NotFoundComponent() {
  const { t } = useT();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">{t.notFound.eyebrow}</p>
        <h1 className="font-serif text-5xl text-ink">{t.notFound.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">{t.notFound.body}</p>
        <div className="mt-8">
          <LangLink to="/" className="btn-primary">
            {t.notFound.cta}
          </LangLink>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t, lang } = useT();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  const homeHref = lang === "fr" ? "/" : `/${lang}`;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-ink">
          {t.errorBoundary.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {t.errorBoundary.body}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            {t.errorBoundary.retry}
          </button>
          <a href={homeHref} className="btn-outline">
            {t.errorBoundary.home}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Stockel Medical Center" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Stockel Medical Center" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = getLangFromPath(pathname);
  return (
    <html lang={HTML_LANG[lang]}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
