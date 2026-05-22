import type { ReactNode } from "react";
import Link from "next/link";
import { CopyButton } from "./copy-button";

export function ShowcasePage({
  title,
  description,
  slug,
  children,
}: {
  title: string;
  description: string;
  /** Override the registry slug. Defaults to lowercased + hyphenated `title`. */
  slug?: string;
  children: ReactNode;
}) {
  const registrySlug = slug ?? title.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="min-w-0">
      <header className="mb-8 border-b border-(--hola-fg)/[0.06] pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-muted">{description}</p>
      </header>
      <InstallSnippet slug={registrySlug} />
      <div className="space-y-12">{children}</div>
    </article>
  );
}

function InstallSnippet({ slug }: { slug: string }) {
  const command = `pnpm dlx shadcn@latest add @hola/${slug}`;

  return (
    <section className="mb-12">
      <h2 className="mb-3 font-mono text-[10px] font-medium uppercase tracking-wider text-muted">
        Install
      </h2>
      <div className="relative">
        <pre className="overflow-x-auto rounded-[6px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15 bg-(--hola-fg)/[0.03] dark:bg-(--hola-fg)/[0.06] px-4 py-3 pr-12 font-mono text-xs text-fg">
          {command}
        </pre>
        <CopyButton
          text={command}
          label="Copy install command"
          className="absolute right-1.5 top-1.5"
        />
      </div>
      <p className="mt-2 text-xs text-muted">
        Theme + utils (and any wrapped components) install transitively. Make sure
        the <code className="font-mono">@hola</code> registry is configured in your{" "}
        <code className="font-mono">components.json</code> —{" "}
        <Link
          href="/"
          className="text-(--hola-accent) underline-offset-4 hover:underline"
        >
          setup instructions
        </Link>
        .
      </p>
    </section>
  );
}

export function Showcase({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-sm font-medium text-fg">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-muted">{description}</p>
        ) : null}
      </div>
      <div className="rounded-[8px] border border-(--hola-fg)/10 bg-surface p-8">
        <div className="flex flex-wrap items-center gap-3">{children}</div>
      </div>
    </section>
  );
}
