import { useContext } from "react";
import AuthContext from "../authentication_provider";

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;