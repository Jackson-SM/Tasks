import { lighten } from 'polished';

import { styled } from '../../config/stitches.config';
import dark from '../../styles/themes/dark';

export const SidebarContainer = styled('nav', {
  width: '200px',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '$md',
  background: `${lighten(-0.03, dark.background)}`,
});
