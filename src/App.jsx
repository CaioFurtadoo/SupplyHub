import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Authentication/Login'
import { Authentication } from './pages/Authentication/Layout/Authentication'
import { RegisterAdm } from './pages/Authentication/Admin/RegisterAdm'
import { RegisterAdm2 } from './pages/Authentication/Admin/RegisterAdm2'

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Authentication/>}>
          <Route path='/adm' element={<RegisterAdm/> }></Route>
          <Route path="adm/submit" element={<RegisterAdm2/>}></Route>
          <Route index element={<Login/>}></Route>
        </Route>

        <Route>
          <Route path='/dashboard'></Route>
          <Route path='dashboard/gestor'></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

