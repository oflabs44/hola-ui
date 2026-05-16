# Hola UI — Component Patterns

> Every component in this registry follows these patterns. They are lifted (in
> spirit, not verbatim) from Tailwind UI Catalyst, which is the closest
> reference for the "premium SaaS" aesthetic this design system targets.
> Read this before adding a new component.

The 6 patterns:

1. Layered pseudo-element surfaces
2. CSS-variable variant handoff
3. Translucent overlay borders
4. Asymmetric light/dark physics
5. `data-slot` for compound styling
6. Touch target + forced-colors accessibility shim

Plus: a tooling note on Base UI vs Headless UI selectors.

---

## 1. Layered pseudo-element surfaces

The single biggest "feels expensive" trick. Instead of one element with a
background, border, and shadow, we use three layers:

- The element itself = the **optical border**.
- `::before` = the **surface** (background + shadow-sm).
- `::after` = the **highlight** (1px inset white) + the **hover overlay**.

```tsx
// Solid button — light mode
"border-transparent bg-(--btn-border)",
"before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-md)-1px)] before:bg-(--btn-bg) before:shadow-sm",
"after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-md)-1px)]",
"after:shadow-[inset_0_1px_oklch(1_0_0_/_0.15)]",
"hover:after:bg-(--btn-hover-overlay)",
```

The 1px inset white shadow on `::after` is the recognisable signature — every
Linear / Vercel / Stripe button has it. Skip the layered approach and the
component immediately reads as cheap.

When borrowing this for a new component, the rule of thumb:

- Real `border` = optical/outermost edge.
- `::before` = filled surface + shadow-sm.
- `::after` = subtle highlight + interactive overlay.
- Always `-z-10` on the pseudos so children render above.
- Always subtract 1px from the pseudo's radius (`calc(var(--radius-md)-1px)`)
  so its corners sit inside the real border without rendering artefacts.

## 2. CSS-variable variant handoff

Variants do not repeat layout. They set vars; the base reads them.

```tsx
// base
"bg-(--btn-bg)",
"border-(--btn-border)",
"hover:after:bg-(--btn-hover-overlay)",

// `primary` variant
"[--btn-bg:var(--hola-brand)]",
"[--btn-border:var(--hola-brand)]",
"[--btn-hover-overlay:oklch(1_0_0_/_0.08)]",
```

Why: adding a colour means writing 4 lines, not duplicating the full button
shell. Composable; type-safe via discriminated unions; needs no CVA.

Naming convention: `--<component>-<role>`. For Button: `--btn-bg`,
`--btn-border`, `--btn-hover-overlay`, `--btn-icon`.

## 3. Translucent overlay borders

Borders are never solid colours; they are **translucent overlays of the
foreground colour**:

```tsx
"border-(--hola-fg)/10"   // not  border-zinc-200
```

Why: a translucent border tints whatever sits behind it. Works on any
surface, never visually clashes, and reads as "premium" because high-end
design systems all do it.

Same goes for dividers, table cell borders, focus ring offsets — anything
that's a 1px line.

## 4. Asymmetric light/dark physics

Light mode and dark mode are **different physical metaphors**, not colour
inversions:

- **Light mode**: raised surface. `::before` renders a white background with
  `shadow-sm`; the border tints the edge.
- **Dark mode**: etched surface. `::before` is hidden entirely; the button
  uses its own `bg-(--btn-bg)` plus a `border-white/5` subtle outline; the
  `::after` layer expands by 1px to wrap the whole element.

```tsx
"before:bg-(--btn-bg) before:shadow-sm",
"dark:before:hidden",
"dark:bg-(--btn-bg) dark:border-(--hola-fg)/5",
"dark:after:-inset-px dark:after:rounded-md",
```

The result: dark mode doesn't look like "light mode with colours swapped" —
it looks designed for darkness.

## 5. `data-slot` for compound styling

When a component composes children (icon + label, label + description, etc.),
mark the children with `data-slot` so the parent can style them by role:

```tsx
// child
<svg data-slot="icon" ... />

// parent
"*:data-[slot=icon]:size-4 *:data-[slot=icon]:text-(--btn-icon)"
```

Why: keeps the child API plain (no required wrapper component), keeps styling
declarative, survives reordering, and works identically across Headless UI /
Base UI / Radix because it's just attribute matching.

Reserved slot names so far: `icon`, `control`. Add more as needed; keep them
short and role-based.

## 6. Touch target + forced-colors

Two small accessibility shims most kits skip:

- **Touch target**: pointer-fine media query selects mouse/trackpad users;
  pointer-coarse selects touch. On touch, inflate the hit area to ≥44×44px
  (Apple HIG):

  ```tsx
  <span
    aria-hidden="true"
    className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
  />
  ```

- **Forced-colors**: Windows high-contrast mode strips backgrounds. Ensure
  icon colour falls back to a system colour:

  ```tsx
  "forced-colors:[--btn-icon:ButtonText]"
  ```

Both are 1-line additions, applied to every interactive component.

---

## Base UI vs Headless UI selectors

Catalyst uses Headless UI; we use Base UI. State data-attributes differ.
Mapping table (use this when porting Catalyst-flavoured class strings):

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
| `data-checked`      | `data-checked`         | identical                        |
| `data-enter` etc.   | `data-starting-style`  | rename — Tailwind v4 has native  |
| `data-leave` etc.   | `data-ending-style`    | rename                           |

For native DOM elements (`<button>`, `<input>`), prefer pseudo-classes:
`hover:`, `focus-visible:`, `active:`, `disabled:`. Only reach for
`data-hover:` etc. when the component is wrapped by a Base UI primitive that
sets those attributes.

When in doubt, check Base UI's docs for the specific component — the data
attributes are listed under each primitive's API.

---

## Checklist for a new component

Before opening a PR:

- [ ] Surfaces use the 3-layer pseudo-element pattern (or have a written
      reason for not doing so — `Badge`, `Divider` etc. are flat).
- [ ] Variants only set CSS vars; layout lives in `base`.
- [ ] Borders use `(--hola-fg)/N` translucent overlays.
- [ ] Light and dark are styled separately, not via colour inversion.
- [ ] Children are marked with `data-slot` where the parent needs to style
      them.
- [ ] Touch target shim on every interactive component ≥40×40px.
- [ ] `forced-colors:` fallback on every coloured icon / accent.
- [ ] Base UI selectors used where appropriate (not Headless UI's).
- [ ] Type-safe variant API via discriminated unions, not stringly-typed
      `variant="..."` props (matches Catalyst, beats CVA).
- [ ] Registry item added to `registry.json` with `registryDependencies:
      ["theme"]`.
