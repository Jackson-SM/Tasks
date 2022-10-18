import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { authenticate } = useAuth();

  return authenticate ? children : <Navigate to="/login" />;
}
