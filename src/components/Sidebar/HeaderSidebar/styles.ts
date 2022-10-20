import { styled } from '../../../config/stitches.config';

export const HeaderSidebarContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',

  padding: '10px',

  '& svg': {
    width: '20px',
    height: '20px',
  },
});
