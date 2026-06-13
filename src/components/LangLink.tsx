import { Link } from "@tanstack/react-router";
import type { ReactNode, MouseEventHandler } from "react";
import { localePath } from "@/i18n/lang";
import { useT } from "@/i18n/use-translation";

interface LangLinkProps {
  to: string;
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: string;
  rel?: string;
  activeProps?: { className?: string };
}

export function LangLink({ to, ...rest }: LangLinkProps) {
  const { lang } = useT();
  const href = localePath(to, lang);
  return (
    <Link {...(rest as Record<string, unknown>)} to={href as never} />
  );
}
