.PHONY: help install dev registry build preview clean

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-12s %s\n", $$1, $$2}'

install: ## install deps
	pnpm install

dev: ## run the showcase site locally
	pnpm dev

registry: ## build registry JSON into public/r/
	pnpm registry:build

build: registry ## build static site (registry first, then next export)
	pnpm build

preview: build ## serve the static export from ./out
	pnpm dlx serve out

clean: ## remove build artefacts
	rm -rf .next out public/r node_modules/.cache
