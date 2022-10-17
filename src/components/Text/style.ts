import { styled } from '../../config/stitches.config';

export const StyleText = styled('h1', {
  color: '$text',

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
  },
});
