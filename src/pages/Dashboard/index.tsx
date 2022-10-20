import React from 'react';

import { DashboardBody } from './styles';

export function Dashboard() {
  return (
    <DashboardBody>
      <div>
        <h1>Sidebar</h1>
        <h3>Item 1</h3>
        <h3>Item 2</h3>
      </div>
      <div>
        <h1>Main</h1>
      </div>
    </DashboardBody>
  );
}
