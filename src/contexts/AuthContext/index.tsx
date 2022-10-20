import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Api } from '../../api/api';

export interface IUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserToken {
  user: IUser;
  token: string;
}

type AuthContextProps = {
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
  verifyAuthenticate(): void;
  authenticate: boolean;
  isLoading: boolean;
};

export const AuthContext = React.createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: JSX.Element[] | JSX.Element;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticate, setAuthenticate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const signIn = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    const {
      data: { token },
    } = await Api.post('/users/login', {
      email,
      password,
    });
    Api.defaults.headers.authorization = `Bearer ${token}`;
    localStorage.setItem('token', JSON.stringify(token));
    setAuthenticate(true);
    setIsLoading(false);
    navigate('/');
  };
  const signOut = () => {
    setIsLoading(true);

    Api.defaults.headers.authorization = null;
    localStorage.removeItem('token');
    setAuthenticate(false);
    navigate('/login');

    setIsLoading(false);
  };

  const verifyAuthenticate = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      Api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
    }
    const { data } = await Api.get('/isauth');
    if (data.statusCode === 200) setAuthenticate(true);

    console.log(data);
  };

  return (
    <AuthContext.Provider
      value={{ authenticate, isLoading, signIn, signOut, verifyAuthenticate }}
    >
      {children}
    </AuthContext.Provider>
  );
}
