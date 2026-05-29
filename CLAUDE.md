# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A React 19 + TypeScript + Vite template for HAYC client websites. This is the **template (upstream) repo** — real sites live in derived repos (e.g., `haycwebsites/dekapus`). Changes to synced files here are automatically PR'd into all derived repos via `sync-template.yml`.

## Commands

```bash
npm run dev            # Vite dev server
npm run build          # TypeScript check + Vite build (NOT for production)
npm run build:full     # Build + export config.json (use for production)
npm run lint           # ESLint
npm run preview        # Preview built app locally
npm run pull-config    # Fetch live config from S3 into src/config.ts
npm run sync-baseline  # Create baseline for pull-config merges
npm run export:config  # Export src/config.ts → dist/hayc/config.json
```

## Architecture

### Config system

All site content lives in [src/config.ts](src/config.ts). This file defines `LocaleString` objects (bilingual `{ el: string; en: string }`) and exports a typed `config` object. In dev, [src/hayc/use-remote-config.ts](src/hayc/use-remote-config.ts) uses this directly; in prod, it fetches `/hayc/config.json` (the exported version).

[src/hayc/config-context.tsx](src/hayc/config-context.tsx) exposes three helpers via `useHayc()`:
- `t(localeString)` — returns text in the current locale
- `img(path)` — returns the image path (use in `src=`)
- `cp(path)` — spreads click-to-edit attributes (see below)

Never hardcode strings in JSX. Every text value must come through `t(config.someField)`.

### Click-to-edit (CMS edit mode)

When the HAYC CMS opens the site with `?hayc-edit=true`, clicking any element wrapped with `{...cp('config.path')}` sends a `HAYC_FIELD_FOCUS` message to the parent iframe, which opens that field in the CMS sidebar. The `path` must exactly match the config key (e.g., `cp('heroConfig.mainTitle')`). All navigation/click events are suppressed in edit mode.

### Routing and layout

`src/App.tsx` wraps everything in `HaycProvider` (from config-context) and `BrowserRouter`. Pages live in `src/pages/`. Locale state (default: `'el'`) is managed in `HaycProvider` and toggled via `setLocale`.

### Synced vs. per-repo files

**Synced from template** (do not customize in derived repos):
- `.github/workflows/`, `eslint.config.js`, `postcss.config.js`, tsconfigs
- Everything in `src/hayc/` (hooks, context)
- `src/components/ContactForm.tsx`, `LanguageSwitcher.tsx`, `NewsletterForm.tsx`
- `.cursor/rules/hayc-config.mdc`

**Per-repo** (customize freely):
- `vite.config.ts`, `tailwind.config.js`, `src/index.css`
- `src/config.ts`, `src/pages/`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`
- `public/` assets, `index.html`

### Adding a new config section

1. Add interfaces and values to [src/config.ts](src/config.ts)
2. Add to `RemoteConfig` interface and `defaultConfig` in [src/hayc/use-remote-config.ts](src/hayc/use-remote-config.ts)
3. Add export logic to [scripts/export-config.ts](scripts/export-config.ts)

### Deployment (derived repos only)

`deploy.yml` runs on push to main: pull-config → build:full → sync-baseline → commit → S3 upload → Cloudflare cache purge. Assets get 1-year immutable cache; `index.html` and `config.json` get short-lived cache.

The template repo itself does not deploy.

## Tailwind / CSS

Semantic color tokens are defined as HSL CSS variables in `src/index.css` (`--primary`, `--secondary`, `--muted`, `--accent`, `--border`, `--radius`, etc.). `tailwind.config.js` maps these to Tailwind utilities. Per-repo theming is done by overriding the CSS variables.

## Path alias

`@/` resolves to `src/` in both TypeScript and Vite.
