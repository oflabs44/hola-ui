import Link from "next/link";

type Item = { slug: string; name: string; description: string };

const clusters: { label: string; items: Item[] }[] = [
  {
    label: "Forms",
    items: [
      { slug: "button", name: "Button", description: "Trigger actions or events. 6 variants, 6 sizes, polymorphic via render prop." },
      { slug: "input", name: "Input", description: "Text input. Asymmetric light/dark surfaces, focus + invalid states." },
      { slug: "input-group", name: "Input Group", description: "Wrapper for inputs with icons, addons, buttons. Inline + block alignment." },
      { slug: "label", name: "Label", description: "Accessible form label with disabled-state propagation." },
      { slug: "field", name: "Field", description: "Compose Label + Input + Description + Error. Vertical / horizontal / responsive." },
      { slug: "textarea", name: "Textarea", description: "Multi-line text input. Auto-grow with field-sizing-content." },
      { slug: "checkbox", name: "Checkbox", description: "Checkbox with checked / indeterminate states." },
      { slug: "switch", name: "Switch", description: "Toggle switch. Sizes: sm, default." },
      { slug: "radio-group", name: "Radio Group", description: "Single-selection group with accent border + inner dot." },
      { slug: "select", name: "Select", description: "Dropdown select with portal-rendered content, groups, separators." },
      { slug: "slider", name: "Slider", description: "Range input. Single or multi-thumb range, horizontal or vertical." },
      { slug: "toggle", name: "Toggle", description: "Single on/off button (data-pressed). Default + outline variants, 3 sizes." },
      { slug: "toggle-group", name: "Toggle Group", description: "Single or multiple selection. spacing=0 → segmented control." },
    ],
  },
  {
    label: "Layout",
    items: [
      { slug: "separator", name: "Separator", description: "Horizontal or vertical divider with soft variant." },
      { slug: "avatar", name: "Avatar", description: "Image avatar with fallback. Plus Badge, Group, GroupCount." },
    ],
  },
  {
    label: "Data",
    items: [
      { slug: "badge", name: "Badge", description: "Status pills and labels. 6 structural variants × 18 Catalyst colours." },
      { slug: "table", name: "Table", description: "Styled native HTML table with translucent row borders, hover, and selected states." },
      { slug: "scroll-area", name: "Scroll Area", description: "Custom scrollbar overlay with edge-fade — content dissolves into the surface as it scrolls out of view." },
    ],
  },
  {
    label: "Overlays",
    items: [
      { slug: "dialog", name: "Dialog", description: "Modal layer for focused tasks. Sizes sm/default/lg/xl, dismissable." },
      { slug: "alert-dialog", name: "Alert Dialog", description: "Interruptive confirmation modal — no backdrop dismiss, explicit Action/Cancel only." },
      { slug: "sheet", name: "Sheet", description: "Edge-anchored panel. Slides in from top / right (default) / bottom / left." },
      { slug: "tooltip", name: "Tooltip", description: "Hover/focus hint anchored to a trigger. Inverted surface, arrow tracks the side." },
      { slug: "popover", name: "Popover", description: "Click-anchored interactive panel — content can hold forms, links, buttons." },
      { slug: "hover-card", name: "Hover Card", description: "Rich preview on hover/focus. For profile cards, link previews, inline expansions." },
      { slug: "dropdown-menu", name: "Dropdown Menu", description: "Items, shortcuts, checkbox/radio items, submenus, destructive variant." },
      { slug: "context-menu", name: "Context Menu", description: "Right-click variant of Dropdown Menu — same item types, opens at the pointer." },
      { slug: "menubar", name: "Menubar", description: "Horizontal application menu (File / Edit / View). Siblings share keyboard nav." },
    ],
  },
  {
    label: "Disclosure",
    items: [
      { slug: "accordion", name: "Accordion", description: "Stacked expandable sections. Single-open default, multiple-open via prop." },
      { slug: "collapsible", name: "Collapsible", description: "Behavioural primitive — Root, Trigger, Panel. Ships unstyled." },
      { slug: "tabs", name: "Tabs", description: "Switchable panels with pill (default) or underline list variants." },
    ],
  },
  {
    label: "Feedback",
    items: [
      { slug: "alert", name: "Alert", description: "Inline static notification. Default and destructive variants, optional leading icon." },
      { slug: "progress", name: "Progress", description: "Determinate (0–100) or indeterminate. Optional Label + Value parts." },
    ],
  },
  {
    label: "Navigation",
    items: [
      { slug: "breadcrumb", name: "Breadcrumb", description: "Hierarchical trail. Link + Page + Separator + Ellipsis, render-prop polymorphic." },
      { slug: "pagination", name: "Pagination", description: "Page nav built on Button. Active state via aria-current=page." },
      { slug: "navigation-menu", name: "Navigation Menu", description: "Top-level site nav with dropdown panels and inter-trigger animation." },
    ],
  },
];

export default function ComponentsIndex() {
  return (
    <article>
      <header className="mb-12 border-b border-(--hola-fg)/[0.06] pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Components</h1>
        <p className="mt-2 text-muted">
          Every component matches shadcn&apos;s API exactly — variants, prop shapes, polymorphism via Base UI&apos;s <code className="font-mono text-xs">render</code> prop. Visual treatment lifted from Catalyst.
        </p>
        <p className="mt-3 text-sm text-muted">
          Install any of them in your shadcn project with <code className="rounded bg-(--hola-fg)/[0.06] px-1 py-0.5 font-mono text-xs">pnpm dlx shadcn@latest add @hola/&lt;name&gt;</code>. The CLI pulls registry dependencies (theme, utils, and any wrapped components) automatically.
        </p>
      </header>

      <div className="space-y-12">
        {clusters.map((cluster) => (
          <section key={cluster.label}>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
              {cluster.label}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {cluster.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/components/${item.slug}`}
                    className="block h-full rounded-[8px] border border-(--hola-fg)/10 bg-surface p-4 transition-colors hover:bg-(--hola-fg)/[0.04]"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-medium text-fg">{item.name}</h3>
                      <code className="font-mono text-[10px] text-muted">@hola/{item.slug}</code>
                    </div>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
