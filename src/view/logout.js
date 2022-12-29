import { useNavigate } from "react-router-dom"

const Logout = () => {
    const navigate = useNavigate()
    sessionStorage.clear()
    navigate("/", {replace: true})
}

export default Logout