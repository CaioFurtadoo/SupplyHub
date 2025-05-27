import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!user) return <Navigate to="/" />;

  return <Outlet />;
};
