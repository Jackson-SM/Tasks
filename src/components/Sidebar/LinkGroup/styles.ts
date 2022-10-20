import { darken, lighten } from 'polished';

import { styled } from '../../../config/stitches.config';
import dark from '../../../styles/themes/dark';

export const LinkGroupContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$sm',
  marginTop: '15px',

  '& .title': {
    color: `${darken(0.6, 'white')}`,
    fontSize: '14px',
    padding: '5px',
    paddingLeft: '20px',
  },

  '& .childrens': {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
});
