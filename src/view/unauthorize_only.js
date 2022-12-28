import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/authentication";

const UnauthorizedOnly = () => {
    const {auth} = useAuth()
    const location = useLocation()

    return (
        auth.status !== 235679422 ? <Outlet/> : <Navigate to="/dashboard" state={{ from:location }} replace/>
    )
}

export default UnauthorizedOnly;