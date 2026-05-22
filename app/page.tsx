import Link from "next/link";
import { Button } from "@/registry/hola/ui/button";
import { CopyButton } from "./components/copy-button";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const registryUrl = `https://oflabs44.github.io${basePath}/r/{name}.json`;

function ArrowIcon() {
  return (
    <svg
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

function Block({ children }: { children: string }) {
  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-[6px] border border-(--hola-fg)/10 dark:border-(--hola-fg)/15 bg-(--hola-fg)/[0.03] dark:bg-(--hola-fg)/[0.06] p-4 pr-12 font-mono text-xs leading-relaxed text-fg">
        {children}
      </pre>
      <CopyButton
        text={children}
        label="Copy"
        className="absolute right-2 top-2"
      />
    </div>
  );
}

function StepHeading({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <h3 className="mb-3 flex items-baseline gap-2 text-sm font-medium text-fg">
      <span className="font-mono text-xs text-muted">{index}.</span>
      {children}
    </h3>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-semibold tracking-tight">Hola UI</h1>
        <p className="mt-3 max-w-prose text-lg text-muted">
          A shadcn-compatible component + token registry on Base UI.
          Catalyst-flavoured visuals, shadcn-standard APIs — 35 components ready to drop into any shadcn project.
        </p>
        <div className="mt-6 flex gap-3">
          <Button nativeButton={false} render={<Link href="/components" />}>
            Browse components <ArrowIcon />
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a
                href="https://github.com/oflabs44/hola-ui"
                target="_blank"
                rel="noopener"
              />
            }
          >
            GitHub
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-wider text-muted">
          Setup
        </h2>

        <div className="space-y-8">
          <div>
            <StepHeading index={1}>
              Initialize shadcn on the Base UI style
            </StepHeading>
            <Block>pnpm dlx shadcn@latest init --base base --style vega</Block>
            <p className="mt-2 text-xs text-muted">
              Requires React 19 and Tailwind v4.
            </p>
          </div>

          <div>
            <StepHeading index={2}>
              Add the @hola registry to <code className="font-mono text-xs">components.json</code>
            </StepHeading>
            <Block>
{`{
  "registries": {
    "@hola": "${registryUrl}"
  }
}`}
            </Block>
          </div>

          <div>
            <StepHeading index={3}>
              Apply the theme and utils
            </StepHeading>
            <Block>
{`pnpm dlx shadcn@latest add @hola/theme
pnpm dlx shadcn@latest add @hola/utils`}
            </Block>
            <p className="mt-2 text-xs text-muted">
              Wires <code className="font-mono">--hola-*</code> CSS variables into your{" "}
              <code className="font-mono">globals.css</code> and installs{" "}
              <code className="font-mono">lib/utils.ts</code>. Every other component
              depends on both — shadcn pulls them automatically if missing.
            </p>
          </div>

          <div>
            <StepHeading index={4}>Add components as needed</StepHeading>
            <Block>
{`pnpm dlx shadcn@latest add @hola/button
pnpm dlx shadcn@latest add @hola/dialog
pnpm dlx shadcn@latest add @hola/dropdown-menu
# …`}
            </Block>
            <p className="mt-2 text-xs text-muted">
              Each component lists its npm and registry dependencies — the CLI
              handles both transitively.{" "}
              <Link
                href="/components"
                className="text-(--hola-accent) underline-offset-4 hover:underline"
              >
                Full catalogue →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
          Principles
        </h2>
        <ul className="space-y-3 text-sm text-muted">
          <li>
            <span className="text-fg">Visual inspiration:</span> Tailwind UI
            Catalyst. Layered pseudo-element surfaces, translucent overlay
            borders, asymmetric light/dark physics, tactile press.
          </li>
          <li>
            <span className="text-fg">API:</span> fully shadcn-standard. CVA + cn +
            Base UI primitives + data-slot. Variant names match
            (default/secondary/outline/ghost/destructive/link).
          </li>
          <li>
            <span className="text-fg">Token namespace:</span>{" "}
            <code className="font-mono text-xs">--hola-*</code> — never collides
            with shadcn's own tokens. Layer on top of any base style.
          </li>
        </ul>
      </section>
    </main>
  );
}
