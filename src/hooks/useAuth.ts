import { selectAuthData } from "../app/redux/auth/authSlice"
import { useSelector } from "../app/store"
import { AuthState } from "../utils/types"

const useAuth = () => {
    const auth = useSelector((state: AuthState) => selectAuthData(state))
    return {
        auth,
    }
}

export default useAuth;
