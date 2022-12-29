import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/authentication";

const UnauthorizedOnly = () => {
    const {auth} = useAuth()
    const location = useLocation()

    return (
        !auth.user ? <Outlet/> : <Navigate to="/" state={{ from:location }} replace/>
    )
}

export default UnauthorizedOnly;