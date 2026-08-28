# Frontend Assignment

A responsive landing page built with **React + Vite + Mantine UI**, matching the
provided Figma design across desktop, tablet and mobile.

## Running the project

```bash
npm install && npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

To produce a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  theme.js                    Mantine theme — single source of truth for colours,
                              fonts, the type ramp, radii and shadows (all taken
                              from the Figma component styles)
  App.jsx                     Assembles all sections
  context/
    ContentContext.jsx        Small React context + useReducer holding the
                              editable collections (packages, team) and the
                              "edit mode" flag
  data/                       Seed content — edit these arrays to add / remove /
    packages.js                 update items with no component changes
    team.js
    footerLinks.js
  assets/
    hero.png                  Hero illustration (exported from Figma)
    team/                     Team member photos (exported from Figma)
    icons/                    Feature + social SVG glyphs (exported from Figma)
  components/
    layout/                   Navbar, Footer
    sections/                 Hero, PackagesSection, TeamSection, NewsletterSection
    common/                   FeatureCard, TeamCard, SectionHeader,
                              HoverArrowLink, EditModeToggle
```

## Dynamic content

Every repeating block (feature cards, team members) renders from an array in
`src/data/`. There are two ways to change them:

1. **Edit the seed data** — add, remove or edit an entry in `src/data/*.js`;
   the sections re-render from it, no JSX changes needed.
2. **At runtime** — click **“Edit content”** (bottom-right). While on, the
   Packages and Team sections show add / remove controls. State lives in
   `src/context/ContentContext.jsx` (plain context + `useReducer`, no external
   state library). Off by default, so the page matches the design as-is.

## Design tokens (from Figma)

| Token | Value | Use |
| --- | --- | --- |
| Primary | `#96BB7C` | Buttons, icons, links, accents |
| Heading text | `#252B42` | Headings |
| Body text | `#737373` | Paragraph copy |
| Accent bar | `#E74040` | Short underlines under section titles |
| Section tint | `#FFF2F3` | Hero + newsletter backgrounds |
| Footer bar | `#FAFAFA` | Footer lower strip |
| Font | Montserrat (400, 700) | Everything |
| Radii | 5px / 10px / 20px | Controls / icon tiles / team cards |

Type ramp (font-size / line-height): H1 58/80, H2 40/50, H3 24/32,
hero sub 20/30, card + footer headings 16/24, body 14/20, small 12/16.

## Notes / assumptions

- **Hero decorations** ship as one exported PNG (photo + colour blobs +
  squiggles composited) rather than reconstructed vectors.
- **Feature-card and social icons** are the exact SVGs exported from the design
  (`src/assets/icons`). Footer contact icons use Tabler equivalents
  (`IconPhone` / `IconMapPin` / `IconSend`) as the design has no custom assets
  for them.
- **Newsletter submit** has no backend in scope — validation (required + email
  format, error shown under the field per the Figma annotation) runs, then a
  local success message is shown.
- The Packages section title reads **“Approdable Packages”** to match the Figma
  text exactly (the design contains that spelling).
- Tablet / mobile layouts are derived from the single 1440px desktop frame the
  Figma provides, using Mantine's responsive style props and breakpoints.

## Tech constraints followed

- Mantine UI components for all UI elements
- No Tailwind / styled-components / other CSS libraries
- Styling via Mantine style props + theming; the only custom CSS is
  `HoverArrowLink.module.css` for the `:hover` arrow-shift micro-interaction the
  design annotation calls for (Mantine style props can't express a `:hover`
  transform)
