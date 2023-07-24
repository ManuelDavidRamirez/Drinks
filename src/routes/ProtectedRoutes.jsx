import useUser from '../hooks/useUser'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {
    const { user } = useUser()
    return user ? <Outlet /> : <Navigate to={"/login"} replace/>
}