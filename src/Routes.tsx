import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

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
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
