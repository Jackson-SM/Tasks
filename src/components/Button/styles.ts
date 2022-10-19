import { ArrowRightIcon } from '@radix-ui/react-icons';
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

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&[disabled]': {
    backgroundColor: '',
  },

  [`& svg`]: {
    justifySelf: 'end',
  },

  defaultVariants: {
    variant: 'tertiary',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        '&:hover': {
          background: darken(0.1, `${dark.primary}`),
        },
      },
      secundary: {
        backgroundColor: '$secundary',
        '&:hover': {
          background: darken(0.1, `${dark.secundary}`),
        },
      },
      tertiary: {
        backgroundColor: '$tertiary',
        '&:hover': {
          background: darken(0.1, `${dark.tertiary}`),
        },
      },
    },
  },
});
