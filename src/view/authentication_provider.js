import { createContext, useState,useEffect } from "react";
import Decrypt from "./helper/decrypt";
import Xorstr from "./helper/encrypt";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const user = sessionStorage.getItem(Xorstr('_state'));
        if (user)
        {
            return JSON.parse(Decrypt(user))
        }
        return {}
    });

    useEffect(() => {
        if (auth.status)
        {
            const result = JSON.stringify(auth)
            sessionStorage.setItem(Xorstr('_state'), Xorstr(result))
        }
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;