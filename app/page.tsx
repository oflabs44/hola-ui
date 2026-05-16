const tokens = [
  { name: "bg", varName: "--hola-bg" },
  { name: "fg", varName: "--hola-fg" },
  { name: "muted", varName: "--hola-muted" },
  { name: "surface", varName: "--hola-surface" },
  { name: "border", varName: "--hola-border" },
  { name: "brand", varName: "--hola-brand" },
  { name: "brand-fg", varName: "--hola-brand-fg" },
  { name: "accent", varName: "--hola-accent" },
] as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const registryUrl = `https://oflabs44.github.io${basePath}/r/{name}.json`;

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight">Hola UI</h1>
        <p className="mt-2 text-muted">
          A design-token registry for shadcn (Base UI). Layer on top of the official base.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">Install</h2>
        <pre className="overflow-x-auto rounded-(--radius) border border-border bg-surface p-4 text-sm">
{`# 1. init a shadcn project on Base UI
pnpm dlx shadcn@latest init --base base --style vega

# 2. add hola-ui as a registry in components.json
"registries": {
  "@hola": "${registryUrl}"
}

# 3. apply the theme
pnpm dlx shadcn@latest add @hola/theme`}
        </pre>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">Tokens</h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tokens.map((t) => (
            <li
              key={t.name}
              className="rounded-(--radius) border border-border bg-surface p-3 text-xs"
            >
              <div
                className="mb-2 h-12 w-full rounded-md border border-border"
                style={{ background: `var(${t.varName})` }}
              />
              <code className="text-fg">{t.name}</code>
              <div className="text-muted">{t.varName}</div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 text-xs text-muted">
        Registry payload at{" "}
        <code className="text-fg">{basePath}/r/theme.json</code>
      </footer>
    </main>
  );
}
