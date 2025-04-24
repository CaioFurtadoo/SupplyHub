import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Authentication/Login'
import { Authentication } from './pages/Authentication/Layout/Authentication'
import { RegisterAdm } from './pages/Authentication/Admin/RegisterAdm'
import { RegisterAdm2 } from './pages/Authentication/Admin/RegisterAdm2'
import { Dashboard } from './pages/Dashboard/Layout/Dashboard'
import { AdminPage } from './pages/Dashboard/AdminPage'
import { CreateProduct } from './pages/Dashboard/CreateProduct'
import { ExportProduct } from './pages/Dashboard/ExportProduct'

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Authentication/>}>
          <Route path='/adm' element={<RegisterAdm/> }></Route>
          <Route path="adm/submit" element={<RegisterAdm2/>}></Route>
          <Route index element={<Login/>}></Route>
        </Route>

        <Route element={<Dashboard/>}>
          <Route path='/produtos' element={<CreateProduct/>}></Route>
          <Route path='produtos/expedir' element={<ExportProduct/>}></Route>
          <Route path='/gestor' element={<AdminPage/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

