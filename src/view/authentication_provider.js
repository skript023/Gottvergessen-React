import { createContext, useState,useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const user = sessionStorage.getItem("RESPONSE");
        return JSON.parse(user) || {};
    });

    useEffect(() => {
        sessionStorage.setItem("RESPONSE", JSON.stringify(auth))
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;