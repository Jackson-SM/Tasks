import React from 'react';

import { Sidebar } from '../../components/Sidebar';
import { Main } from './Main';
import { DashboardBody } from './styles';

export function Dashboard() {
  return (
    <DashboardBody>
      <Sidebar />
      <Main />
    </DashboardBody>
  );
}
