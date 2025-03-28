import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './pages/Authentication/Funcionario/Register/'
import { Login } from './pages/Authentication/Funcionario/Login'
import { Authentication } from './pages/Authentication/Layout/Authentication'
import { RegisterAdm } from './pages/Authentication/Admin/RegisterAdm'
import { LoginAdm } from './pages/Authentication/Admin/LoginAdm'

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Authentication/>}>
          <Route index element={<Register/>}></Route>
          <Route path='/adm' element={<RegisterAdm/> }></Route>
          <Route path=":login" element={<Login/>}></Route>
          <Route path=":login/adm" element={<LoginAdm/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

