import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { CSS } from '@stitches/react';
import React from 'react';

import { Button } from '../../Button';
import { Text } from '../../Text';
import { HeaderSidebarContainer } from './styles';

type HeaderSidebarProps = {
  changeStyle(): void;
};

export function HeaderSidebar({ changeStyle }: HeaderSidebarProps) {
  return (
    <HeaderSidebarContainer className="header_sidebar">
      <Text className="title">Dashboard</Text>
      <Button text="primary" onClick={changeStyle}>
        <HamburgerMenuIcon />
      </Button>
    </HeaderSidebarContainer>
  );
}
