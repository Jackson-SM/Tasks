import { whiteA, blackA } from '@radix-ui/colors';
import { darken } from 'polished';

import { styled } from '../../config/stitches.config';
import dark from '../../styles/themes/dark';

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '500px',
  width: '350px',

  padding: '$sm',

  backgroundColor: `${whiteA.whiteA2}`,

  border: `2px solid ${whiteA.whiteA3}`,
  borderRadius: '4px',

  boxShadow: `0 0 20px 1px ${blackA.blackA6}`,
});

export const StyledForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',

  flex: 1,

  width: '100%',

  gap: '$md',
});

export const StyledInputField = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  background: 'none',

  gap: '$sm',
});

export const StyledInput = styled('input', {
  border: `1px solid ${whiteA.whiteA6}`,
  borderRadius: '4px',
  outline: 'none',

  padding: '$sm',

  background: 'none',
  color: '$text',

  transition: 'border-color ease 100ms',

  '&:focus': {
    borderColor: '$tertiary',
  },
});

export const Label = styled('label', {
  fontSize: '12px',
});

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const StyledLinkForm = styled('a', {
  textDecoration: 'none',

  defaultVariants: {
    color: 'tertiary',
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
        '&:hover': {
          color: darken(0.1, dark.primary),
        },
      },
      secundary: {
        color: '$secundary',
        '&:hover': {
          color: darken(0.2, dark.secundary),
        },
      },
      tertiary: {
        color: '$tertiary',
        '&:hover': {
          color: darken(0.1, dark.tertiary),
        },
      },
    },
  },
});

export const StyledHeaderForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '$md',
  '& img': {
    width: '80px',
    height: '80px',
  },
});

export const StyledFooterForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$sm',
});

export const FooterForm = styled('div', {});
