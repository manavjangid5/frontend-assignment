# Frontend Assignment

A responsive landing page built with **React + Vite + Mantine UI**, matching the provided Figma design.

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
  theme.js                    Mantine theme — colors, fonts, component defaults
  App.jsx                     Assembles all sections
  data/                       All repeating content lives here — edit these
    packages.js                 to add/remove/update items, no component
    team.js                     changes needed
    footerLinks.js
  components/
    layout/                   Navbar, Footer
    sections/                 Hero, PackagesSection, TeamSection, NewsletterSection
    common/                   FeatureCard, TeamCard, HoverArrowLink (reusable pieces)
```

Every repeating block (feature cards, team members, footer columns) renders from
an array in `src/data/`. Adding, removing, or editing an item is a one-line change
to that file — no JSX edits required.

## Notes / assumptions made building this

A few things weren't fully resolvable from the screenshots alone — flagging them
rather than silently guessing:

- **Brand green color**: the Figma color-palette export showed `396BA7B`, which
  is 7 characters (invalid hex). Interpreted as `#96BA7B` — confirm against
  Figma's color picker and update the single source of truth in `src/theme.js`
  if different.
- **Fonts**: the design doesn't specify typefaces anywhere I could see. Used
  Poppins (headings) + Inter (body) as a reasonable modern pairing — swap the
  Google Fonts link in `index.html` and `fontFamily` values in `theme.js` if
  the real assets/brand guide specify something else.
- **Hero image & decorative shapes**: the hero photo is a stock placeholder
  (Unsplash), and the background blob/squiggle decorations from the Figma
  hero weren't reproduced as custom SVGs. Swap in the real image and any
  decorative assets from the Figma "Assets" Google Drive link.
- **Team photos**: placeholder avatars (pravatar.cc), same reason as above.
- **Newsletter submit**: no backend was specified, so submitting shows a
  success message locally rather than calling an API. Validation (required +
  email format) runs before that, with the error shown under the field per
  the Figma annotation.
- **Card count**: only two feature cards ("Certified Teacher", "Expert
  Instruction") appeared in the full-page export — built as-is.

## Tech constraints followed

- Mantine UI components for all UI elements
- No Tailwind / styled-components / other CSS frameworks
- One CSS module (`HoverArrowLink.module.css`) for the hover micro-interaction
  the design calls for (arrow shifts 5px right on hover) — Mantine's style
  props don't cover `:hover` pseudo-class transforms, so this is the one
  "edge case not possible with Mantine" the assignment doc allows for
