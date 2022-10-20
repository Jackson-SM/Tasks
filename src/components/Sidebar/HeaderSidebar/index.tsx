import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React from 'react';

import { Button } from '../../Button';
import { Text } from '../../Text';
import { HeaderSidebarContainer } from './styles';

export function HeaderSidebar() {
  return (
    <HeaderSidebarContainer>
      <Text className="title">Dashboard</Text>
      <Button text="primary">
        <HamburgerMenuIcon />
      </Button>
    </HeaderSidebarContainer>
  );
}
