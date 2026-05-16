# Working on hola-ui

> Project-specific rules. Apply on top of `~/CLAUDE.md` and `~/code/CLAUDE.md`.
> When this file and those conflict, this file wins.

## Core principle

**Visual inspiration = Tailwind UI Catalyst. API = fully shadcn-compliant.**

These are two distinct layers. Do not mix them.

- The *look and feel* of components — borders, shadows, surface treatments,
  hover states, typography rhythm, density — is lifted from Catalyst.
  See `registry/hola/PATTERNS.md` for the specific techniques.
- The *API, structure, file layout, naming, and ergonomics* are whatever
  shadcn's official Base UI registry does. We are a citizen of the shadcn
  ecosystem, not a fork of it.

When in doubt, **do what shadcn does**, even if Catalyst does it differently.

## Concrete rules (non-negotiable)

1. **Variants via `cva()`**, not discriminated unions, not boolean props.
   Use `VariantProps<typeof xxxVariants>`. Shape: `{ variants: { variant, size }, defaultVariants: { variant: "default", size: "default" } }`.
2. **Variant names match shadcn**: `default | secondary | outline | ghost | destructive | link`. Never `primary`, `accent`, `muted`, `plain`, `danger`.
3. **Size names match shadcn**: `default | sm | lg | icon` (and `xs`, `icon-sm`, etc. as the official registry adds them).
4. **`cn()` helper from `lib/utils`** for every class composition. Never raw `clsx` in components. The util is `twMerge(clsx(inputs))`. Ship it as `registry:lib` so consumers get it.
5. **Base UI primitives wherever shadcn uses them.** Import as `import { X as XPrimitive } from "@base-ui/react/x"`. Forward props via `XPrimitive.Props`. Polymorphism comes from the primitive's `render` prop — do not add a separate `asChild`.
6. **`data-slot="<component-name>"` on the root element.** Enables cross-component styling via `*:data-[slot=...]`.
7. **No `forwardRef`.** React 19 auto-forwards refs; shadcn dropped it in v4.
8. **No `displayName`.** Not needed without forwardRef.
9. **No `'use client'`** unless the component genuinely uses client-only hooks (useState, useEffect, refs). Server components by default.
10. **File location**: registry source at `registry/hola/ui/<name>.tsx`, target on install is `components/ui/<name>.tsx`. Lib source at `registry/hola/lib/utils.ts`, target `lib/utils.ts`.

## Where Catalyst's contribution lives

Catalyst's value to us is **inside the class strings** that CVA composes. The
pseudo-element layering, the CSS-variable variant handoff (`--btn-bg` etc.),
the translucent overlay borders, the 1px white inner highlight, the
asymmetric light/dark physics — all of those go *inside* the strings that
CVA returns for each variant. They do not change the API shape.

If a Catalyst pattern can be expressed via CVA + cn + Base UI primitives, use
it. If it can only be expressed by breaking shadcn convention, drop it.

## Tokens

Defined in `app/globals.css` AND mirrored in `registry.json`'s `cssVars`.
Keep them in lockstep until a build script derives one from the other.

Token names use `--hola-*` prefix (not raw `--primary` etc.) so they never
collide with shadcn's own tokens when both are present in a consumer
project. This is intentional — it lets the consumer use shadcn's official
Base UI components alongside hola-ui components without var conflicts.

## When you find yourself wanting to diverge from shadcn

Ask: is the divergence in the *visual* layer or the *API* layer?

- Visual layer (class strings, CSS variables, layering) → fine, lift from
  Catalyst freely.
- API layer (prop names, variant taxonomy, file shape, utilities) → no.
  Match shadcn exactly. If shadcn doesn't have a primitive for what you
  need, *that* is the time to author a new convention — but copy shadcn's
  style of authoring (CVA, cn, data-slot, Base UI primitive).

## Verification before any new component lands

Before opening a PR for a new component:

1. Fetch the official shadcn source for the same component from
   `apps/v4/registry/bases/base/ui/<name>.tsx` on `github.com/shadcn-ui/ui`.
2. Match its structural skeleton (imports, CVA call, function shape, export).
3. Replace the class strings with Catalyst-style visuals using our tokens.
4. Run through the checklist in `registry/hola/PATTERNS.md`.

## Hosting + git reminders (project-specific)

- Repo: `git@github-personal:oflabs44/hola-ui` (personal SSH alias per
  `~/CLAUDE.md` §7).
- Commit email auto-routes via `includeIf` to `femi.dayo@pm.me`.
- Deployed to GitHub Pages via Actions on push to `main` —
  https://oflabs44.github.io/hola-ui/.
- Registry payloads live at `/r/<name>.json` on the same domain.
