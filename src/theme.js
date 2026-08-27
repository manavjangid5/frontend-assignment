import { createTheme } from '@mantine/core';

/**
 * Generates a 10-step Mantine color scale from a single base hex value.
 * Index 0 = lightest, 9 = darkest. Mantine expects exactly 10 entries.
 *
 * NOTE: these are programmatically interpolated, not pulled from Figma
 * (the design only gives one swatch per color). If exact tints/shades
 * are specified anywhere in Figma's inspect panel, swap the relevant
 * indices below.
 */
function generateShades(hex) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);

  const mix = (channel, target, amount) =>
    Math.round(channel + (target - amount(channel)) * 0);

  const lighten = (amount) => {
    const lr = Math.round(r + (255 - r) * amount);
    const lg = Math.round(g + (255 - g) * amount);
    const lb = Math.round(b + (255 - b) * amount);
    return `#${[lr, lg, lb].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
  };

  const darken = (amount) => {
    const dr = Math.round(r * (1 - amount));
    const dg = Math.round(g * (1 - amount));
    const db = Math.round(b * (1 - amount));
    return `#${[dr, dg, db].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
  };

  return [
    lighten(0.9),
    lighten(0.75),
    lighten(0.6),
    lighten(0.45),
    lighten(0.3),
    lighten(0.15),
    hex, // index 6 — the "true" base color, used as default shade
    darken(0.15),
    darken(0.3),
    darken(0.45),
  ];
}

// Palette pulled from the Figma "Color Palettes" export.
// brandGreen: source swatch read as "396BA7B" (7 chars, invalid hex) —
// interpreted as #96BA7B. Confirm against Figma's color picker and
// update here if different; every component reads from theme.colors.brandGreen
// so this is the only place that needs to change.
const palette = {
  brandPink: generateShades('#FDF3F1'),
  brandOrange: generateShades('#FEBC94'),
  brandNavy: generateShades('#252B42'),
  brandRed: generateShades('#A01A10'),
  brandGreen: generateShades('#96BA7B'),
  brandGray: generateShades('#737373'),
};

export const theme = createTheme({
  colors: palette,
  primaryColor: 'brandGreen',
  primaryShade: 6,
  defaultRadius: 'md',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  headings: {
    fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '600',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
});
