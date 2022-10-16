import { createStitches } from '@stitches/react';

export const { styled, globalCss, css } = createStitches({
  theme: {
    colors: {
      primary: '#3fa7d6',
      secundary: '#ee6352',
      tertiary: '#59cd90',

      background: '#131119',
      text: '#fcfffc',
    },
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
