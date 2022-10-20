import React from 'react';

import { HeaderSidebar } from './HeaderSidebar';
import { SidebarContainer } from './styles';

type SidebarProps = React.ComponentProps<typeof SidebarContainer>;

export function Sidebar() {
  return (
    <SidebarContainer>
      <HeaderSidebar />
    </SidebarContainer>
  );
}
