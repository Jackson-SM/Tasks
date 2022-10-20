import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

type PublicRouteProps = {
  children: JSX.Element;
};

export function PublicRoute({ children }: PublicRouteProps) {
  const { authenticate, verifyAuthenticate } = useAuth();

  const { data, isLoading } = useQuery('tasks', verifyAuthenticate);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return !authenticate ? children : <Navigate to="/" />;
}
