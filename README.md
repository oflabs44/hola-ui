# hola-ui

A personal shadcn-compatible **design-token registry** layered on top of [shadcn's official Base UI components](https://ui.shadcn.com/docs).

It ships tokens only — components come from the official shadcn registry (`--base base`). This repo is both the **registry** (`/r/theme.json`) and a **live showcase** of the tokens.

## Develop

```sh
make install
make dev          # http://localhost:3000
```

## Build

```sh
make build        # builds registry JSON + static site into ./out
make preview      # serve the static export
```

## Use it in a project

```sh
pnpm dlx shadcn@latest init --base base --style vega
```

Then add to `components.json`:

```json
{
  "registries": {
    "@hola": "https://oflabs44.github.io/hola-ui/r/{name}.json"
  }
}
```

Apply the theme:

```sh
pnpm dlx shadcn@latest add @hola/theme
```

Now `shadcn add button dialog ...` produces Base UI components themed with hola's tokens.

## Layout

- `app/` — showcase site (Next.js, static export)
- `registry.json` — registry index
- `registry/hola/` — registry source items (theme + any custom components)
- `public/r/` — built registry payloads (generated, gitignored)
- `.github/workflows/deploy.yml` — builds + publishes to GitHub Pages on push to `main`

## Tokens

Defined twice today (TODO: single source of truth):

1. `app/globals.css` — for the showcase site
2. `registry.json` `cssVars` — for consumers via `shadcn add @hola/theme`

Keep them in sync until they're deduped.
