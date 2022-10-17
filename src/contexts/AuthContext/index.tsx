import React, { useState, useEffect } from 'react';

type AuthContextProps = {
  signIn(email: string, password: string): void;
  signOut(): void;
  authenticate: boolean;
};

const AuthContext = React.createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: JSX.Element[];
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticate, setAuthenticate] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
  }, []);

  const signIn = () => {
    console.log('hello world');
  };
  const signOut = () => {
    console.log('hello world logout');
  };

  return (
    <AuthContext.Provider value={{ authenticate, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
