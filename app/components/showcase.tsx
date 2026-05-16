import type { ReactNode } from "react";

export function ShowcasePage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="min-w-0">
      <header className="mb-12 border-b border-(--hola-fg)/[0.06] pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-muted">{description}</p>
      </header>
      <div className="space-y-12">{children}</div>
    </article>
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
