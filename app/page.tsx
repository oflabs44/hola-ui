import { Button } from "@/registry/hola/ui/button";
import { ThemeToggle } from "./theme-toggle";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10m-4-4 4 4-4 4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const registryUrl = `https://oflabs44.github.io${basePath}/r/{name}.json`;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-16 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Hola UI</h1>
          <p className="mt-2 max-w-prose text-muted">
            Design tokens + components for shadcn (Base UI). Catalyst-flavoured visuals on shadcn-standard component APIs (CVA + cn + Base UI primitives).
          </p>
        </div>
        <ThemeToggle />
      </header>

      <Section title="Install">
        <pre className="overflow-x-auto rounded-[6px] border border-(--hola-fg)/10 bg-surface p-4 font-mono text-xs leading-relaxed">
{`# 1. init shadcn on the official base ui style
pnpm dlx shadcn@latest init --base base --style vega

# 2. add hola to components.json
"registries": {
  "@hola": "${registryUrl}"
}

# 3. apply tokens, pull components
pnpm dlx shadcn@latest add @hola/theme
pnpm dlx shadcn@latest add @hola/button`}
        </pre>
      </Section>

      <Section title="Button — variants">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link">Link</Button>
        </div>
      </Section>

      <Section title="Button — sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><PlusIcon /></Button>
          <Button size="icon-sm"><PlusIcon /></Button>
          <Button size="icon-lg"><PlusIcon /></Button>
        </div>
      </Section>

      <Section title="Button — with icons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Continue <ArrowIcon /></Button>
          <Button variant="secondary"><PlusIcon /> New project</Button>
          <Button variant="outline"><PlusIcon /> Add member</Button>
          <Button variant="ghost">Settings <ArrowIcon /></Button>
        </div>
      </Section>

      <Section title="Button — states">
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled</Button>
          <Button variant="destructive" disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Button — polymorphic (Base UI render)">
        <div className="flex flex-wrap items-center gap-3">
          <Button nativeButton={false} render={<a href="https://github.com/oflabs44/hola-ui" />}>
            Repo <ArrowIcon />
          </Button>
          <Button variant="outline" nativeButton={false} render={<a href="https://ui.shadcn.com" />}>
            shadcn docs
          </Button>
        </div>
      </Section>

      <Section title="Tokens">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            "bg",
            "surface",
            "surface-elevated",
            "fg",
            "muted",
            "brand",
            "accent",
            "danger",
          ].map((name) => (
            <li
              key={name}
              className="rounded-[6px] border border-(--hola-fg)/10 bg-surface p-3 text-xs"
            >
              <div
                className="mb-2 h-12 w-full rounded-[5px] border border-(--hola-fg)/10"
                style={{ background: `var(--hola-${name})` }}
              />
              <code className="font-mono text-fg">{name}</code>
              <div className="font-mono text-[10px] text-muted">--hola-{name}</div>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="mt-16 border-t border-(--hola-fg)/10 pt-6 font-mono text-xs text-muted">
        registry payloads at <code className="text-fg">{basePath}/r/{`{theme,utils,button}`}.json</code>
      </footer>
    </main>
  );
}
