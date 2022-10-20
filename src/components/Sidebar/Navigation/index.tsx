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
        <LinkCustom to="/dashboard" colorHover="primary">
          <DashboardIcon />
          Dashboard
        </LinkCustom>
        <LinkCustom to="/dashboard/posts" colorHover="primary">
          <LockClosedIcon />
          Security
        </LinkCustom>
        <LinkCustom to="/dashboard" colorHover="primary">
          <StarFilledIcon />
          Favourites
        </LinkCustom>
        <LinkCustom to="/dashboard" colorHover="primary">
          <BarChartIcon />
          Charts
        </LinkCustom>
        <LinkCustom to="/dashboard" colorHover="primary">
          <GearIcon />
          Settings
        </LinkCustom>
      </LinkGroup>
      <LinkGroup title="Main">
        <LinkCustom to="/dashboard" colorHover="primary">
          <DashboardIcon />
          Dashboard
        </LinkCustom>
        <LinkCustom to="/dashboard/posts" colorHover="primary">
          <LockClosedIcon />
          Security
        </LinkCustom>
        <LinkCustom to="/dashboard" colorHover="primary">
          <StarFilledIcon />
          Favourites
        </LinkCustom>
      </LinkGroup>
    </NavigationContainer>
  );
}
