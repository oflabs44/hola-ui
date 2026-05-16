import Link from "next/link";
import { Button } from "@/registry/hola/ui/button";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const registryUrl = `https://oflabs44.github.io${basePath}/r/{name}.json`;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10m-4-4 4 4-4 4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-semibold tracking-tight">Hola UI</h1>
        <p className="mt-3 max-w-prose text-lg text-muted">
          A personal design-token + component registry for shadcn (Base UI). Catalyst-flavoured visuals on shadcn-standard component APIs.
        </p>
        <div className="mt-6 flex gap-3">
          <Button nativeButton={false} render={<Link href="/components/button" />}>
            Browse components <ArrowIcon />
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href="https://github.com/oflabs44/hola-ui" target="_blank" rel="noopener" />}
          >
            GitHub
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          Install
        </h2>
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
      </section>

      <section className="mb-16">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          Principles
        </h2>
        <ul className="space-y-3 text-sm text-muted">
          <li>
            <span className="text-fg">Visual inspiration:</span> Tailwind UI Catalyst. Layered pseudo-element surfaces, translucent overlay borders, asymmetric light/dark physics, tactile press.
          </li>
          <li>
            <span className="text-fg">API:</span> fully shadcn-standard. CVA + cn + Base UI primitives + data-slot. Variant names match (default/secondary/outline/ghost/destructive/link).
          </li>
          <li>
            <span className="text-fg">Token namespace:</span> <code className="font-mono text-xs">--hola-*</code> — never collides with shadcn's own tokens. Layer on top of any base style.
          </li>
        </ul>
      </section>
    </main>
  );
}
