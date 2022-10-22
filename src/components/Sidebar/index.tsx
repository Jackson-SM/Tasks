import { CSS } from '@stitches/react';
import React, { useState, useEffect } from 'react';

import { HeaderSidebar } from './HeaderSidebar';
import { Navigation } from './Navigation';
import { SidebarContainer } from './styles';

type SidebarProps = React.ComponentProps<typeof SidebarContainer>;

export function Sidebar() {
  const complete = {
    width: '200px',
  };
  const repressed = {
    width: '60px',
    '& .header_sidebar': {
      '& .title': {
        display: 'none',
      },
    },
    '& .link_group': {
      '& .title_container': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .title': {
          margin: 0,
          padding: 0,
        },
      },
      '& .childrens': {
        '& a': {
          '& span': {
            display: 'none',
          },
          '& svg': {
            margin: 0,
            padding: 0,
            width: '15px',
            height: '15px',
          },
        },
      },
    },
  };

  const [style, setStyle] = useState<string>('complete');
  const changeStyle = (): void => {
    setStyle((c) => (c === 'complete' ? 'repressed' : 'complete'));
  };

  const styleMedia = style === 'complete' ? complete : repressed;

  return (
    <SidebarContainer css={styleMedia}>
      <HeaderSidebar changeStyle={changeStyle} />
      <Navigation />
    </SidebarContainer>
  );
}
