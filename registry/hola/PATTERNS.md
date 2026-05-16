# Hola UI — Component Patterns

> Every component in this registry follows two layers of rules:
>
> 1. **API**: matches shadcn's official Base UI registry exactly. See the
>    repo-root `CLAUDE.md` for the non-negotiables.
> 2. **Visuals**: lifted from Tailwind UI Catalyst (the techniques, not the
>    class strings). See "Visual patterns" below.
>
> Read both before adding a new component.

---

## API skeleton (every component looks like this)

```tsx
import { X as XPrimitive } from "@base-ui/react/x"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/registry/hola/lib/utils"

const xVariants = cva(
  cn(/* base classes */),
  {
    variants: {
      variant: { default: cn(/* ... */), secondary: cn(/* ... */), /* ... */ },
      size:    { default: "...", sm: "...", lg: "...", icon: "..." },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

function X({
  className,
  variant = "default",
  size = "default",
  ...props
}: XPrimitive.Props & VariantProps<typeof xVariants>) {
  return (
    <XPrimitive
      data-slot="x"
      className={cn(xVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { X, xVariants }
```

Required:

- ✅ Base UI primitive import
- ✅ `cva()` with `variants` and `defaultVariants`
- ✅ `cn()` from `@/registry/hola/lib/utils`
- ✅ `data-slot="<name>"` on the root
- ✅ Function component (no `forwardRef`, no `displayName`)
- ✅ Named exports: `{ X, xVariants }`
- ✅ Props type: `XPrimitive.Props & VariantProps<typeof xVariants>`

Variant names must come from this set unless the upstream component genuinely
has no equivalent:

`default | secondary | outline | ghost | destructive | link`

Size names must come from this set:

`default | sm | lg | icon | icon-sm | icon-lg`

---

## Visual patterns (the Catalyst contribution)

These six techniques are what make hola-ui buttons (and everything downstream)
read as "premium SaaS" instead of generic. They live **inside the CVA variant
strings** — they do not change the API shape.

### 1. Layered pseudo-element surfaces (solid variants only)

For `default` and `destructive` (the solid filled buttons), use three layers:

- `border` = optical outer edge.
- `::before` = inset surface (`bg-(--hola-brand)`) with `shadow-sm`.
- `::after` = inset 1px white highlight + hover overlay layer.

```tsx
"border border-transparent text-(--hola-brand-fg)",
"bg-(--hola-brand)",
"before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]",
"before:bg-(--hola-brand) before:shadow-sm",
"after:absolute after:inset-0 after:-z-10 after:rounded-[inherit]",
"after:shadow-[inset_0_1px_oklch(1_0_0_/_0.15)]",
"hover:after:bg-(--hola-fg)/[0.08] active:after:bg-(--hola-fg)/[0.12]",
```

The 1px white inset highlight on `::after` is the recognisable signature.

For `secondary`, `outline`, `ghost`, `link` — do NOT use layers. They're flat
on purpose; the hierarchy comes from the contrast between solid (layered) and
the rest (flat).

### 2. Translucent overlay borders

Borders are never solid colours; they are translucent overlays of the
foreground:

```tsx
"border-(--hola-fg)/10"   // not  border-zinc-200
```

A translucent border tints whatever sits behind it. Works on any surface,
never clashes, reads as "designed."

Applies to: outlines, dividers, focus offsets, card borders. Default
opacity: `/10` in light mode, `/15` in dark.

### 3. Asymmetric light/dark physics

Light and dark are different physical metaphors, not colour inversions:

- **Light**: raised surface. `::before` renders bg with `shadow-sm`.
- **Dark**: etched surface. `::before` hidden. `::after` expands by 1px to
  wrap the whole element, providing a subtle outline.

```tsx
"dark:before:hidden dark:border-(--hola-fg)/5",
"dark:after:-inset-px dark:after:rounded-[inherit]",
```

Dark mode should look designed for darkness, not "light mode minus colour."

### 4. `data-slot` for cross-component styling

Every component sets `data-slot="<component-name>"` on its root. This lets
parent components style children declaratively:

```tsx
// child component
<ButtonPrimitive data-slot="button" ... />

// parent that contains buttons
"*:data-[slot=button]:rounded-none"   // remove rounding on contained buttons
```

Pick the slot name to match the export name (`button`, `input`, `dialog`,
`tabs-trigger` etc.). Reserved generic slots so far: `icon`, `control`.

### 5. Tactile press

