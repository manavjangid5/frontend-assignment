// SVG assets exported from the Figma file. Colours are baked into the
// files (feature glyphs are white for the green tile; social glyphs use
// the brand green), so they are consumed as plain <img> sources.
import blackboards from './feature-blackboards.svg';
import telescope from './feature-telescope.svg';
import facebook from './social-facebook.svg';
import instagram from './social-instagram.svg';
import twitter from './social-twitter.svg';

// Keyed so `src/data` can reference an icon by a stable string rather than
// importing a component — keeps the data files serialisable and editable.
export const featureIcons = { blackboards, telescope };

export const socialIcons = { facebook, instagram, twitter };
