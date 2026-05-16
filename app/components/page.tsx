import Link from "next/link";

const components = [
  { href: "/components/button", name: "Button", description: "Trigger actions or events. 6 variants, 6 sizes, polymorphic via render prop." },
  { href: "/components/badge", name: "Badge", description: "Status pills and labels. 6 structural variants × 18 Catalyst colours." },
  { href: "/components/input", name: "Input", description: "Text input. Asymmetric light/dark surfaces, focus + invalid states." },
];

export default function ComponentsIndex() {
  return (
    <article>
      <header className="mb-12 border-b border-(--hola-fg)/[0.06] pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Components</h1>
        <p className="mt-2 text-muted">
          Every component matches shadcn&apos;s API exactly. Visual treatment lifted from Catalyst.
        </p>
      </header>

      <ul className="grid gap-3 sm:grid-cols-2">
        {components.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="block rounded-[8px] border border-(--hola-fg)/10 bg-surface p-5 transition-colors hover:bg-(--hola-fg)/[0.04]"
            >
              <h2 className="font-medium text-fg">{c.name}</h2>
              <p className="mt-1 text-sm text-muted">{c.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
