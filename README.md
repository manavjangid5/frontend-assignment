# Frontend Assignment

A responsive marketing landing page built with React, Vite and Mantine UI. The
layout follows the provided Figma design across desktop, tablet and mobile.

## Getting started

```bash
npm install && npm run dev
```

The `&&` chaining works in PowerShell 7+, Git Bash, cmd.exe and macOS/Linux shells; on Windows PowerShell 5.x run the two commands on separate lines.

Then open the URL that Vite prints (defaults to `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Tech stack

- **React 18** + **Vite 5**
- **Mantine 7** - `@mantine/core`, `@mantine/hooks`, `@mantine/form`,
  `@mantine/carousel`
- **@tabler/icons-react** for a few utility icons
- **Zod** + **mantine-form-zod-resolver** for form validation

No CSS framework is used. Styling is done with Mantine's style props and theme;
the only hand-written CSS is one CSS module for a `:hover` transition (see
"Constraints" below).

## Project structure

```
src/
  main.jsx                  App bootstrap + MantineProvider + ContentProvider
  App.jsx                   Assembles the page sections
  theme.js                  Mantine theme: colours, fonts, type scale, radii,
                            shadows - the single place these values are defined
  context/
    ContentContext.jsx      Context + useReducer holding the editable
                            collections and the "edit mode" flag
  schemas/
    newsletterSchema.js     Zod schema for the newsletter form
  data/                     Seed content (packages, team members, footer links)
  assets/                   Hero illustration, team photos, SVG icons
  components/
    layout/                 Navbar, Footer
    sections/               Hero, PackagesSection, TeamSection, NewsletterSection
    common/                 FeatureCard, TeamCard, SectionHeader,
                            HoverArrowLink, EditModeToggle
```

## State management

State is intentionally kept small. `src/context/ContentContext.jsx` provides a
single context backed by `useReducer`:

- **`packages`** and **`team`** - the collections rendered by their sections,
  seeded from `src/data/`.
- **`editMode`** - a boolean toggled by the floating button at the bottom-right.

Sections read a collection through the `useCollection(name)` hook, which returns
`items` plus `add`, `update` and `remove` helpers. This is enough for the
"items can be added / removed / updated" requirement without pulling in Redux,
Zustand or similar.

## Form validation (Zod)

The newsletter email field is validated against a Zod schema
(`src/schemas/newsletterSchema.js`) wired into Mantine's form via
`zodResolver`. The schema:

- trims the value and requires it to be non-empty (`Email is required`)
- caps the length at 254 characters
- checks the address format with `z.string().email()`
- rejects consecutive dots (`foo..bar@x.com`)

`pipe` is used so an empty field reports "Email is required" rather than the
format message.

To see it in action: submit with the field empty, then with `notanemail`, then
with a real address such as `name@example.com`. Errors appear beneath the field;
a valid submit shows a local "Thanks for subscribing!" line, which clears again
as soon as the field is edited (handled with `onValuesChange`).

There is no backend, so a successful submit only updates local state.

## Dynamic content and edit mode

Every repeating block renders from data, never from hardcoded JSX. Two ways to
change it:

1. **Edit the seed files** in `src/data/` - add, remove or change an entry and
   the section re-renders.
2. **At runtime** - click **"Edit content"** (bottom-right). Each card then gets
   a remove control, and an **Add package** / **Add member** button appends a
   new item. A short "added successfully" note shows next to the button and
   disappears after two seconds.

The Team row is a carousel (the design marks it as one). Packages uses a
carousel too, so that items added at runtime stay on a single row instead of
wrapping. Prev / next controls only appear once there are more items than fit.
In the default (non-edit) view the page matches the design: two package cards,
four team cards, no controls.

The **Edit content** button is fixed to the bottom-right corner. On wide
screens (from 96em / ~1536px) the footer's social icons stay at the far right
as in the design; below that they sit next to the copyright line on the left,
so the button never covers them or blocks clicks.

## Design tokens

| Token | Value | Used for |
| --- | --- | --- |
| Primary | `#96BB7C` | Buttons, icons, links, accent fills |
| Heading text | `#252B42` | Headings |
| Body text | `#737373` | Paragraph copy |
| Accent bar | `#E74040` | Short underline under section titles |
| Section tint | `#FFF2F3` | Hero and newsletter backgrounds |
| Footer strip | `#FAFAFA` | Footer lower bar |
| Font | Montserrat (400, 500, 700) | Everything |
| Radii | 5 / 10 / 20 px | Controls / icon tiles / team cards |

Type scale (size / line-height): H1 58/80, H2 40/50, H3 24/32, hero subtitle
20/30, card and footer headings 16/24, body 14/20, small 12/16.

## Assumptions and decisions

- **"Affordable Packages"** - the design shows the heading as "Approdable
  Packages". Read as a typo and corrected to "Affordable", which fits the
  section's meaning.
- **Hero artwork** ships as a single transparent PNG (photo plus the decorative
  blobs) rather than rebuilt vector shapes.
- **Icons** - feature-card and social icons are the SVGs from the design.
  Footer contact icons use Tabler equivalents (`IconPhone`, `IconMapPin`,
  `IconSend`) as there were no custom assets for them.
- **Newsletter** - no API is specified, so validation runs client-side and a
  successful submit only shows a local confirmation.
- **Responsive layouts** - only a desktop frame was provided; tablet and mobile
  behaviour is derived with Mantine's breakpoints and responsive style props
  (columns stack, the nav collapses to a burger menu, carousels show fewer
  cards with a peek).
- **Placeholder content** - repeated names ("Julian Jameson"), the "Profession"
  label and the lorem-style paragraph are kept as they appear in the design.
- **Footer social icons** - kept at the right edge on wide screens to match the
  design, but shifted left next to the copyright text below 96em (~1536px). The
  "Edit content" button is fixed to the bottom-right, and at smaller widths it
  would otherwise overlap the icons and make them unclickable. This uses one
  extra breakpoint (`xxl`) added in `src/theme.js`.

## Constraints followed

- Mantine components for all UI; no Tailwind, styled-components or other CSS
  libraries.
- Styling through Mantine style props and the theme. The one exception is
  `src/components/common/HoverArrowLink.module.css`, which holds the
  `:hover` transform for the "arrow moves 5px right" interaction the design
  calls for - Mantine's style props can't target a pseudo-class.
- Components are small, reusable and named for what they render.
