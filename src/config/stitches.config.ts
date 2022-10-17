import { createStitches } from '@stitches/react';

import dark from '../styles/themes/dark';

export const { styled, globalCss, css, theme } = createStitches({
  theme: {
    colors: dark,
    space: {
      sm: '8px',
      md: '20px',
      lg: '40px',
    },
    sizes: {
      sm: '30px',
      md: '60px',
      lg: '120',
    },
    fontSizes: {
      sm: '12px',
      md: '18',
      lg: '30',
    },
  },

  utils: {
    linearGradient: (value: string) => `linear-gradient(${value})`,
  },
});
