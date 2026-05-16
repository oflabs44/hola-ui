import { Button } from "@/registry/hola/ui/button";

function ArrowIcon() {
  return (
    <svg
      data-slot="icon"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10m-4-4 4 4-4 4" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      data-slot="icon"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
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
      <header className="mb-16">
        <h1 className="text-3xl font-semibold tracking-tight">Hola UI</h1>
        <p className="mt-2 max-w-prose text-muted">
          A design-token + component registry for shadcn (Base UI). Built on Geist, with layered
          pseudo-element components that feel tactile in light mode and etched in dark.
        </p>
      </header>

      <Section title="Install">
        <pre className="overflow-x-auto rounded-lg border border-(--hola-fg)/10 bg-surface p-4 font-mono text-xs leading-relaxed">
{`# 1. init shadcn on the official base ui style
pnpm dlx shadcn@latest init --base base --style vega

# 2. add hola to your components.json
"registries": {
  "@hola": "${registryUrl}"
}

# 3. apply tokens, then pull components
pnpm dlx shadcn@latest add @hola/theme
pnpm dlx shadcn@latest add @hola/button`}
        </pre>
      </Section>

      <Section title="Button — solid colors">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button color="accent">Accent</Button>
          <Button color="danger">Delete</Button>
          <Button>
            Continue <ArrowIcon />
          </Button>
          <Button color="accent">
            <PlusIcon /> New project
          </Button>
        </div>
      </Section>

      <Section title="Button — outline">
        <div className="flex flex-wrap items-center gap-3">
          <Button outline>Cancel</Button>
          <Button outline>
            <PlusIcon /> Add member
          </Button>
          <Button outline disabled>
            Disabled
          </Button>
        </div>
      </Section>

      <Section title="Button — plain">
        <div className="flex flex-wrap items-center gap-3">
          <Button plain>Skip</Button>
          <Button plain>
            Settings <ArrowIcon />
          </Button>
          <Button plain disabled>
            Disabled
          </Button>
        </div>
      </Section>

      <Section title="Button — as link">
        <div className="flex flex-wrap items-center gap-3">
          <Button href="https://github.com/oflabs44/hola-ui">
            Repo <ArrowIcon />
          </Button>
          <Button href="https://ui.shadcn.com" outline>
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
              className="rounded-lg border border-(--hola-fg)/10 bg-surface p-3 text-xs"
            >
              <div
                className="mb-2 h-12 w-full rounded-md border border-(--hola-fg)/10"
                style={{ background: `var(--hola-${name})` }}
              />
              <code className="font-mono text-fg">{name}</code>
              <div className="font-mono text-[10px] text-muted">--hola-{name}</div>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="mt-16 border-t border-(--hola-fg)/10 pt-6 font-mono text-xs text-muted">
        registry payload at <code className="text-fg">{basePath}/r/theme.json</code> +{" "}
        <code className="text-fg">{basePath}/r/button.json</code>
      </footer>
    </main>
  );
}
