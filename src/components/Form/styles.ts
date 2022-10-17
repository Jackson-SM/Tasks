import { whiteA, blackA } from '@radix-ui/colors';

import { styled } from '../../config/stitches.config';

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',

  height: '400px',
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

  width: '100%',

  gap: '$md',
});

export const StyledInputField = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  background: 'none',

  gap: '$sm',
});

export const Input = styled('input', {
  background: 'none',

  border: `1px solid ${whiteA.whiteA4}`,

  padding: '$sm',

  color: '$text',
});

export const Label = styled('label', {
  fontSize: '12px',
});

export const LinkForm = styled('a', {});

export const StyledHeaderForm = styled('div', {
  display: 'flex',
  '& img': {
    height: '100%',
  },
});

export const StyledFooterForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const FooterForm = styled('div', {});
