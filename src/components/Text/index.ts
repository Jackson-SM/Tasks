import { darken } from 'polished';

import { styled } from '../../config/stitches.config';
import dark from '../../styles/themes/dark';

export const Text = styled('h1', {
  color: '$text',
  textDecoration: 'none',

  transition: 'color ease-in 130ms',

  defaultVariants: {
    size: 'sm',
  },

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
    },
    color: {
      primary: {
        color: '$primary',
      },
      secundary: {
        color: '$secundary',
      },
      tertiary: {
        color: '$tertiary',
      },
    },
    hoverColor: {
      primary: {
        '&:hover': {
          color: darken(0.1, dark.primary),
        },
      },
      secundary: {
        '&:hover': {
          color: darken(0.1, dark.secundary),
        },
      },
      tertiary: {
        '&:hover': {
          color: darken(0.1, dark.tertiary),
        },
      },
    },
  },
});
