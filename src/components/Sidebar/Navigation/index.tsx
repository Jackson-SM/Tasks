import {
  BarChartIcon,
  DashboardIcon,
  GearIcon,
  LockClosedIcon,
  StarFilledIcon,
  StarIcon,
} from '@radix-ui/react-icons';
import React from 'react';

import { LinkCustom } from '../../LinkCustom';
import LinkGroup from '../LinkGroup';
import { NavigationContainer } from './styles';

export function Navigation() {
  return (
    <NavigationContainer>
      <LinkGroup title="User">
        <LinkCustom to="/dashboard" colorHover="primary" text="Dashboard">
          <DashboardIcon />
        </LinkCustom>
        <LinkCustom to="/dashboard/posts" colorHover="primary" text="Security">
          <LockClosedIcon />
        </LinkCustom>
        <LinkCustom to="/dashboard" colorHover="primary" text="Favourites">
          <StarFilledIcon />
        </LinkCustom>
        <LinkCustom to="/dashboard" colorHover="primary" text="Charts">
          <BarChartIcon />
        </LinkCustom>
        <LinkCustom to="/dashboard" colorHover="primary" text="Settings">
          <GearIcon />
        </LinkCustom>
      </LinkGroup>
      <LinkGroup title="Main">
        <LinkCustom to="/dashboard" colorHover="primary" text="Dashboard">
          <DashboardIcon />
        </LinkCustom>
        <LinkCustom to="/dashboard/posts" colorHover="primary" text="Security">
          <LockClosedIcon />
        </LinkCustom>
        <LinkCustom to="/dashboard" colorHover="primary" text="Favourites">
          <StarFilledIcon />
        </LinkCustom>
      </LinkGroup>
    </NavigationContainer>
  );
}
