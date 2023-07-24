import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Login } from '../pages/Login'
import { Profile } from '../pages/Profile'
import { ProtectedRoutes } from './ProtectedRoutes'
import { Register } from '../pages/Register'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/user' element={<ProtectedRoutes/>}>
        <Route path='profile' element={<Profile/>} />
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}