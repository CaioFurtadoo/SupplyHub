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

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Authentication/>}>
          <Route path='/adm' element={<RegisterAdm/> }></Route>
          <Route index element={<Login/>}></Route>
        </Route>

        <Route element={<Dashboard/>}>
        <Route path='/produtos' element={<RecebidosPage/>}></Route>
          <Route path='produtos/expedidos' element={<ExpedidosPage/>}></Route>
          <Route path='produtos/receber' element={<CreateProduct/>}></Route>
          <Route path='produtos/expedir' element={<ExportProduct/>}></Route>
          <Route path='/gestor' element={<AdminPage/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