Every interactive element shifts down 1px on press (except those that open a
popup — they'd jitter):

```tsx
"active:not-aria-[haspopup]:translate-y-px"
```

Tiny, tactile, mimics physical buttons.

### 6. `bg-clip-padding` on bordered solids

When a border is translucent and the background is opaque, the bg shows
under the border, muddying the colour. Fix:

```tsx
"bg-clip-padding"
```

Default on every component. Costs nothing.

---

## SVG icon convention

Components that contain SVGs use the convention:

```tsx
"[&_svg]:pointer-events-none [&_svg]:shrink-0",
"[&_svg:not([class*='size-'])]:size-4"
```

- Disables pointer events on the SVG (parent handles clicks)
- Prevents shrinking in flex layouts
- Defaults to `size-4` unless the consumer explicitly passes a `size-N` class

Match shadcn exactly. Don't add `data-slot="icon"` unless the parent needs to
target it specifically.

---

## Base UI primitive gotchas

### `render` prop polymorphism

shadcn-style `asChild` is replaced by Base UI's `render` prop. The primitive
clones the element and merges props:

```tsx
<Button render={<a href="/foo" />}>Link</Button>
```

**When `render` produces a non-`<button>`**, you MUST also pass
`nativeButton={false}`:

```tsx
<Button nativeButton={false} render={<a href="/foo" />}>Link</Button>
```

Otherwise Base UI warns at runtime and accessibility / keyboard handling
breaks. Document this in the component's example block.

### Portals + stacking context

Base UI centralises portals (no per-component `<Portal>`). The consumer's
root needs `isolation: isolate` for portals to stack correctly. The hola
theme sets this in `:root` already.

### Data-attribute mapping (Headless UI → Base UI)

Catalyst class strings use Headless UI's `data-hover`, `data-focus`,
`data-active`. Base UI uses different names. When porting:

| Headless UI         | Base UI                | Notes                            |
| ------------------- | ---------------------- | -------------------------------- |
| `data-hover`        | `data-hover`           | identical                        |
| `data-focus`        | `data-focused`         | rename                           |
| `data-active`       | `data-pressed`         | rename                           |
| `data-disabled`     | `data-disabled`        | identical                        |
| `data-open`         | `data-open`            | identical                        |
| `data-closed`       | `data-closed`          | identical                        |
| `data-selected`     | `data-selected`        | identical                        |
| `data-invalid`      | `data-invalid`         | identical                        |
| `data-enter` etc.   | `data-starting-style`  | use Tailwind v4 native           |
| `data-leave` etc.   | `data-ending-style`    | use Tailwind v4 native           |

For native DOM elements (`<button>`, `<input>`), prefer pseudo-classes:
`hover:`, `focus-visible:`, `active:`, `disabled:`. Reach for `data-hover:`
etc. only when the component is wrapped by a Base UI primitive that sets
those attributes.

---

## Checklist for a new component

Before opening a PR:

API:
- [ ] Fetched shadcn's official Base UI source for the same component as
      reference (`apps/v4/registry/bases/base/ui/<name>.tsx`).
- [ ] Uses `cva()` with `variants` + `defaultVariants`.
- [ ] Uses `cn()` from `@/registry/hola/lib/utils`.
- [ ] Imports the Base UI primitive as `<X>Primitive`.
- [ ] Props typed as `<X>Primitive.Props & VariantProps<typeof xVariants>`.
- [ ] `data-slot="<name>"` on root.
- [ ] No `forwardRef`, no `displayName`, no `'use client'` unless required.
- [ ] Named exports only: `{ X, xVariants }`.
- [ ] Variant names from canonical set (default/secondary/outline/ghost/
      destructive/link).
- [ ] Size names from canonical set (default/sm/lg/icon/icon-sm/icon-lg).

Visuals:
- [ ] Solid variants use the 3-layer pseudo-element pattern.
- [ ] Non-solid variants are flat (no layers).
- [ ] Borders use `(--hola-fg)/N` translucent overlays.
- [ ] Light and dark have separate physics (not colour inversion).
- [ ] `bg-clip-padding` on every component with a bg + border.
- [ ] `active:not-aria-[haspopup]:translate-y-px` for tactile press.
- [ ] SVG sizing convention applied if the component contains icons.

Registry:
- [ ] Item added to `registry.json` with `type: "registry:ui"` (or `lib`
      / `hook`).
- [ ] `registryDependencies: ["theme", "utils"]` (always include both).
- [ ] `dependencies` lists `@base-ui/react`, `class-variance-authority` as
      needed.
- [ ] `files[].target` points to `components/ui/<name>.tsx` (or
      `lib/<name>.ts` etc.).
