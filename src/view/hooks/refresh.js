import axios, { request_refresh } from "../../api/axios";
import { useEffect } from "react";
import RefreshToken from "./refresh_token";
import useAuth from "./authentication";

const useRefreshToken = () => {
    const refresh = RefreshToken()
    const {auth} = useAuth()

    useEffect(() => {
        const request_intercept = request_refresh.interceptors.request.use(
            config => {
                if (!config.headers["Authorization"])
                {
                    config.headers["Authorization"] = `Bearer ${auth.token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        )
        
        const response_intercept = request_refresh.interceptors.response.use(
            response => response,
            async (error) => {
                const prevent_request = error.config;
                if (error.response.status === 401 && !prevent_request.sent) 
                {
                    prevent_request = true;
                    const new_access = await refresh();
                    prevent_request.headers["Authorization"] = `Bearer ${new_access.token}`;
                    return request_refresh;
                }
                return Promise.reject(error)
            }
        )

        return () => {
            axios.interceptors.request.eject(request_intercept);
            axios.interceptors.response.eject(response_intercept);
        }
    }, [auth, refresh])
    return request_refresh
}

export default useRefreshToken;