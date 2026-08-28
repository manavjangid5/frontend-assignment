import { createTheme } from '@mantine/core';

/**
 * Builds a 10-step Mantine colour scale from a single base hex.
 * Index 0 = lightest, 9 = darkest; index 6 is the untouched base and is
 * used as the default shade (see `primaryShade` below).
 *
 * The Figma file only provides one swatch per colour, so the tints/shades
 * either side of the base are interpolated. The base values themselves are
 * taken from the component styles in the design (NOT the "Color Palettes"
 * board, whose swatch labels disagree with what the components actually use).
 */
function generateShades(hex) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);

  const toHex = (channels) =>
    `#${channels.map((c) => Math.round(c).toString(16).padStart(2, '0')).join('')}`;

  const lighten = (amount) =>
    toHex([r + (255 - r) * amount, g + (255 - g) * amount, b + (255 - b) * amount]);

  const darken = (amount) => toHex([r * (1 - amount), g * (1 - amount), b * (1 - amount)]);

  return [
    lighten(0.9),
    lighten(0.75),
    lighten(0.6),
    lighten(0.45),
    lighten(0.3),
    lighten(0.15),
    hex, // index 6 — the base colour from Figma
    darken(0.15),
    darken(0.3),
    darken(0.45),
  ];
}

/**
 * Brand palette. Base hexes are the semantic colours named in the Figma
 * component CSS:
 *   primary-color            #96BB7C   (buttons, icons, links, accents)
 *   text-color               #252B42   (headings)
 *   second-text-color        #737373   (body copy)
 *   danger-color             #E74040   (the short accent underlines)
 *   faded-secondary-color-2  #FFF2F3   (tinted section backgrounds)
 */
const palette = {
  brandGreen: generateShades('#96BB7C'),
  brandNavy: generateShades('#252B42'),
  brandGray: generateShades('#737373'),
  brandRed: generateShades('#E74040'),
  // Anchored so index 0 is the exact section-background tint from Figma.
  brandPink: [
    '#FFF2F3',
    '#FFE3E5',
    '#FFC9CD',
    '#FFAAB0',
    '#FF8790',
    '#F5606B',
    '#E74040',
    '#C7333C',
    '#A02932',
    '#7C2028',
  ],
};

export const theme = createTheme({
  colors: palette,
  primaryColor: 'brandGreen',
  primaryShade: 6,

  fontFamily:
    "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily:
      "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeight: '700',
    // Matches the Figma type ramp (font-size / line-height).
    sizes: {
      h1: { fontSize: '58px', lineHeight: '80px', fontWeight: '700' },
      h2: { fontSize: '40px', lineHeight: '50px', fontWeight: '700' },
      h3: { fontSize: '24px', lineHeight: '32px', fontWeight: '700' },
      h4: { fontSize: '20px', lineHeight: '30px', fontWeight: '400' },
      h5: { fontSize: '16px', lineHeight: '24px', fontWeight: '700' },
      h6: { fontSize: '14px', lineHeight: '24px', fontWeight: '700' },
    },
  },

  // Figma body sizes: paragraph 14/20, small 12/16, h5 16/24, hero sub 20/30.
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
  lineHeights: {
    xs: '1.333',
    sm: '1.43',
    md: '1.5',
    lg: '1.5',
    xl: '1.333',
  },

  // Figma radii: 5px controls, 10px icon tiles, 20px user cards.
  radius: {
    sm: '5px',
    md: '10px',
    lg: '20px',
  },
  defaultRadius: 'sm',

  // Figma "accentued-drop-shadow" on cards.
  shadows: {
    sm: '0 6px 12px rgba(0, 0, 0, 0.05)',
    md: '0 13px 19px rgba(0, 0, 0, 0.07)',
  },

  // The design tracks every text style at ~0.2px letter-spacing.
  other: {
    letterSpacing: '0.2px',
    containerWidth: 1050,
    navWidth: 1320,
  },

  components: {
    Title: {
      styles: { root: { letterSpacing: '0.2px' } },
    },
    Text: {
      styles: { root: { letterSpacing: '0.2px' } },
    },
    Anchor: {
      styles: { root: { letterSpacing: '0.2px' } },
    },
    Button: {
      defaultProps: { radius: 'sm' },
      styles: {
        root: { fontWeight: 700, letterSpacing: '0.2px' },
      },
    },
  },
});
