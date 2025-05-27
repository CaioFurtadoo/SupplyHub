import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Authentication/Login'
import { Authentication } from './pages/Authentication/Layout/Authentication'
import { RegisterAdm } from './pages/Authentication/Admin/RegisterAdm'
import { Dashboard } from './pages/Dashboard/Layout/Dashboard'
import { AdminPage } from './pages/Dashboard/AdminPage'
import { CreateProduct } from './pages/Dashboard/CreateProduct'
import { ExportProduct } from './pages/Dashboard/ExportProduct'
import { RecebidosPage } from './pages/Dashboard/RecebidosPage'
import { ExpedidosPage } from './pages/Dashboard/ExpedidosPage'
import { AuthProvider } from './contexts/AuthContext';
import { ManagerRoute } from './components/ManagerRoute'
import { ProtectedRoute } from './components/ProtectedRoute'

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Acesso livre */}
          <Route element={<Authentication />}>
            <Route path='/adm' element={<RegisterAdm />} />
            <Route index element={<Login />} />
          </Route>

          {/* Protegido: qualquer usuário logado */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Dashboard />}>
              <Route path='/produtos' element={<RecebidosPage />} />
              <Route path='produtos/expedidos' element={<ExpedidosPage />} />
              <Route path='produtos/receber' element={<CreateProduct />} />
              <Route path='produtos/expedir' element={<ExportProduct />} />

              {/* Protegido: apenas MANAGER */}
              <Route element={<ManagerRoute />}>
                <Route path='/gestor' element={<AdminPage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
