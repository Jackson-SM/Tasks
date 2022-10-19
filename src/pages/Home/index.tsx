import React from 'react';

import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';

export function Home() {
  const { signOut } = useAuth();

  return (
    <div>
      <Button onClick={signOut} variant="secundary">
        Sign Out
      </Button>
    </div>
  );
}
