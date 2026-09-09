# جسم الإنسان — Arabic edition

An Arabic-first adaptation of https://github.com/ashemag/human-atlas.

## Run

Node >=22.13 is required (verified with Node 25.1).

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Preview: http://127.0.0.1:3016
On a Mac where Sharp detects an incompatible global libvips, use `SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm ci`.

```sh
npm run check
node scripts/validate-atlas.mjs
node scripts/validate-interactions.mjs
node scripts/validate-arabic.mjs
npm run build
```

## Delivered

- IBM Plex Sans Arabic is bundled locally through Fontsource in weights 400, 500, 600 and 700 (SIL Open Font License).

- All app numbers use Latin digits 0–9, with explicit en-US formatting for grouped counts regardless of browser locale.
- Arabic branding and metadata, document RTL, Base UI direction provider, mirrored panels and responsive touch controls.
- All 15 system labels and overview descriptions in Arabic.
- Arabic/English search with diacritic/tatweel removal, normalized alef, ya and ta marbuta, common aliases, exact-match ranking, and original ID search.
- Bilingual structure details, search results and hover labels. Original English remains the fallback for untranslated concepts.
- Eight introductory lessons with model isolation, and eight multiple-choice questions with answer feedback, score and restart.
- Camera framing accounts for the visible detail or learning panel; Three.js geometry, rendering pipeline, picking and source IDs are preserved.

## Translation coverage

381 of 3,432 source concepts currently resolve to Arabic labels (including left/right variants). This is a curated starter dictionary, not a complete Arabic anatomical nomenclature. Extend `app/arabic.ts` with exact canonical English keys; do not edit `public/models/atlas.json` or translate IDs. Untranslated structures explicitly retain their source name. Detailed Arabic explanations cover nine major structures; other descriptions are labeled as system overviews.

## Validation

Production build and TypeScript check pass. Source validators cover 2,234 meshes, 3,432 concept mappings, all binary buffers, exploded layouts at mobile/desktop aspect ratios and touch interactions. Additional tests cover Arabic normalization, aliases, ranking, IDs and immutable source data.
Browser validation covered desktop rendering, diacritic search, bilingual details, isolation, phone layout at 390×844, lessons, and an entire quiz with one incorrect answer yielding 7/8. No browser console errors were observed during these checks.

The upstream dependency installation reports 11 audit findings (1 low, 2 moderate, 8 high). Dependencies and lockfile have not been upgraded in this localization change. Vite also reports a >500 kB application chunk; the production build succeeds. Dependency remediation and further loading optimization remain follow-up work.

## Attribution

The original MIT `LICENSE`, source README, model files, and dataset attribution are retained. BodyParts3D © The Database Center for Life Science is licensed under Creative Commons Attribution 4.0 International. The in-app source panel links to upstream, data licensing, original geometry and the source publication. Model geometry and concept mappings are unchanged.

## UI localization follow-up

Search controls use Arabic accessible labels and a non-modal popup with the existing Arabic close button. The edition badge, search prompt and attribution prose are localized. Catalogue/model failures show Arabic recovery guidance rather than raw browser errors. English anatomical terminology and source names remain intentional bilingual content.
