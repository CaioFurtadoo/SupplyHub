import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const ManagerRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/" />; // não autenticado, volta para login

  if (user.type !== 'MANAGER') return <Navigate to="/produtos" />; // sem permissão

  return <Outlet />;
};