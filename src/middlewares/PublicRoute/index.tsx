import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

type PublicRouteProps = {
  children: JSX.Element;
};

export function PublicRoute({ children }: PublicRouteProps) {
  const { authenticate } = useAuth();

  return !authenticate ? children : <Navigate to="/" />;
}
