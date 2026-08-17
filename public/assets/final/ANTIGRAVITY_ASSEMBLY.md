# ANTIGRAVITY_ASSEMBLY.md

## NON-NEGOTIABLE GOAL

Reproduce the selected FINAL DARK / FINAL LIGHT reference exactly as a visual composition.

Reference canvas:
- 768 x 1024
- `reference-dark.png`
- `reference-light.png`

This is an assembly task, NOT a UI redesign task.

## SOURCE OF TRUTH

Use only:
1. `reference-dark.png`
2. `reference-light.png`
3. the visual assets in this package
4. the existing project's real data / URLs / SEO metadata

Do not use the current localhost screenshot as the design reference.

## ASSET RULE

If an asset exists in this package, use it.
Do not redraw it with CSS.
Do not replace it with emoji.
Do not replace it with inline SVG.
Do not replace it with a new gradient.

Preserve the asset aspect ratio.
Do not use `object-fit: cover`.
Do not stretch SVG/PNG assets.

## IMPORTANT LIMIT

The reference images are raster master images. Some small UI details are therefore supplied as
exact reference slices rather than invented vector artwork. Treat those as visual-reference
materials and keep semantic text/data in HTML.

Do NOT rasterize SEO-critical text into images.

## SEO / CONTENT RULES

Keep these as real HTML/Astro text, links, and structured data:

Primary semantic topics:
- 机场推荐
- 机场导航
- 机场代理
- 机场评测
- 性价比机场
- 稳定机场

The H1 must remain real text.

Provider names, ratings, ranking, price, protocol, IP type, article counts and all other
project data must remain real data.

Do not change:
- providers.json
- rankings.json
- tests.json
- URLs
- JSON-LD
- title/meta
- canonical URLs

UI changes must not remove or hide semantic content from crawlers.

## DARK/LIGHT

Use independent dark/light visual states.
Do not fake Dark using `filter: invert()` or brightness transformations.

## ASSEMBLY ORDER

1. Header
2. Hero base/background
3. Hero decorative art
4. Rocket/art composite
5. Recommendation card
6. Feature row
7. CTA row
8. Stats
9. TOP 6
10. Bottom utility row

## REFERENCE CHECK

At 768x1024:
- compare against the corresponding reference image
- compare major region boundaries
- compare rocket size/position
- compare nebula/starfield
- compare card dimensions
- compare stats
- compare TOP6
- compare Light and Dark independently

Only after the 768x1024 composition matches should the layout be scaled responsively.

## NEVER CLAIM COMPLETE BASED ON BUILD SUCCESS

`npm run build` only validates compilation.
It is NOT visual acceptance.

Visual acceptance requires a real browser screenshot comparison.
