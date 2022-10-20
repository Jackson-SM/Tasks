import { darken, lighten } from 'polished';
import { Link } from 'react-router-dom';

import { styled } from '../../config/stitches.config';
import dark from '../../styles/themes/dark';

export const LinkCustomComponent = styled(Link, {
  textDecoration: 'none',
  color: '$text',

  display: 'flex',
  alignItems: 'center',

  padding: '10px',

  transition: 'color ease 200ms',

  marginLeft: '10px',

  '& svg': {
    width: '14px',
    height: '14px',
    marginRight: '40px',
  },

  defaultVariants: {
    fontSize: 'sm',
  },

  variants: {
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
    colorHover: {
      primary: {
        '&:hover': {
          color: '$primary',
          background: `${lighten(-0.01, dark.background)}`,
        },
      },
      secundary: {
        '&:hover': {
          color: '$secundary',
        },
      },
      tertiary: {
        '&:hover': {
          color: '$tertiary',
        },
      },
    },
    fontSize: {
      sm: {
        fontSize: '11px',
      },
      md: {
        fontSize: '12px',
      },
      lg: {
        fontSize: '24px',
      },
    },
  },
});
