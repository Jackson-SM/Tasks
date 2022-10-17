import { lighten, darken } from 'polished';

import { styled } from '../../config/stitches.config';
import dark from '../../styles/themes/dark';

export const StyledButton = styled('button', {
  padding: '$sm',
  border: 'none',
  borderRadius: '3px',
  color: '$text',

  outlined: 'none',
  cursor: 'pointer',

  transition: 'background ease 100ms',

  '&:hover': {
    background: darken(0.1, `${dark.tertiary}`),
  },

  defaultVariants: {
    variant: 'tertiary',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
      },
      secundary: {
        backgroundColor: '$secundary',
      },
      tertiary: {
        backgroundColor: '$tertiary',
      },
    },
  },
});
