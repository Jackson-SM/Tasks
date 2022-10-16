import { whiteA, blackA } from '@radix-ui/colors';

import { styled } from '../../config/stitches.config';

export const FormContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  height: '400px',
  width: '350px',

  padding: '$sm',

  backgroundColor: `${whiteA.whiteA2}`,

  border: `2px solid ${whiteA.whiteA3}`,
  borderRadius: '4px',

  boxShadow: `0 0 20px 1px ${blackA.blackA6}`,
});

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const InputField = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  background: 'none',
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

export const HeaderForm = styled('div', {});

export const FooterForm = styled('div', {});
