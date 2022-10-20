import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
  const { isLoading, authenticate, signIn, signOut, verifyAuthenticate } =
    useContext(AuthContext);

  return {
    isLoading,
    authenticate,
    signIn,
    signOut,
    verifyAuthenticate,
  };
};
