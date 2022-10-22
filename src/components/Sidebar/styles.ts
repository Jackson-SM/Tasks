import { lighten } from 'polished';

import { styled } from '../../config/stitches.config';
import dark from '../../styles/themes/dark';

export const SidebarContainer = styled('nav', {
  height: '100%',

  transition: 'width ease-out 300ms',

  display: 'flex',
  flexDirection: 'column',
  gap: '$md',
  background: `${lighten(-0.03, dark.background)}`,
});
