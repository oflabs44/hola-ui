import Link from "next/link";

const components = [
  { href: "/components/button", name: "Button", description: "Trigger actions or events. 6 variants, 6 sizes, polymorphic via render prop." },
  { href: "/components/badge", name: "Badge", description: "Status pills and labels. 6 structural variants × 18 Catalyst colours." },
  { href: "/components/input", name: "Input", description: "Text input. Asymmetric light/dark surfaces, focus + invalid states." },
  { href: "/components/input-group", name: "Input Group", description: "Wrapper for inputs with icons, addons, buttons. Inline + block alignment." },
  { href: "/components/label", name: "Label", description: "Accessible form label with disabled-state propagation." },
  { href: "/components/field", name: "Field", description: "Compose Label + Input + Description + Error. Vertical / horizontal / responsive orientation." },
  { href: "/components/textarea", name: "Textarea", description: "Multi-line text input. Auto-grow with field-sizing-content." },
  { href: "/components/checkbox", name: "Checkbox", description: "Checkbox with checked / indeterminate states." },
  { href: "/components/switch", name: "Switch", description: "Toggle switch. Sizes: sm, default." },
  { href: "/components/radio-group", name: "Radio Group", description: "Single-selection group with accent border + inner dot." },
  { href: "/components/select", name: "Select", description: "Dropdown select with portal-rendered content, groups, separators." },
  { href: "/components/slider", name: "Slider", description: "Range input. Single thumb or multi-thumb range, horizontal or vertical." },
  { href: "/components/toggle", name: "Toggle", description: "Single on/off button (data-pressed). Default + outline variants, 3 sizes." },
  { href: "/components/toggle-group", name: "Toggle Group", description: "Single or multiple selection. spacing=0 → segmented control." },
  { href: "/components/card", name: "Card", description: "Bordered container. Header / Title / Description / Action / Content / Footer." },
  { href: "/components/separator", name: "Separator", description: "Horizontal or vertical divider with soft variant." },
  { href: "/components/avatar", name: "Avatar", description: "Image avatar with fallback. Plus Badge, Group, GroupCount." },
  { href: "/components/skeleton", name: "Skeleton", description: "Animated loading placeholder." },
  { href: "/components/aspect-ratio", name: "Aspect Ratio", description: "Fixed-ratio container." },
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
