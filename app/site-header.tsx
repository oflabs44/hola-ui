import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--hola-fg)/[0.06] bg-bg/80 backdrop-blur-xs">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight transition-colors hover:text-fg/80"
        >
          hola/ui
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/components/button"
            className="text-muted transition-colors hover:text-fg"
          >
            Components
          </Link>
          <a
            href="https://github.com/oflabs44/hola-ui"
            target="_blank"
            rel="noopener"
            className="text-muted transition-colors hover:text-fg"
          >
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
