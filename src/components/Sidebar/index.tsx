import React from 'react';

import { Avatar } from './Avatar';
import { HeaderSidebar } from './HeaderSidebar';
import { Navigation } from './Navigation';
import { SidebarContainer } from './styles';

type SidebarProps = React.ComponentProps<typeof SidebarContainer>;

export function Sidebar() {
  return (
    <SidebarContainer>
      <HeaderSidebar />
      <Navigation />
    </SidebarContainer>
  );
}
