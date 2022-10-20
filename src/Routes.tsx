import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './middlewares/PrivateRoute';
import { PublicRoute } from './middlewares/PublicRoute';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { GlobalStyle } from './styles/GlobalStyle';

export function AppRoutes() {
  useEffect(() => {
    GlobalStyle();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
    </Routes>
  );
}
