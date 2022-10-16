import { createStitches } from '@stitches/react';

export const { styled, globalCss, css } = createStitches({
  theme: {
    colors: {
      primary: '#1a8fe3',
      secundary: '#e5625e',
      tertiary: '#2fbf71',

      background: '#040f0f',
      text: '#fcfffc',
    },
    space: {
      sm: '10px',
      md: '20px',
      lg: '40px',
    },
  },
});
