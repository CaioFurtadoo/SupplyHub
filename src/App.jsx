import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './pages/Authentication/Funcionario/Register/'
import { Login } from './pages/Authentication/Login'
import { Authentication } from './pages/Authentication/Layout/Authentication'
import { RegisterAdm } from './pages/Authentication/Admin/RegisterAdm'
import { RegisterAdm2 } from './pages/Authentication/Admin/RegisterAdm2'

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Authentication/>}>
          <Route index element={<Register/>}></Route>
          <Route path='/adm' element={<RegisterAdm/> }></Route>
          <Route path="adm/submit" element={<RegisterAdm2/>}></Route>
          <Route path=":login" element={<Login/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

