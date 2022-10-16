import { styled } from '../../config/stitches.config';

export const StyleText = styled('h1', {
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
  },
});
