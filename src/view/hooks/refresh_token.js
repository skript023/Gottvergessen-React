import axios from "../../api/axios"
import useAuth from "./authentication"


const RefreshToken = () => {
    const {setAuth} = useAuth();
    const refresh = async () => {
        const state = sessionStorage.getItem("_state")
        const identity = sessionStorage.getItem("_userLoggedin")
        const response = await axios.post("/auth/refresh", {"identity": identity, code: Number(state)}, {headers: {'Content-Type': 'application/json'}})
        setAuth(prev => {
            return {...prev, 
                message: response.data.message,
                status: response.data.status, 
                token: response.data.token,
                user: response.data.user
            }
        })

        return response.data
    }
    return refresh
}

export default RefreshToken